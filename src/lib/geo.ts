// Lightweight reverse-geocoding via Nominatim (OpenStreetMap).
// Public API, no key. Rate-limited to 1 req/s — we cache aggressively
// in localStorage since city names don't change for a given coord.

const NOMINATIM_BASE = "https://nominatim.openstreetmap.org/reverse";

export type ReverseGeoResult = {
  city?: string;
  state?: string;
  country?: string;
  /** Best human-readable label, e.g. "Depok, Jawa Barat" */
  display: string;
};

type NominatimAddress = {
  city?: string;
  town?: string;
  village?: string;
  municipality?: string;
  county?: string;
  state?: string;
  country?: string;
};

type NominatimResponse = {
  address?: NominatimAddress;
};

const cacheKey = (lat: number, lon: number) =>
  // Round to 2 decimals (~1km) so nearby coords share the same cache hit.
  `sakinah:geo:${lat.toFixed(2)},${lon.toFixed(2)}`;

export async function reverseGeocode(
  lat: number,
  lon: number,
): Promise<ReverseGeoResult | null> {
  if (typeof window !== "undefined") {
    const cached = window.localStorage.getItem(cacheKey(lat, lon));
    if (cached) {
      try {
        return JSON.parse(cached) as ReverseGeoResult;
      } catch {
        // fall through and refetch
      }
    }
  }

  try {
    const params = new URLSearchParams({
      format: "json",
      lat: String(lat),
      lon: String(lon),
      zoom: "10",
      "accept-language": "id",
    });
    const res = await fetch(`${NOMINATIM_BASE}?${params}`, {
      headers: { Accept: "application/json" },
    });
    if (!res.ok) return null;
    const data = (await res.json()) as NominatimResponse;
    const addr = data.address ?? {};
    const city =
      addr.city ||
      addr.town ||
      addr.village ||
      addr.municipality ||
      addr.county;
    const parts = [city, addr.state].filter(Boolean);
    const display =
      parts.length > 0
        ? parts.join(", ")
        : (addr.country ?? "Lokasi tidak dikenali");

    const result: ReverseGeoResult = {
      city,
      state: addr.state,
      country: addr.country,
      display,
    };
    if (typeof window !== "undefined") {
      window.localStorage.setItem(
        cacheKey(lat, lon),
        JSON.stringify(result),
      );
    }
    return result;
  } catch {
    return null;
  }
}

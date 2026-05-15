// Lightweight geocoding via Nominatim (OpenStreetMap).
// Public API, no key. Rate-limited to 1 req/s, so we cache aggressively
// in localStorage since city names do not change for a given coordinate.

const NOMINATIM_REVERSE_BASE = "https://nominatim.openstreetmap.org/reverse";
const NOMINATIM_SEARCH_BASE = "https://nominatim.openstreetmap.org/search";

export type ReverseGeoResult = {
  city?: string;
  state?: string;
  country?: string;
  /** Best human-readable label, e.g. "Depok, Jawa Barat" */
  display: string;
};

export type PlaceSearchResult = ReverseGeoResult & {
  latitude: number;
  longitude: number;
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

type SearchResponse = Array<{
  display_name: string;
  lat: string;
  lon: string;
  address?: NominatimAddress;
}>;

const cacheKey = (lat: number, lon: number) =>
  // Round to 2 decimals, roughly 1 km, so nearby coords share the same cache hit.
  `sakinah:geo:${lat.toFixed(2)},${lon.toFixed(2)}`;

const searchCacheKey = (query: string) =>
  `sakinah:geo-search:${query.trim().toLowerCase()}`;

function addressToDisplay(
  address: NominatimAddress,
  fallback: string,
): ReverseGeoResult {
  const city =
    address.city ||
    address.town ||
    address.village ||
    address.municipality ||
    address.county;
  const parts = [city, address.state].filter(Boolean);
  return {
    city,
    state: address.state,
    country: address.country,
    display:
      parts.length > 0
        ? parts.join(", ")
        : (address.country ?? fallback),
  };
}

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
    const res = await fetch(`${NOMINATIM_REVERSE_BASE}?${params}`, {
      headers: { Accept: "application/json" },
    });
    if (!res.ok) return null;
    const data = (await res.json()) as NominatimResponse;
    const result = addressToDisplay(
      data.address ?? {},
      "Lokasi tidak dikenali",
    );
    if (typeof window !== "undefined") {
      window.localStorage.setItem(cacheKey(lat, lon), JSON.stringify(result));
    }
    return result;
  } catch {
    return null;
  }
}

export async function searchPlaces(
  query: string,
): Promise<PlaceSearchResult[]> {
  const q = query.trim();
  if (q.length < 3) return [];

  if (typeof window !== "undefined") {
    const cached = window.localStorage.getItem(searchCacheKey(q));
    if (cached) {
      try {
        return JSON.parse(cached) as PlaceSearchResult[];
      } catch {
        // fall through and refetch
      }
    }
  }

  try {
    const params = new URLSearchParams({
      format: "json",
      q,
      limit: "5",
      addressdetails: "1",
      "accept-language": "id",
    });
    const res = await fetch(`${NOMINATIM_SEARCH_BASE}?${params}`, {
      headers: { Accept: "application/json" },
    });
    if (!res.ok) return [];
    const data = (await res.json()) as SearchResponse;
    const results = data
      .map((item) => {
        const latitude = Number(item.lat);
        const longitude = Number(item.lon);
        if (!Number.isFinite(latitude) || !Number.isFinite(longitude)) {
          return null;
        }
        const label = addressToDisplay(item.address ?? {}, item.display_name);
        return {
          ...label,
          latitude,
          longitude,
        };
      })
      .filter((item): item is PlaceSearchResult => Boolean(item));

    if (typeof window !== "undefined") {
      window.localStorage.setItem(searchCacheKey(q), JSON.stringify(results));
    }
    return results;
  } catch {
    return [];
  }
}

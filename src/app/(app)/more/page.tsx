"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function MoreRedirectPage() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/hati");
  }, [router]);
  return null;
}

import { NextRequest } from "next/server";
import { updateSession } from "@/lib/supabase/middleware";

export default async function proxy(request: NextRequest) {
  const url = new URL(request.url);

  // Contoh: Abaikan file static
  if (
    url.pathname.startsWith("/_next") ||
    url.pathname.startsWith("/favicon.ico") ||
    url.pathname.match(/\.(svg|png|jpg|jpeg|gif|webp)$/)
  ) {
    return;
  }

  // Supabase session update
  return updateSession(request);
}

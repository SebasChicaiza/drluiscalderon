import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();

  // If user clicked the intl banner, force English and keep hash.
  if (url.pathname === "/trayectoria" && url.searchParams.get("intl") === "1") {
    url.searchParams.delete("intl");
    url.hash = url.hash || "turismo-medico";
    const res = NextResponse.rewrite(url);
    res.headers.set("x-internal-intl", "en");
    return res;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/trayectoria"],
};

// middleware.ts
import { NextResponse, NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("auth");

  const isPublicPath = [
    "/login",
    "/signup",
    "/api/auth/login",
    "/api/auth/signup",
    "/_next",
  ].some((path) => pathname.startsWith(path));
  const isApiPath = pathname.startsWith("/api/");
  
  if (!token && (isPublicPath || isApiPath)) return NextResponse.next();

  // Redirect authenticated users away from the login page
  if (pathname === "/login" && token) {
    const url = request.nextUrl.clone();
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  if (!token) {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|api/auth).*)",
    "/api/:path*",
  ],
};

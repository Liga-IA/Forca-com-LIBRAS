import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/") {
    try {
      const response = NextResponse.next();
      return response;
    } catch (error) {
      console.error('Erro no middleware:', error);
      const response = NextResponse.next();
      return response;
    }
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/"],
};

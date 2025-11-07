import { NextRequest, NextResponse } from "next/server";

let pageViews = 0;

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/") {
    try {
     
      const data = {
        pageViews: pageViews++,
        timestamp: new Date().toISOString(),
      }

  

      console.log("Dados:", data);

      
      const response = NextResponse.next();
      response.headers.set('x-page-views', pageViews.toString());
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

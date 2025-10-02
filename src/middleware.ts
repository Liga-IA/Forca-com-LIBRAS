import { NextRequest, NextResponse } from "next/server";
import { GeolocationService } from "./lib/geolocation";

let pageViews = 0;

export async function middleware(request: NextRequest) {
  const userIp = (await GeolocationService.getUserIP()) || "0.0.0.0";
  const locationData = await GeolocationService.getLocationByIP(userIp);

  if (request.nextUrl.pathname === "/") {
    try {
     
      const {city, region, country} = locationData || {};

      const data = {
        ip: userIp,
        cidade: city,
        regiao: region,
        pais: country,
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

import { GeolocationService } from "@/lib/geolocation";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Forca com LIBRAS",
  description:
    "Jogue a Forca com LIBRAS, uma versão do jogo Forca com tradução para Libras",
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const cityIp = (await GeolocationService.getCityIP()) || "0.0.0.0";
  const locationData = await GeolocationService.getLocationByIP(cityIp);
  await GeolocationService.saveLocation(cityIp, locationData);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono, Figtree } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const figtree = Figtree({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IRIS - Interface de Reconhecimento Interactivo de Sinais",
  description:
    "Jogue a Forca com LIBRAS, uma versão do jogo Forca com tradução para Libras",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={cn("font-sans", figtree.variable)}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen relative overflow-x-hidden bg-black text-white`}
        style={{
          background: `
            radial-gradient(circle at top left, rgba(98, 0, 255, 0.18) 0%, transparent 28%),
            radial-gradient(circle at bottom right, rgba(162, 0, 255, 0.14) 0%, transparent 30%),
            radial-gradient(circle at center, rgba(75, 0, 130, 0.08) 0%, transparent 45%),
            linear-gradient(135deg, #030014 0%, #050019 35%, #07001f 70%, #02000f 100%)
          `,
        }}
      >
        <div
          className="fixed inset-0 pointer-events-none overflow-hidden"
          aria-hidden="true"
        >
          <div
            className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full opacity-20 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(130,69,255,0.7) 0%, rgba(130,69,255,0) 70%)",
            }}
          />
          <div
            className="absolute -bottom-52 -right-52 w-[750px] h-[750px] rounded-full opacity-20 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(86,0,255,0.6) 0%, rgba(86,0,255,0) 72%)",
            }}
          />
          <div
            className="absolute left-0 top-0 h-full w-[340px] opacity-[0.12]"
            style={{
              backgroundImage:
                "radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)",
              backgroundSize: "18px 18px",
            }}
          />
          <div
            className="absolute right-0 top-0 h-full w-[300px] opacity-[0.10]"
            style={{
              backgroundImage:
                "radial-gradient(rgba(180,120,255,0.9) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />
          <div
            className="absolute top-1/3 -left-24 w-[420px] h-[420px] rounded-full opacity-20 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(183,0,255,0.7) 0%, transparent 72%)",
            }}
          />
          <div
            className="absolute bottom-1/4 -right-20 w-[350px] h-[350px] rounded-full opacity-20 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(0,89,255,0.6) 0%, transparent 72%)",
            }}
          />
          <div className="absolute top-[18%] left-[12%] w-2 h-2 rounded-full bg-purple-400 opacity-40" />
          <div className="absolute top-[22%] left-[42%] w-1.5 h-1.5 rounded-full bg-violet-300 opacity-30" />
          <div className="absolute top-[38%] left-[18%] w-3 h-3 rounded-full border border-fuchsia-400 opacity-50" />
          <div className="absolute top-[44%] left-[60%] w-1.5 h-1.5 rounded-full bg-blue-300 opacity-40" />
          <div className="absolute top-[58%] left-[25%] w-2 h-2 rounded-full bg-purple-300 opacity-30" />
          <div className="absolute top-[64%] right-[18%] w-2 h-2 rounded-full bg-violet-200 opacity-30" />
          <div className="absolute top-[30%] right-[26%] w-5 h-5 rounded-full border-2 border-blue-400 opacity-60" />
          <div className="absolute bottom-[18%] left-[35%] w-2 h-2 rounded-full bg-fuchsia-300 opacity-40" />
          <div className="absolute bottom-[30%] right-[12%] w-1.5 h-1.5 rounded-full bg-white opacity-30" />
          <div className="absolute top-[14%] right-[38%] w-1 h-1 rounded-full bg-purple-200 opacity-50" />
          <div className="absolute top-[72%] left-[10%] w-1.5 h-1.5 rounded-full bg-blue-200 opacity-40" />
          <div className="absolute top-[48%] right-[42%] w-2 h-2 rounded-full bg-fuchsia-200 opacity-30" />

          <svg
            className="absolute top-20 left-1/3 opacity-40 text-purple-200"
            width="10"
            height="10"
            viewBox="0 0 16 16"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 0 L9.5 6 L16 8 L9.5 10 L8 16 L6.5 10 L0 8 L6.5 6 Z" />
          </svg>

          <svg
            className="absolute bottom-24 right-1/4 opacity-30 text-violet-200"
            width="8"
            height="8"
            viewBox="0 0 16 16"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 0 L9.5 6 L16 8 L9.5 10 L8 16 L6.5 10 L0 8 L6.5 6 Z" />
          </svg>

          <svg
            className="absolute top-1/2 right-20 opacity-30 text-blue-200"
            width="9"
            height="9"
            viewBox="0 0 16 16"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 0 L9.5 6 L16 8 L9.5 10 L8 16 L6.5 10 L0 8 L6.5 6 Z" />
          </svg>

          <div
            className="absolute inset-0 opacity-70"
            style={{
              background:
                "radial-gradient(circle at center, transparent 45%, rgba(0,0,0,0.6) 100%)",
            }}
          />
        </div>

        {children}
      </body>
    </html>
  );
}

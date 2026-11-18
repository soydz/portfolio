import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SidebarLeft, SidebarRight } from "@/components/organisms";
import { Providers } from "@/components/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Duban Zuluaga — Fullstack Developer",
  description:
    "Portfolio de Duban Zuluaga: backend y DevOps con Java, Spring Boot, Docker/Podman y Kubernetes, más frontends en React y TypeScript.",
  openGraph: {
    title: "Duban Zuluaga — Fullstack Developer",
    description:
      "Backend y DevOps developer. Java + Spring Boot, contenedores, Kubernetes y frontends con React y TypeScript.",
    type: "website",
    locale: "es_CO",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background xl:flex-row">
        <Providers>
          <SidebarLeft />

          <main className="min-w-0 flex-1 overflow-x-hidden">{children}</main>

          <SidebarRight />
        </Providers>
      </body>
    </html>
  );
}

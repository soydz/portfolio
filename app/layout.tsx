import type { Metadata } from "next";
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
  title: "soydz.com",
  description: "Portfolio Duban Zuluaga",
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
      <body className="min-h-full flex flex-col lg:flex-row">
        <Providers>
          <SidebarLeft />

          <main className="flex-1 min-w-0 overflow-x-hidden">{children}</main>

          <SidebarRight />
        </Providers>
      </body>
    </html>
  );
}

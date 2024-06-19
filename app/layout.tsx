import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Link from "next/link";
import { PodcastProvider } from "./context/PodcastContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Podcaster",
  description: "Podcast player",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PodcastProvider>
      <html lang="en">
        <body className={inter.className}>
          <header>
            <Link href="/">
              <h4>Podcaster</h4>
            </Link>
          </header>
          {children}
        </body>
      </html>
    </PodcastProvider>
  );
}

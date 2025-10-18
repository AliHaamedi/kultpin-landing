import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
const spaceGoster = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KultPin - We breath the Kulture",
  description:
    "KultPin is a creative movement dedicated to celebrating the raw energy of hip-hop and graffiti culture.",
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: "/icons/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.variable} ${spaceGoster.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

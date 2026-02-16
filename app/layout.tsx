import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KDC.inlive | Kolhapur District Cricket Live",
  description:
    "Watch live Kolhapur district cricket matches, player highlights, fixtures, and live updates on KDC.inlive.",
  verification: {
    google: "c9hUhATiZ1kPgxUsSvRGgbsZ4svsNEJINpLTuNI4WL4",
    },
  keywords: [
    "KDC live",
    "Kolhapur cricket",
    "district cricket live",
    "local cricket streaming",
    "KDC.inlive",
    "Kolhapur live match",
  ],
  authors: [{ name: "KDC.inlive" }],
  creator: "KDC.inlive",
  publisher: "KDC.inlive",
  openGraph: {
    title: "KDC.inlive | Kolhapur District Cricket Live",
    description:
      "Live streaming and updates of Kolhapur district cricket matches.",
    url: "https://kdcinlive.com",
    siteName: "KDC.inlive",
    images: [
      {
        url: "/og-image.jpg", // create this image later
        width: 1200,
        height: 630,
        alt: "KDC.inlive",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}

import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KDC.inlive | Kolhapur District Cricket Live",
  description:
    "Watch live Kolhapur district cricket matches, player highlights, fixtures, and live updates on KDC.inlive.",

  verification: {
    google: "c9hUhATiZ1kPgxUsSvRGgbsZ4svsNEJINpLTuNI4WL4",
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

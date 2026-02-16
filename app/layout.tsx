// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "KDC.inlive – Kolhapur District Cricket Live",
//   description: "KDC.inlive is the ultimate hub for Kolhapur district cricket live streaming, match updates, community, and fan engagement.",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     // <html lang="en">
//     <html lang="en" suppressHydrationWarning>

//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         {children}
//       </body>
//     </html>
//   );
// }


import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KDC.inlive | Kolhapur District Cricket Live",
  description:
    "Watch live Kolhapur district cricket matches, player highlights, fixtures, and live updates on KDC.inlive.",
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
  // twitter: {
  //   card: "summary_large_image",
  //   title: "KDC.inlive",
  //   description:
  //     "Watch live Kolhapur district cricket matches and updates.",
  //   images: ["/og-image.jpg"],
  // },
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

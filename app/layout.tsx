import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Anchor NDSS — Care That Anchors. Support That Empowers.",
    template: "%s | Anchor NDSS"
  },
  description:
    "Anchor Nursing & Disability Support Services is a registered NDIS provider delivering person-centred disability and community-based supports across the Northern Territory.",
  metadataBase: new URL("https://anchornds.com.au"),
  openGraph: {
    title: "Anchor NDSS — Care That Anchors. Support That Empowers.",
    description:
      "Registered NDIS provider in Darwin, NT. Person-centred disability and nursing supports.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

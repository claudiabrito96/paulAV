import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  title: "Paul Stuart AV | Tampa & Chicago Audio Visual Experts",
  description:
    "Boutique Audio Visual Services for Corporate Conferences, Board Meetings, Live Events, and Premium Residences since 2010. Serving Tampa & Chicago.",
  keywords: "audio visual, AV installation, Tampa AV, Chicago AV, corporate AV, home theater, live event production",
  openGraph: {
    title: "Paul Stuart AV | Tampa & Chicago Audio Visual Experts",
    description: "Boutique AV Concierge since 2010. Corporate conferences, live events, home theaters.",
    url: "https://paul-av.vercel.app",
    siteName: "Paul Stuart AV",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}

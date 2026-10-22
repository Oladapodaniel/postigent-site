import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const title = "Postigent: plan once, post everywhere";
const description =
  "Postigent is a social media scheduler for small businesses, creators and agencies. Plan posts on one calendar and publish to Facebook, Instagram, LinkedIn, X, TikTok, YouTube, Telegram, Discord and more.";

export const metadata: Metadata = {
  metadataBase: new URL("https://postigent.com"),
  title,
  description,
  applicationName: "Postigent",
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.ico", apple: "/apple-touch-icon.png" },
  openGraph: {
    type: "website",
    url: "https://postigent.com",
    siteName: "Postigent",
    title,
    description,
  },
  twitter: { card: "summary_large_image", title, description },
};

export const viewport: Viewport = {
  themeColor: "#0e0e0e",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${bricolage.variable} ${jakarta.variable} antialiased`}>
      <body className="min-h-screen overflow-x-hidden">{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://coreplatform.ir"),
  title: "Core Platform — Connect. Understand. Act.",
  description:
    "Core Platform is the product family behind CoreLink and Core Signal: infrastructure for connected, observable and intelligent systems.",
  openGraph: {
    title: "Core Platform",
    description: "Connect systems. Turn data into signal. Act on what matters.",
    url: "https://coreplatform.ir",
    siteName: "Core Platform",
    type: "website",
  },
  alternates: { canonical: "https://coreplatform.ir" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}

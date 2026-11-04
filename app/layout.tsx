import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fairwayze | Run screen golf smarter",
  description: "Everything you need to manage bookings, sell memberships, and grow your screen golf venue.",
  openGraph: {
    title: "Fairwayze | Run screen golf smarter",
    description: "Everything you need to manage bookings, sell memberships, and grow your venue.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}

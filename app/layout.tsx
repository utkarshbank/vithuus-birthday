import type { Metadata } from "next";
import "./tailwind.css";
export const metadata: Metadata = { title: "A birthday story", description: "An interactive birthday story" };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}

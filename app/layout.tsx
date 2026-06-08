import type { Metadata } from "next";
import "./globals.css";
import { LeadProvider } from "./context/LeadContext";

export const metadata: Metadata = {
  title: "Stratus GrowthOps Portal",
  description: "AI-powered MSP Revenue Intelligence Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LeadProvider>{children}</LeadProvider>
      </body>
    </html>
  );
}
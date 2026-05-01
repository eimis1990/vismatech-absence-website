import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "VismaTech Absence Manager",
  description:
    "A Chrome extension for fast, focused absence registration in VismaTech.",
  openGraph: {
    title: "VismaTech Absence Manager",
    description:
      "Register absence reasons, dates, and submissions from a compact Chrome extension.",
    type: "website"
  },
  verification: {
    google: "09323wLa6_3cpj-ivasAIdVvlTNUtLtRlh83Jje1aq4",
  },
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

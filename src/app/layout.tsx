import type { Metadata } from "next";
import type { ReactNode } from 'react';
import "./globals.css";

export const metadata: Metadata = {
  title: "ryanwang's notion",
  description: "Record my h5 and hybird app develop experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div id="app-root">{children}</div>
      </body>
    </html>
  );
}

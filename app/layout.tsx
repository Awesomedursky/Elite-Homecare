import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Elite Homecare",
  description: "where compassion meets excellence",
};

const font = Nunito_Sans({
  weight: ["700", "600", "500", "400", "300"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased`}>
        <p>Header</p>
        {children}
        <p>Footer</p>
      </body>
    </html>
  );
}

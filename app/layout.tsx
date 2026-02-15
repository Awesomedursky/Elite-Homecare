import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/Navbar/nav";
import { Footer } from "./components/footer/footer";

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
    <html lang="en" suppressHydrationWarning>
      <body className={`${font.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

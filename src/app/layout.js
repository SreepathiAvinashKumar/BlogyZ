import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BlogyZ - Blog",
  description: "Personal Blog for tech",
  favicon: "/images/icon.png",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
      <link rel="icon" href={metadata.favicon} />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

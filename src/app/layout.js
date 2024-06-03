import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import { AuthProvider } from "./components/AppContext1";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BlogyZ - Blog",
  description: "Personal Blog for tech",
  // favicon: "/Im",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
      <link rel="icon" href={metadata.favicon} />
      </Head>
      <body className={inter.className}>
        <AuthProvider>
        <div>
        {children}
        </div>
        </AuthProvider>
        
        </body>
    </html>
  );
}

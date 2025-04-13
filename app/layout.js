import { Cormorant_Upright, Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Head from "next/head";

const cormorant_upright = Cormorant_Upright({
  variable: "--font-cormorant_upright",
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700']
});

const open_sans = Open_Sans({
  variable: "--font-open_sans",
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700', '800']
});

export const metadata = {
  title: "Deebrew",
  description: "Founded in 2000, Deebrew started as a small café with a vision for exceptional coffee. Now a beloved brand, we're known for quality and sustainability. Driven by passion, we create memorable coffee experiences. Join us in exploring coffee, one cup at a time.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     <Head>
      <link href='/logo.png' rel="icon"/>
     </Head>
      <body
        className={`${cormorant_upright.variable} ${open_sans.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}

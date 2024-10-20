import React from "react";
import Head from "next/head";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./styles/globals.css";

export const metadata = {
  title: "Tera Creations - Digital Agency",
  description: "Tera Creations - Where Vision Meets Precision",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
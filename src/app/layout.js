import React from 'react';
import ClientLayout from './ClientLayout'; // Adjust the path as necessary
import './globals.css';  
import localFont from "next/font/local";  
import Head from 'next/head';  
import logo from "../../public/logo.png";
import Script from 'next/script'; // Import Script from next/script for GTM and GA

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "asmiVeda",
  description: "asmiVeda",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>asmiVeda</title>
        <link rel="icon" href={logo} />
        
        {/* Google Site Verification */}
        <meta name="google-site-verification" content="RKkMrx5fxI1oZU-Hn1N2rJcJp6lFkuxvJbHzBsq3JY8" />
      </Head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        
        {/* Google Tag Manager (GTM) */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-5N7BQ735');`}
        </Script>

        {/* Google Tag Manager (noscript fallback) */}
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5N7BQ735"
            height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe>
        </noscript>

        {/* Google Analytics (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-PKH5C20N5G"
        ></Script>
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PKH5C20N5G');
          `}
        </Script>

        {/* Client Layout */}
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}

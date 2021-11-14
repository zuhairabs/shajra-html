import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";

import NextNprogress from "nextjs-progressbar";

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Shajrah - شجرة",
    alternateName: "Naugawan Sadat",
    url: "https://zuhairabs.github.io/shajra-html/",
    logo: "https://zuhairabs.github.io/shajra-html/logo-small.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "9022122553",
      contactType: "customer service",
      areaServed: [
        "IN",
        "IR",
        "IQ",
        "150",
        "142",
        "YE",
        "TR",
        "SE",
        "SA",
        "RU",
        "PK",
        "OM",
        "NO",
        "LB",
        "DE",
        "GH",
        "EG",
        "BD",
        "BH",
        "AZ",
        "AF",
        "US",
        "GB",
        "CA",
      ],
      availableLanguage: ["Arabic", "Azerbaijani", "Persian", "Hindi", "Urdu"],
    },
    sameAs: [
      "https://www.facebook.com/shiachannel110/",
      "https://twitter.com/",
      "https://www.instagram.com/",
      "https://www.youtube.com/",
      "https://zuhairabs.github.io/shajra-html/",
    ],
  };

//   const gTag = `  window.dataLayer = window.dataLayer || [];
//   function gtag(){dataLayer.push(arguments);}
//   gtag('js', new Date());
//   gtag('config', 'G-KXDCFS12GT');`;

let gTag = null;

  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Shajrah" />
        <title>Shajrah - شجرة</title>
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <link rel="canonical" href="https://zuhairabs.github.io/shajra-html/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Shajrah - شجرة" />
        <meta property="og:description" content="Shajrah - شجرة" />
        <meta
          property="og:url"
          content="https://zuhairabs.github.io/shajra-html/"
        />
        <meta property="og:site_name" content="Shajrah" />
        <meta
          property="og:image"
          content="https://zuhairabs.github.io/shajra-html/logo-small.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-KXDCFS12GT"
        ></script>
        <script>{gTag}</script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        {/* <!-- Meta Data --> */}
        <link rel="shortcut icon" href="assets/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="assets/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="assets/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="assets/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="assets/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="assets/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="assets/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="assets/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="assets/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="assets/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="assets/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="assets/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="assets/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="assets/favicon-16x16.png"
        />
        <link rel="manifest" href="assets/manifest.json" />
        <meta name="msapplication-TileColor" content="#088998" />
        <meta
          name="msapplication-TileImage"
          content="assets/ms-icon-144x144.png"
        />
        <meta name="theme-color" content="#fff" />

        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
          integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
          crossorigin="anonymous"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,600;0,700;0,800;1,400&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.linearicons.com/free/1.0.0/icon-font.min.css"
        />
        <link rel="stylesheet" href="/icon/linearicons.css" />
        <link rel="stylesheet" href="/switch.css" />

        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/gsap.min.js"></script>
        <script src="/js/script.js"></script>
      </Head>
      <NextNprogress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

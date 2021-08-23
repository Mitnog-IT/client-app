import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon_2.ico" />
          <meta name="author" content="MitnogIT" />
          <meta
            name="description"
            content="Welcome to mitnogit . We are a information and communicaion services provider company. We can can give you digital marketing, seo, social media marketing, sem, smm, aso, web development, web design, web bug fix, email marketing, video marketing, logo design, business card design, softwere development, mobile development, ecommarce development, cms development, wordpress development, etc."
          />
          <meta
            name="keywords"
            content=" digital marketing, seo, social media marketing, sem, smm, aso, web development, web design, web bug fix, email marketing, video marketing, logo design, business card design, softwere development, mobile development, ecommarce development, cms development, wordpress development, etc"
          />
          <meta
            property="og:description"
            content=" welcome to mitnogit. we are a information and communicaion services provider company. we can can give you digital marketing, seo, social media marketing, sem, smm, aso, web development, web design, web bug fix, email marketing, video marketing, logo design, business card design, softwere development, mobile development, ecommarce development, cms development, wordpress development, etc."
          />
          <meta property="og:image" content="img/fb.png" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="MitnogIT" />
          <meta property="og:title" content="Our Tech Your Future" />
          <meta property="og:url" content="https://mitnogit.com" />
          <meta name="twitter:og:url" content="https://twitter.com/mitnogit" />
          <meta
            name="twitter:description"
            content="  welcome to mitnogit. we are a information and communicaion services provider company. we can can give you digital marketing, seo, social media marketing, sem, smm, aso, web development, web design, web bug fix, email marketing, video marketing, logo design, business card design, softwere development, mobile development, ecommarce development, cms development, wordpress development, etc"
          />
          <meta name="twitter:title" content="Mitnog IT" />
          <meta name="facebook:og:url" content="https://faceook.com/mitnogit" />
          <meta
            name="facebook:description"
            content="  welcome to mitnogit. we are a information and communicaion services provider company. we can can give you digital marketing, seo, social media marketing, sem, smm, aso, web development, web design, web bug fix, email marketing, video marketing, logo design, business card design, softwere development, mobile development, ecommarce development, cms development, wordpress development, etc"
          />
          <meta name="facebook:title" content="Mitnog IT" />
          <meta
            name="linkedin:og:url"
            content="https://www.linkedin.com/company/mitnogit"
          />
          <meta
            name="linkedin:description"
            content="  welcome to mitnogit. we are a information and communicaion services provider company. we can can give you digital marketing, seo, social media marketing, sem, smm, aso, web development, web design, web bug fix, email marketing, video marketing, logo design, business card design, softwere development, mobile development, ecommarce development, cms development, wordpress development, etc"
          />
          <meta name="linkedin:title" content="Mitnog IT" />

          <meta
            name="google-site-verification"
            content="u6jaZCPZ8UrzStm-8aYfl1kv1Lm7WWS67EQshmkkrXI"
          />
          <meta name="yandex-verification" content="ab9f9cf3ee34e7be" />

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LegalService",
                name: "Mitnog IT",
                image:
                  "https://mitnogit.com/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2FMitnog.ab34646b071d75962608a25320aaf1c7.png&w=256&q=75",
                "@id": "",
                url: "https://mitnogit.com/",
                telephone: "01884598626",
                priceRange: "$$",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "monipur",
                  addressLocality: "dhaka",
                  postalCode: "1216",
                  addressCountry: "BD",
                },
              }),
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

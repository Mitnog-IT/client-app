import Head from 'next/head';
import Welcome from '../components/content/Welcome';
import Service from '../components/content/Service';
import Portfolio from '../components/content/Portfolio';
import Capacity from '../components/content/Capacity';
import Footer from '../components/content/Footer';
import Testimonial from '../components/content/Testimonial';

export default function Home() {
  return (
    <>
      <Head>
        <title>Mitnog-IT</title>
        <meta name="author" content="Mr.Hunter" />
        <meta name="description" content=" Xbox Gift Cards Freehere is a brand new website which will give you the opportunity to get Gift Cards. By having a Gift Card you will be given the opportunity to purchase games and other apps from online stores." />
        <meta name="keywords" content=" Xbox Gift Cards, Gift Card Codes, Get Gift Card Codes" />
        <meta property="og:description" content=" Xbox Gift Cards Freehere is a brand new website which will give you the opportunity to get Gift Cards. By having a Gift Card you will be given the opportunity to purchase games and other apps from online stores." />
        <meta property="og:image" content="img/fb.png" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Gift card Code 2021" />
        <meta property="og:title" content="Huge Collection Of Xbox Gift Cards" />
        <meta property="og:url" content="index-2.html" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:description" content=" Xbox Gift Cards Freehere is a brand new website which will give you the opportunity to get Gift Cards. By having a Gift Card you will be given the opportunity to purchase games and other apps from online stores" />
        <meta name="twitter:title" content="Huge Collection of Xbox Gift Cards" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Welcome />
      <Service />
      {/* <Portfolio /> */}
      <Capacity />
      <Testimonial />
      <Footer />

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </>
  )
}

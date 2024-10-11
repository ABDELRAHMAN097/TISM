import Navbar from '../components/Navbar';
import '../styles/globals.css';
import { RecoilRoot } from 'recoil';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Head>
        {/* SEO */}
        <title>أرضيات الخيول عالية الجودة | TISM</title>
        <meta
          name="description"
          content="TISM تقدم أرضيات عالية الجودة للخيول تضمن الراحة والحماية المثلى في ساحات الخيل والإسطبلات، باستخدام مواد مقاومة ومتينة."
        />
        <meta
          name="keywords"
          content="أرضيات الخيول, أرضيات مطاطية, تجهيزات الإسطبلات, TISM, أرضيات الساحات"
        />
        <meta name="author" content="TISM - تصنيع أرضيات الخيول" />
        <meta property="og:title" content="أرضيات الخيول عالية الجودة | TISM" />
        <meta
          property="og:description"
          content="تقدم TISM أرضيات متينة ومقاومة للخيول في ساحات الخيل والإسطبلات."
        />
        <meta property="og:image" content="/images/horse-flooring.jpg" />
        <meta property="og:url" content="https://tism-horseflooring.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="أرضيات الخيول عالية الجودة | TISM" />
        <meta
          name="twitter:description"
          content="تقدم TISM أرضيات متينة ومقاومة للخيول في ساحات الخيل والإسطبلات."
        />
        <meta name="twitter:image" content="/images/horse-flooring.jpg" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;

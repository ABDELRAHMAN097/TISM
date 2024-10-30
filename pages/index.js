import { useEffect, useState } from 'react'; 
import Head from 'next/head';
import About from '../components/About';
import Contact from '../components/Contact';
import Main from '../components/Main';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Slids from '../components/Slids';
import Loading from '../components/Loading';

export default function Home() {
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <Head>
        <title>TISM</title>
        <meta name="description" content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences." />
        <link rel="icon" href="/fav.png" />
      </Head>
      <Main />
      <Slids />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

import Navbar from '../components/Navbar';
import '../styles/globals.css';
import { RecoilRoot } from 'recoil';
function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Navbar />
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;

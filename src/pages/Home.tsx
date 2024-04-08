import Navbar from '../components/Navbar';
import Protection from '../components/Protection.jsx';
import Technology from '../components/Technology';
import Contact from '../components/Contact';
import Supplier from '../components/Supplier.tsx';
import HeroTwo from '../components/HeroTwo.tsx';

const Home = () => {
  return (
    <main className="px-auto mx-auto overflow-x-hidden body-bg overflow-y-hidden">
      {/* <video
        src="https://player.vimeo.com/progressive_redirect/playback/617758483/rendition/1080p/1080p.mp4?loc=external&signature=abb59e5d4393b334d8fe10a22676b69600e48bf96a91f9b8764b233800bfa6a0"
        autoPlay
        loop
        playsInline
        muted
        className="absolute -z-1"
      /> */}
      <Navbar />
      {/* <Hero /> */}
      <HeroTwo/>
      <Protection />
      {/* <Defcom /> */}
      <Technology />
      <Supplier />
      <Contact />
    </main>
  );
};

export default Home;

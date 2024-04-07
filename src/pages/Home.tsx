import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Protection from '../components/Protection.jsx';
import Technology from '../components/Technology';
import Contact from '../components/Contact';
import Supplier from '../components/Supplier.tsx';

const Home = () => {
  return (
    <main className="px-auto mx-auto overflow-x-hidden body-bg overflow-y-hidden">
      <video
        src="https://player.vimeo.com/progressive_redirect/playback/617758483/rendition/1080p/1080p.mp4?loc=external&signature=abb59e5d4393b334d8fe10a22676b69600e48bf96a91f9b8764b233800bfa6a0"
        autoPlay
        loop
        playsInline
        muted
        className="absolute -z-1"
      />
      <Navbar />
      <Hero />
      <Protection />
      <section className="flex flex-col lg:flex-row w-full bg-white">
        <div className="lg:w-1/3 bg-gray-100 overflow-hidden">
          <img
            src="https://metatrak.co.uk/wp-content/uploads/2022/01/solution-finder.png"
            alt="Solution finder"
            className="w-auto lg:h-150"
          />
        </div>

        <div className="md:w-2/3 flex items-center bg-white p-4 lg:p-8">
          <div className="w-full">
            <h2 className="text-5xl md:text-9xl font-bold text-slate-500 leading-none italic">
              EXPERTISE
            </h2>
            <p className="mt-4 text-lg md:text-xl">
              Unrivalled expertise from the vehicle security experts.
            </p>
            <p className="max-w-4xl mt-2 md:mt-4">
              Alaways one step ahead, we provide the most advanced tracking and
              immobilisation solutions available, accredited by Thatcham, the
              industry benchmark for product quality and performence.
            </p>
            <button className="text-2xl font-bold mt-3">
              Contact Us Today to Become a Dealer
            </button>
          </div>
        </div>
      </section>
      {/* <Defcom /> */}
      <Technology />
      <Supplier />
      <Contact />
    </main>
  );
};

export default Home;

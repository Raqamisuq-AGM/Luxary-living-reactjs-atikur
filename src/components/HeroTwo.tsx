import 'aos/dist/aos.css';
import image8 from '../assets/hero-video-background-mobile.jpg';

const HeroTwo = () => {
  return (
    <>
      <section className="hidden md:block h-[100vh] relative mb-30">
        <video
          src="https://player.vimeo.com/progressive_redirect/playback/617758483/rendition/1080p/1080p.mp4?loc=external&signature=abb59e5d4393b334d8fe10a22676b69600e48bf96a91f9b8764b233800bfa6a0"
          autoPlay
          loop
          playsInline
          muted
          className="absolute top-0 left-0 -z-1"
        />
        <div className="lg:grid place-items-center z-10">
          <h1 className="text-2xl lg:text-6xl font-bold mt-20 mb-24 text-center overlay-text ">
            Industry-leading stolen <br /> vehicle tracking solutions
          </h1>
        </div>
      </section>
      <section className="block md:hidden h-[100vh] relative mb-30">
        <div
        className='absolute -z-1 w-full top-0'
          style={{
            backgroundImage: `url(${image8})`,
            backgroundSize: 'cover',
            height: '100%',
            backgroundPosition: 'center',
          }}
        ></div>
        <div className="lg:grid place-items-center z-10">
          <h1 className="text-2xl lg:text-6xl font-bold pt-20 mb-24 text-center overlay-text ">
            Industry-leading stolen <br /> vehicle tracking solutions
          </h1>
        </div>
      </section>
    </>
  );
};

export default HeroTwo;

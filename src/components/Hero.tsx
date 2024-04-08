import 'aos/dist/aos.css';
import image8 from '../assets/hero-video-background-mobile.jpg';

const Hero = () => {
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
          <h1 className="text-2xl lg:text-6xl font-bold pt-20 mb-24 text-center overlay-text ">
            Industry-leading stolen <br /> vehicle tracking solutions
          </h1>
        </div>
      </section>
      <section className="block md:hidden h-[100vh] relative mb-30">
        <div
          className="absolute -z-1 w-full top-0"
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
          <a
            href="#contact-form"
            className="block w-fit items-center bg-red-600 text-white px-4 py-3 rounded  place-items-center text-2xl mx-auto -mt-15"
          >
            Become a Dealer
          </a>
        </div>
      </section>
      <section className="bg-slate-800 p-10 xsm:-mt-[120px] md:-mt-[300px] lg:mt-0 remove-top">
        <iframe
          src="https://www.youtube.com/embed/XooGJcxzA_c?si=hAWQm-ZFZ_SFWoq1&autoplay=1&mute=1&loop=1"
          class="rounded-[0.9rem] mx-auto w-[70%] h-[20rem] lg:h-[45rem] max-sm:w-[100%] max-sm:h-[16rem] drop-shadow-xl shadow-gray-500"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <a
          href="#contact-form"
          className="bg-red-500 text-white px-10 py-3 text-2xl rounded mx-auto w-fit block mt-10"
        >
          BECOME A DEALER
        </a>
      </section>
    </>
  );
};

export default Hero;

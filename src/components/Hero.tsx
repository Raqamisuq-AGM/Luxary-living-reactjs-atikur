import 'aos/dist/aos.css';

const Hero = () => {
  return (
    <>
      <section
        className="section-padding place-items-center relative py-24 md:py-0 p-10 pt-24 body-bg md:h-[100vh] "
        id="hero"
      >
        <div className="lg:grid place-items-center space-y-10 relative">
          <h1 className="text-2xl lg:text-7xl font-bold md:mt-50 mb-24 text-center overlay-text ">
            Industry-leading stolen <br /> vehicle tracking solutions
          </h1>
        </div>
      </section>
      <section className="grid place-items-center md:mb-30 md:mt-20">
        <iframe
          src="https://www.youtube.com/embed/XooGJcxzA_c?si=hAWQm-ZFZ_SFWoq1"
          className="rounded-[0.9rem] mx-auto w-[60%] h-[33rem] max-sm:w-[90%] max-sm:h-[16rem] drop-shadow-xl shadow-gray-500 "
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <button className="bg-red-500 text-white px-10 py-3 text-2xl rounded mt-15 xsm:mb-15">
          BECOME A DEALER
        </button>
      </section>
    </>
  );
};

export default Hero;

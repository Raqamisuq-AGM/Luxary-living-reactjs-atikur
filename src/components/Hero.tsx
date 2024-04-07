import 'aos/dist/aos.css';
import mobile from '../assets/Screenshot_1.png';

const Hero = () => {
  return (
    <section
      className="section-padding  gap-4 place-items-center relative py-24 md:py-0 p-10 pt-24 lg:mt-[17vh] body-bg h-[100%] "
      id="hero"
    >
      <img
        src={mobile}
        alt=""
        className="hidden lg:block absolute -right-24 top-10"
      />
      <div className="lg:grid place-items-center space-y-10 relative">
        <h1 className="text-2xl lg:text-7xl font-bold lg:-mt-49 mb-24 text-center">
          Industry-leading stolen <br /> vehicle tracking solutions
        </h1>
        <iframe
          src="https://www.youtube.com/embed/XooGJcxzA_c?si=hAWQm-ZFZ_SFWoq1"
          className="rounded-[0.9rem] mx-auto w-[70%] h-[33rem] max-sm:w-[100%] max-sm:h-[16rem] drop-shadow-xl shadow-gray-500 margin-this-video"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <button className="bg-red-500 text-white px-10 py-3 text-2xl rounded">
          BECOME A DEALER
        </button>
      </div>
    </section>
  );
};

export default Hero;

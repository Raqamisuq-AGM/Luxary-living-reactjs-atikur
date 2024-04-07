import React from 'react';

const Technology = () => {
  return (
    <div>
      <div className="p-10 py-32 space-y-10  protection">
        <h1 className="italic text-3xl lg:text-8xl font-bold relative lg:left-32 text-slate-500">
          TECHNOLOGY
        </h1>
        <p className="relative lg:left-54 font-medium">
          State-of-the-art wireless-link architecturep
        </p>
        <p className="relative lg:left-54 font-medium text-black lg:w-[50%]">
          Meta Trak is unique in developing multi-point, wirelessly connected
          tracking and immobilisation solutions. Eliminating hardwiring between
          components means we can deliver you the best levels of covert security
          possible, using the smallest, smartest devices.
        </p>

        <button className="bg-red-600 text-white px-4 py-3 rounded grid lg:place-items-center text-2xl lg:mx-auto my-5">
          Become a Dealer
        </button>
      </div>
      <div className="p-10 py-32 space-y-5 bg-slate-800">
        <h1 className="italic text-3xl lg:text-8xl font-bold relative lg:left-32 text-cyan-200">
          SUCCESS
        </h1>
        <p className="relative lg:left-54 font-medium text-white lg:w-[60%] text-2xl">
          "Car has now been found 20 minutes away. Thank you to @MetaTrakUK
          @metpoliceuk @EssexPoliceUK for your incredible work. Thank you to all
          the people who tweeted and showed support. X ."
        </p>
        <p className="relative lg:left-54 font-medium text-white">
          Mark Wright, Towie (@MarkWright_), London, S5 VTS
        </p>
      </div>
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
            <button className="text-2xl font-bold mt-3">Contact Us</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Technology;

import React from "react";
import BgContainer from "./BgContainer";

const Showcase = () => {
  return (
    <BgContainer>
      <section className="text-gray-600 body-font">
        <div className=" py-24 mx-auto  max-w-7xl p-6 lg:px-8">
          <div className="max-w-3xl text-center mx-auto pb-16">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              Your background removal solutions
            </h1>
            <p className="mt-3 text-lg text-muted-foreground">
              Our online background remover instantly detects the subject from
              any photo and gives you a smooth & clear cutout.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/4">
              <div className="h-full border- border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-96 md:h-36 w-full object-cover object-center"
                  src="https://www.slazzer.com/static/images/home-page/demo-human-01.jpg"
                  alt="blog"
                />
              </div>
            </div>
            <div className="p-4 md:w-1/4">
              <div className="h-full border- border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-96 md:h-36 w-full object-cover object-center"
                  src="https://www.slazzer.com/static/images/home-page/demo-human-02.jpg"
                  alt="blog"
                />
              </div>
            </div>
            <div className="p-4 md:w-1/4">
              <div className="h-full border- border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-96 md:h-36 w-full object-cover object-center"
                  src="https://www.slazzer.com/static/images/home-page/demo-human-03.jpg"
                  alt="blog"
                />
              </div>
            </div>
            <div className="p-4 md:w-1/4">
              <div className="h-full border- border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-96 md:h-36 w-full object-cover object-center"
                  src="https://www.slazzer.com/static/images/home-page/demo-human-04.jpg"
                  alt="blog"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </BgContainer>
  );
};

export default Showcase;

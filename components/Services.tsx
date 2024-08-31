import React from "react";
import BgContainer from "./BgContainer";
import { Brain, Brush, FlipHorizontal } from "lucide-react";

const Services = () => {
  return (
    <BgContainer>
      <section className="text-gray-600 body-font">
        <div className=" py-24 mx-auto  max-w-7xl p-6 lg:px-8">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-2 text-gray-900">
              What can I do with the BG remover?
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <Brush />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Make images with transparent backgrounds
                </h2>
                <p className="leading-relaxed text-base">
                  Remove backgrounds instantly and easily. Say goodbye to
                  clutter and hello to clean, crisp images.
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <FlipHorizontal />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Swap backgrounds and upgrade your photos
                </h2>
                <p className="leading-relaxed text-base">
                  Replace backgrounds instantly with a few clicks, choosing from
                  Freepik’s extensive library of stunning photos.
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <Brain />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Generate backgrounds with AI prompts
                </h2>
                <p className="leading-relaxed text-base">
                  Generate and use AI-generated backgrounds from your prompts.
                  It's easy, fast, and tailored just for you!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </BgContainer>
  );
};

export default Services;

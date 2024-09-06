import React from "react";
import BgContainer from "./BgContainer";
import Image from "next/image";

const Features = () => {
  return (
    <BgContainer>
      <section className="text-gray-600 body-font min-h-screen flex justify-center items-center">
        <div className="p-6 lg:px-8 mx-auto md:gap-16 lg:gap-24  max-w-7xl flex px-5 py-24 md:flex-row-reverse flex-col items-center">
          <div className="  lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              width={500}
              height={500}
              className="object-cover object-center rounded w-full h-full"
              alt="hero"
              src="https://imgs.search.brave.com/2mva0MkRPxNr-i5Vt8wT7JUm--aIPTQK9Obgt32Hcs0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jbGlw/cGluZ21hZ2ljLmNv/bS9jZi9jbS9pbWFn/ZXMvaGFpci1leGFt/cGxlX1YyXzIzYWRk/Mzc2NzQwMWVlNzY4/YWNiMDg3N2E2Mzdk/MTA2LmpwZw"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2   flex flex-col md:items-start md:text-left gap-6 lg:gap-8 items-center text-center">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4 text-gray-900">
              Time-saving editing solution
            </h1>
            <p className="mb-8 leading-relaxed text-lg">
              Speed up your editing processes and achieve professional results
              quickly compared to other manual methods that can be
              time-consuming. This Background remover tool simplifies workflows,
              saving time and effort while maintaining high-quality standards.
              Integrate it into your daily routine for efficient and effective
              image processing without sacrificing quality or precision.
            </p>
            {/* <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Button
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Button
              </button>
            </div> */}
          </div>
        </div>
      </section>
    </BgContainer>
  );
};

export default Features;

import React from "react";
import BgContainer from "./BgContainer";
import Image from "next/image";

const About = () => {
  return (
    <BgContainer>
      <section className="text-gray-600 body-font min-h-screen flex justify-center items-center">
        <div className="p-6 lg:px-8 mx-auto  max-w-7xl  flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              width={500}
              height={500}
              className="object-cover object-center rounded w-full h-full"
              alt="hero"
              src="https://imgs.search.brave.com/aZhlXwxLNGnOWTBXD0UDYJx2TVlfgWPDyJYhtfrBOqw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aW5waXhpby5jb20v/aW5waXhpby1scC1z/dGF0aWMvZGlzdC9p/bWFnZXMvaGFsZi1t/ZWRpYS93aGF0LXNl/dHMtYXBhcnQucG5n"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col gap-6 lg:gap-8 md:items-start md:text-left items-center text-center">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-gray-900">
              Remove backgrounds 100% automatically in 5 seconds with one click
            </h1>
            <p className="mb-8 leading-relaxed text-lg">
              Thanks to remove.bg is clever AI, you can slash editing time - and
              have more fun! No matter if you want to make a background
              transparent (PNG), add a white background to a photo, extract or
              isolate the subject, or get the cutout of a photo - you can do all
              this and more with remove.bg, the AI background remover for
              professionals.
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

export default About;

"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Sponsored from "./SponsoredBy";
import BgContainer from "./BgContainer";
import Image from "next/image";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      <div className="relative isolate px-6 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        {/*Sass Hero */}
        {/* <div className="mx-auto max-w-5xl pt-20 sm:pt-28 ">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Announcing our next round of funding.{" "}
              <a href="#" className="font-semibold text-indigo-600">
                <span aria-hidden="true" className="absolute inset-0" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Free Background remover: Erase the background from an image
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
              Automatically erase backgrounds and highlight the subject of your
              images in a few simple steps. Quick, easy and professional
              results!
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Upload an image
              </a>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <Sponsored />
        </div> */}
        {/* 2 Grid Hero */}
        {/* <BgContainer> */}
        <section className="text-gray-600 body-font min-h-screen flex flex-col justify-center items-center">
          <div className="p-6 lg:px-8 mx-auto  max-w-7xl  flex px-5 pb-24 md:flex-row-reverse flex-col items-center gap-10 lg:gap-8">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 flex flex-col gap-4">
              <div>
                <Image
                  width={200}
                  height={200}
                  className="object-cover object-center rounded"
                  alt="hero"
                  src="https://fps.cdnpk.net/images/ai/bgRemover/advatages/cars.webp?w=1036&h=1036"
                />
              </div>
              <div className="flex justify-between gap-4 w-full">
                <div>
                  <Image
                    width={200}
                    height={200}
                    className="object-cover object-center rounded"
                    alt="hero"
                    src="https://fps.cdnpk.net/images/ai/bgRemover/bkg-0.webp?w=192&h=146"
                  />
                </div>
                <div>
                  <Image
                    width={200}
                    height={200}
                    className="object-cover object-center rounded"
                    alt="hero"
                    src="https://fps.cdnpk.net/images/ai/bgRemover/bkg-1.webp?w=192&h=146"
                  />
                </div>
                <div>
                  <Image
                    width={200}
                    height={200}
                    className="object-cover object-center rounded"
                    alt="hero"
                    src="https://fps.cdnpk.net/images/ai/bgRemover/bkg-2.webp?w=192&h=146"
                  />
                </div>
                <div>
                  <Image
                    width={200}
                    height={200}
                    className="object-cover object-center rounded"
                    alt="hero"
                    src="https://fps.cdnpk.net/images/ai/bgRemover/bkg-3.webp?w=192&h=146"
                  />
                </div>
                <div>
                  <Image
                    width={200}
                    height={200}
                    className="object-cover object-center rounded"
                    alt="hero"
                    src="https://fps.cdnpk.net/images/ai/bgRemover/bkg-4.webp?w=192&h=146"
                  />
                </div>
              </div>
            </div>
            <div className="lg:flex-grow md:w-1/2 flex flex-col pr-8 gap-6 lg:gap-8 md:items-start md:text-left items-center text-center">
              <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-gray-900">
                Free Background remover: Erase the background from an image
              </h1>
              <p className="mb-8 leading-relaxed text-lg">
                Automatically erase backgrounds and highlight the subject of
                your images in a few simple steps. Quick, easy and professional
                results!
              </p>
              <div className="border-2 border-gray-500 rounded w-full p-4 outline-dashed outline-offset-8 text-center">
                Dropzone Upload Image
              </div>
            </div>
          </div>
        </section>
        {/* </BgContainer> */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </div>
  );
}

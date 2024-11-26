"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  // const [showSection, setShowSection] = useState(false);
  const sectionRef = useRef([]);
  const introBanner = useRef(null);
  const callbackFunction = (entries: any) => {
    const [entry] = entries;
    console.log(entry.target);
    const target = entry.target;
    if (entry.isIntersecting) {
      target.classList.remove("opacity-0");
      target.classList.add("section-slider");
    }
  };
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);

    sectionRef.current.forEach((el, index) => {
      if (el) {
        observer.observe(el);
      }
    });

    // const banner = introBanner.current;
    // banner.classList.remove('opacity-0');
    // banner.classList.add('section-slider');
  }, []);

  return (
    <div className="grid grid-rows-2 font-[family-name:var(--font-geist-sans)]">
      <main>
        <section className="min-h-screen bg-white px-5 lg:px-20">
          <div ref={introBanner} className="relative">
            <div className="w-[350px] h-[350px] md:h-[700px] md:w-[700px] lg:w-[800px] lg:h-[800px] absolute">
              <Image
                alt="buildin-blocks"
                className="absolute animate-slide-right top-[100px] opacity-0 z-0"
                fill
                src="/iiisometric_blue.svg"
                style={{ animationDelay: "0.1s" }}
              />
            </div>
            <div className="absolute top-20 right-0 w-[300px] h-[300px] lg:w-[600px] lg:h-[600px]">
              <Image
                alt="profile-photo"
                style={{ borderRadius: "100%" }}
                fill
                src="/profile.png"
                objectFit="cover"
                className="opacity-0 animate-slide-left"
              />
            </div>
            <div className="h-1/2 pt-10 sm:pt-20 md:pt-30 lg:pt-40 flex flex-col relative items-start">
              <h2
                className="text-black animate-slide-right opacity-0"
                style={{ animationDelay: "0.1s" }}
              >
                Hi!! My name is...
              </h2>

              <h1
                className="text-black animate-slide-right opacity-0 bg-white/40"
                style={{ animationDelay: "0.4s" }}
              >
                Gavin Sreesangkom
              </h1>
              <p
                className="pr-10 pl-5 text-lg py-5 w-full xl:w-1/2 text-black bg-white/90 rounded-r-full shadow-2xl animate-slide-right opacity-0"
                style={{ animationDelay: "0.7s" }}
              >
                I am a software developer currently based in Bangkok with over 3
                years of experience abroad in the USA. I’m constantly looking to
                improve my skill set and aiming to extract the potential of
                technology for the benefit of society!
              </p>
            </div>
          </div>
        </section>
        <div className="px-5 lg:px-20">
          <section
            ref={(el) => (sectionRef.current[0] = el)}
            className={`relative transition-all duration-1000 opacity-0 right-48`}
          >
            <h2>Welcome</h2>
            {/* <p>{showSection ? "in view" : "not in view"}</p> */}
            <p>Welcome to my site</p>
          </section>
          <section
            ref={(el) => (sectionRef.current[1] = el)}
            className={`relative transition-all duration-1000 opacity-0 right-48`}
          >
            <h2>About me</h2>
            {/* <p>{showSection ? "in view" : "not in view"}</p> */}
            <p>This is about me</p>
          </section>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}

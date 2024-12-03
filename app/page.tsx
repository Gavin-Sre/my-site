"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Timeline from "./experiences/timeline";

export default function Home() {
  const sectionRef = useRef([]);
  // const introBanner = useRef(null);
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
  }, []);

  return (
    <div className="grid grid-rows-2 font-[family-name:var(--font-geist-sans)]">
      <main>
        <section className="min-h-screen pt-20 relative">
          <div
            // ref={introBanner}
            className="relative grid-rows-2 justify-items-center xl:flex xl:justify-between px-5 lg:px-20"
          >
            <div className="h-1/2 flex flex-col relative items-start">
              <h2
                className="text-black animate-slide-right opacity-0"
                style={{ animationDelay: "0.1s" }}
              >
                Hi! I'm
              </h2>

              <h1
                className="text-black animate-slide-right opacity-0 rounded-full pr-6"
                style={{ animationDelay: "0.4s" }}
              >
                Gavin Sreesangkom
              </h1>
              <p
                className="animate-slide-right max-w-[500px] opacity-0"
                style={{ animationDelay: "0.7s" }}
              >
                I am a software developer currently based in Bangkok with over 3
                years of experience abroad in the USA.
              </p>
            </div>
            <div className="w-[400px] mt-10 h-[400px] lg:w-[500px] lg:h-[500px] animate-slide-left flex items-center justify-center">
              <Image
                alt="profile-photo"
                style={{ borderRadius: "100%" }}
                fill
                src="/profile.png"
                // objectFit="cover"
              />
            </div>
          </div>
          {/* <div className="border-l-4 ml-80 border-[#CCD5AE] h-[300px]"></div> */}
          <div className="ml-20 absolute top-1/2 rounded-lg bg-[#fefae0] bg-opacity-90 p-2">
            <span className="flex gap-1">
              <span
                className="animate-bounce"
                style={{ animationDelay: "0.2s" }}
              >
                S
              </span>
              <span
                className="animate-bounce"
                style={{ animationDelay: "0.4s" }}
              >
                C
              </span>
              <span
                className="animate-bounce"
                style={{ animationDelay: "0.6s" }}
              >
                R
              </span>
              <span
                className="animate-bounce"
                style={{ animationDelay: "0.8s" }}
              >
                O
              </span>
              <span className="animate-bounce" style={{ animationDelay: "1s" }}>
                L
              </span>
              <span
                className="animate-bounce"
                style={{ animationDelay: "1.2s" }}
              >
                L
              </span>
            </span>
            <Image
              src="/icon/chevron-down.svg"
              alt="arrow down"
              width={50}
              height={50}
            />
          </div>

          <div className="w-screen h-[250px] absolute bottom-0">
            <Image alt="intro-footer" fill src="/Wave.svg" />
          </div>
        </section>
        <div className="px-5 lg:px-20">
          <section
            ref={(el) => (sectionRef.current[1] = el)}
            className={`relative transition-all duration-1000 opacity-0`}
          >
            <h2>About me</h2>
            {/* <p>{showSection ? "in view" : "not in view"}</p> */}
            <p>This is about me</p>
          </section>
          <section
            // ref={(el) => (sectionRef.current[0] = el)}
            className={`relative transition-all duration-1000`}
          >
            <Timeline />
          </section>
          <section>
            <h2>Notable Projects</h2>
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

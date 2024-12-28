import { useRef, useEffect } from "react";
import Experience from "./experience";

export default function Timeline() {
  const experienceRef = useRef([]);

  const callbackFunction = (entries: any) => {
    const [entry] = entries;
    console.log(entry.target);
    const target = entry.target;
    if (entry.isIntersecting) {
      target.classList.remove("up-hidden-slider-offset");
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

    experienceRef.current.forEach((el, index) => {
      if (el) {
        observer.observe(el);
      }
    });
  }, []);
  return (
    <div>
      <h2>My Experiences</h2>
      <div
        className="transition-all duration-[1500ms] up-hidden-slider-offset"
        ref={(el) => (experienceRef.current[1] = el)}
      >
        <Experience
          title="The Discovery of Coding"
          subtitle="Student @ University of Washington"
          descr="My very first exposure to prgramming was during my freshman year of college. Soon I discovered the endless possibility that software development has to offer and fell in love with the fields in hopes that I could brought about digital changes/improvements back home to Thailand."
          // bulletPoints={["aes", "ad"]}
          dateStart="2017 September"
          // dateEnd="2023/11"
        />
      </div>

      <div
        className="transition-all duration-[1500ms] up-hidden-slider-offset"
        ref={(el) => (experienceRef.current[0] = el)}
      >
        <Experience
          title="Gathering Experiences"
          subtitle="Internships in BKK"
          descr="To apply what I learned at school in real-life, I sought out to find internships and various tech/bank company over the next 2 summers. With 2 notables companies where I tested the pathways of Data Science vs Software Engineer"
          bulletPoints={[
            "Pantip (Thai version of reddit) - Where I worked in a Data Science team to analyze and categorize the content and figure out how to increase engagement throug data",
            "BLS Securities - Worked on backward modelling for the Thai stock market. Propose to automate the official document collection process through my own created software using Python",
          ]}
          dateStart="2018"
          dateEnd="2019"
        />
      </div>
    </div>
  );
}

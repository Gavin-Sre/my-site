import { useRef, useEffect } from "react";
import Experience from "./experience";

export default function Timeline() {
  const experienceRef = useRef([]);

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
        className="transition-all duration-1000 opacity-0"
        ref={(el) => (experienceRef.current[1] = el)}
      >
        <Experience
          title="IXL Learning"
          subtitle="Software Developer"
          descr="This is my time at IXL Learning where i do dis and do dat."
          bulletPoints={["aes", "ad"]}
          dateStart="2021/10"
          dateEnd="2023/11"
        />
      </div>

      <div
        className="transition-all duration-1000 opacity-0"
        ref={(el) => (experienceRef.current[0] = el)}
      >
        <Experience
          title="IXL Learning"
          subtitle="Software Developer"
          descr="This is my time at IXL Learning where i do dis and do dat and a little bit of everything"
          dateStart="2021/10"
          dateEnd="2023/11"
        />
      </div>
    </div>
  );
}

import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { personalDetails } from "../Details";

function Home() {
  const { name, tagline, img } = personalDetails;
  const h11 = useRef();
  const h12 = useRef();
  const h13 = useRef();
  const myimageref = useRef();
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(
      h11.current,
      {
        x: "-100%",
        delay: 0.8,
        opacity: 0,
        duration: 2,
        ease: "Power3.easeOut",
      },
      "<"
    )
      .from(
        h12.current,
        {
          x: "-100%",
          delay: 0.5,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        h13.current,
        {
          x: "-100%",
          delay: 0.1,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        myimageref.current,
        {
          x: "200%",
          delay: 0.5,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      );
  }, []);

  return (
    <main className="container mx-auto max-width section md:flex justify-between items-center">
      <div>
        <h1
          ref={h11}
          className="m-0 text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-4xl xl:leading-tight font-bold"
        >
          Hi,👋<br></br>My Name is<br></br>
        </h1>
        <h1
          ref={h12}
          className="text-2xl bg-clip-text bg-gradient text-transparent md:text-4xl xl:text-5xl xl:leading-tight font-bold whitespace-nowrap"
        >
          {name}
        </h1>
        <h2
          ref={h13}
          className="mt-2 text-xl md:text-2xl xl:text-2xl font-semibold text-dark-heading dark:text-light-heading"
        >
          {tagline}
        </h2>
      </div>
      <div className="mt-2 md:mt-0 flex justify-center md:justify-end w-full">
        <img ref={myimageref} className="w-1/2 md:ml-auto rounded-full object-cover" src={img} alt="MbuviImage" />
      </div>
    </main>
  );
}

export default Home;

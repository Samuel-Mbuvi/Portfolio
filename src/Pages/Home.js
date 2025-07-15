import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { personalDetails } from "../Details";


function Home() {
  const { name, tagline, img, about } = personalDetails;

  const h11 = useRef();
  const h12 = useRef();
  const h13 = useRef();
  const myimageref = useRef();

  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(myimageref.current, {
      x: "-200%",
      opacity: 0,
      duration: 2,
      ease: "Power3.easeOut",
    })
      .from(
        h11.current,
        {
          x: "100%",
          opacity: 0,
          duration: 1.5,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        h12.current,
        {
          x: "100%",
          opacity: 0,
          duration: 1.5,
          ease: "Power3.easeOut",
        },
        "<0.2"
      )
      .from(
        h13.current,
        {
          x: "100%",
          opacity: 0,
          duration: 1.5,
          ease: "Power3.easeOut",
        },
        "<0.2"
      );
  }, []);

  return (
    <main className="container mx-auto max-width px-4 text-dark-heading dark:text-light-heading">
      {/* Hero Section */}
      <section className="section md:flex justify-between items-center">
        {/* Profile Image First */}
         <div className=" mb-6 w-full md:w-1/1 flex justify-center md:justify-start">
          <img
            ref={myimageref}
            className="w-1/2 mx-auto md:mr-auto rounded-full object-cover"
            src={img}
            alt="Profile"
          />
        </div>

        {/* Text Section */}
        <div>
          <h1 ref={h11} className="text-2xl md:text-4xl font-bold">
            Hi, 👋 My Name is
          </h1>
          <h1 ref={h12} className="mt-4 text-4xl text-gradient font-bold">
            {name}
          </h1>
          <h2
            ref={h13}
            className="text-xl md:text-xl font-semibold mt-2"
          >
            {tagline}
          </h2>
        </div>
      </section>

      {/* About Section */}
      <section className="section mt-0">
        <h2 className="text-2xl font-bold mb-2">About Me</h2>
        <p className="text-base mb-4 max-w-xl">
          {about.split(" ").slice(0, 36).join(" ")}...
          <Link to="/about" className="text-blue-600 underline hover:text-blue-800 ml-2">
            Read more
          </Link>
        </p>
      </section>

      {/* Projects Section */}
      <section className="section mt-0">
        <h2 className="text-2xl font-bold mb-4">Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Project Card 1 */}
          <div className="p-4 border rounded shadow bg-white dark:bg-dark-card">
            <h3 className="font-semibold mb-2">Portfolio Website</h3>
            <p>A responsive site showcasing my skills and projects.</p>
          </div>
          {/* Project Card 2 */}
          <div className="p-4 border rounded shadow bg-white dark:bg-dark-card">
            <h3 className="font-semibold mb-2">Charity Awoke Foundation Website</h3>
            <p>Built a media-rich site for a Charity organisation called Charity Awoke Foundation.</p>
          </div>
          {/* Project Card 3 */}
          <div className="p-4 border rounded shadow bg-white dark:bg-dark-card">
            <h3 className="font-semibold mb-2">Music Artist Website</h3>
            <p>Built a media-rich site for Mcubamba Robbah with embedded music & booking.</p>
          </div>
        </div>
        <Link to="/projects" className="inline-block mt-6 px-4 py-2 bg-[#10A3E8] text-white rounded hover:bg-[#0e94d4]">
          See More
        </Link>
      </section>

      {/* Contact Section */}
      <div className="mt-6 border-t border-gray-300 pt-4 text-center text-xs"></div>
      <section className="mt-0 section mb-10">
        <div className="text-center">
          <Link
            to="/contact"
            className="inline-block px-4 py-2 bg-[#10A3E8] text-white rounded hover:bg-[#0e94d4]"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Home;

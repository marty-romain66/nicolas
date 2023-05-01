import React, { useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Soin = () => {
  useEffect(() => {
    gsap.fromTo(
      "#reveal",
      {
        opacity: 0,
        x: "-100",
      },
      {
        x: "0",
        opacity: 1,
        stagger: 0.8,
        ease: gsap.power4,
        scrollTrigger: {
          trigger: "#startReveal",
          start: "top 50%",
        },
      }
    );
  }, []);

  return (
    <div className="h-screen flex flex-col  " id="startReveal">
      <div className=" md:h-1/4 h-12 flex justify-center items-center text-2xl md:text-6xl">
        <h2>Nos Préstations</h2>
      </div>
      <div className="h-full flex flex-col gap-12 md:flex-row md:items-center md:gap-0 md:justify-around">
        <div
          id="reveal"
          className="md:w-2/5 p-8 md:h-2/3 h-2/5 border-red-50 rounded-lg  flex items-center flex-col gap-2 shadow-2xl shadow-red-500/50 md:text-3xl md:text-center"
        >
          <div>
            <img
              src="https://www.medicalib.fr/_nuxt/img/illu-soins.f18ad04.png"
              alt=""
            />
          </div>
          <p>Soins conventionnés à Argeles-sur-mer</p>
          <p>
            Les soins infirmiers sont conventionnés et pris en charge par
            l'Assurance Maladie. Nos infirmiers libéraux acceptent le tiers
            payant, la CMU et l'AME.
          </p>
        </div>
        <div
          id="reveal"
          className="md:w-2/5 md:h-2/3  p-8 h-2/5 border-red-50 rounded-lg  flex items-center flex-col gap-2 shadow-2xl shadow-red-500/50 md:text-3xl md:text-center"
        >
          <div>
            <img
              src="https://www.medicalib.fr/_nuxt/img/illu-soins.f18ad04.png"
              alt=""
            />
          </div>
          <p>Soins conventionnés à Argeles-sur-mer</p>
          <p>
            Les soins infirmiers sont conventionnés et pris en charge par
            l'Assurance Maladie. Nos infirmiers libéraux acceptent le tiers
            payant, la CMU et l'AME.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Soin;

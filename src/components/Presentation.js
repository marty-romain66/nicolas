import { useEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { SplitText } from "gsap/dist/SplitText";
const Presentation = () => {
  const titleRef = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(SplitText);

    const title = titleRef.current;
    const splitTitle = new SplitText(title, { type: "words" });

    gsap.set(splitTitle.words, { opacity: 0, y: "100%" });
    gsap.to(splitTitle.words, {
      opacity: 1,
      y: "0%",
      duration: 0.7,
      ease: "expo.out",
      stagger: 0.03,
      delay: 0.5,
      ease: gsap.power3,
    });
  }, []);
  useEffect(() => {
    gsap.fromTo(
      "#scale",
      {
        scale: "0.3",
      },
      {
        delay : 0.2,
        scale: "1",
        duration: 1,
        ease: gsap.power4,
      }
    );
  }, []);
  return (
    <div className="h-90vh">
      <div className="">
        <div className="flex justify-center mt-12 mb-12">
          <h1 className=" font-bold text-4xl">
            Cabinet infirmiers <br /> Argeles-sur-mer
          </h1>
        </div>
        <div className=" md:flex md:justify-center md:items-center">
          <div className="mb-12 ">
            <img className=" " id="scale" src="./equipe.jpg" alt="" />
          </div>
          <div className="mr-4 ml-4 mb:flex ">
            <p className=" text-center text-xl" ref={titleRef}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro vel
              
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presentation;

import { Typewriter } from "react-simple-typewriter";
import { SectionTitle } from "../SectionTitle/SectionTitle";

export function Extra_1() {
  return (
    <div className="flex justify-center items-center flex-col bg-slate-50">
      <SectionTitle title="Workshops" />
      <p className="w-1/2 text-center animate__animated animate__pulse">
        Our workshops offer a unique opportunity to learn and master various
        arts and crafts techniques in a supportive and inspiring environment.
      </p>
      <div className="flex md:flex-row flex-col p-3">
        <div className="bg-white h-full shadow-2xl flex justify-center items-center text-center md:relative md:left-20 md:z-10">
          <p className="md:text-3xl text-3xl p-3 animate__animated animate__fadeInUp">
            Dive into immersive experiences where you'll learn through doing.
            Our workshops are designed to engage your senses
            <span className="text-orange-600"> and foster creativity</span>{" "}
          </p>
        </div>
        <div className="h-3/4 w-full md:h-full md:w-full md:relative md:right-10">
          <img
            className="md:h-full h-full w-full object-cover animate__animated animate__zoomIn"
            src="https://mymalibubeach.com/wp-content/uploads/2014/07/art_workshop_at_palm_spring_med.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

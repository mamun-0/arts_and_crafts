import { Typewriter } from "react-simple-typewriter";
import { SectionTitle } from "../SectionTitle/SectionTitle";

export function Extra_2() {
  return (
    <div className="flex justify-center items-center flex-col bg-slate-50 dark:bg-slate-700">
      <SectionTitle title="Inspiration" />
      <p className="w-1/2 text-center animate__animated animate__pulse">
        Find inspiration at every turn with our curated collection of articles,
        tutorials, and resources designed to ignite your creativity and spark
        your imagination.
      </p>
      <div className="flex md:flex-row flex-col p-3">
        <div className="bg-white h-full shadow-2xl flex justify-center items-center text-center md:relative md:left-20 md:z-10">
          <p className="md:text-3xl text-3xl p-3 animate__animated animate__fadeInUp dark:bg-slate-300 dark:text-black">
            Dive into immersive experiences where you'll learn through doing.
            Our workshops are designed to engage your senses
            <span className="text-orange-600"> and foster creativity</span>{" "}
          </p>
        </div>
        <div className="h-3/4 w-full md:h-full md:w-full md:relative md:right-10">
          <img
            className="md:h-full h-full w-full object-cover animate__animated animate__zoomIn"
            src="https://www.boredpanda.com/blog/wp-content/uploads/2016/06/painting-57647955457e2__880.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

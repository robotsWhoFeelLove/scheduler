import poster from "../..//assets/poster2.jpeg";
import { getTime, filterBands } from "../../utils/functions";
import PosterText from "./PosterText";
import NavBar from "../../utils/NavBar.jsx";
import OptionsPoster from "./OptionsPoster.jsx";

function Poster({ localBands }) {
  return (
    <>
      <NavBar Options={OptionsPoster} />
      <div className="h-[100vh]  flex justify-center p-2">
        <div id="poster" className="h-fit flex flex-col items-center justify-center border-4 bg-[#1cb6dc]">
          <div className="">
            <img className="z-10 h-[400px]" src={poster} />
          </div>
          <div className=" z-30 text-white flex font-anta w-full -mt-5 mb-5">
            <PosterText localBands={localBands} day="Friday" />
            <PosterText localBands={localBands} day="Saturday" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Poster;

import poster from "../..//assets/poster2.jpeg";
import { getTime, filterBands } from "../../utils/functions";
import PosterText from "./PosterText";

function Poster({ localBands }) {
  return (
    <div className="h-[100vh] bg-[#1cb6dc]">
      <div className="absolute z-30 text-white flex font-anta mt-[380px] w-screen">
        <PosterText localBands={localBands} day="Friday" />
        <PosterText localBands={localBands} day="Saturday" />
      </div>
      <div className="flex justify-center">
        <img className="z-10 h-[400px]" src={poster} />
      </div>
    </div>
  );
}

export default Poster;

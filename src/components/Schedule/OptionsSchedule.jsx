import GoBack from "../../utils/GoBack";
import PosterIcon from "../../utils/PosterIcon";
import ShareIcon from "../../utils/ShareIcon";
import { shareSchedule } from "../../utils/services";
import Spotlight from "../Tour/Spotlight";
import ShareModal from "./Poster/ShareModal";

function OptionsSchedule({ setter, tourIndex, handleTour }) {
  return (
    <>
      <ShareModal
        message={"Link copied to Clipboard!"}
        handler={shareSchedule}
        desktopHandler={() => navigator.clipboard.writeText(window.location)}
        shareText={"Share a link to your schedule."}
      />
      <div className="flex  justify-end gap-8 items-center m-2">
        <div className="cursor-pointer -mr-2.5 -mt-1">
          <GoBack />
        </div>
        {tourIndex == 3 && (
          <div className="cursor-pointer -mt-6 mr-8 z-50 pinhole w-[100px] h-[100px] rounded-full animate-fade-up animate-once animate-duration-[800ms] animate-ease-linear">
            <div onClick={() => handleTour()} className=" z-50  w-[130px] h-[130px] rounded-full "></div>
          </div>
        )}
        <PosterIcon setter={setter} />
        {tourIndex == 2 && (
          <div className="cursor-pointer -mt-6 -mr-7 z-50 pinhole w-[100px] h-[100px] rounded-full animate-fade-up animate-once animate-duration-[800ms] animate-ease-linear">
            <div onClick={() => handleTour()} className=" z-50  w-[130px] h-[130px] rounded-full "></div>
          </div>
        )}
        <ShareIcon />
      </div>
    </>
  );
}

export default OptionsSchedule;

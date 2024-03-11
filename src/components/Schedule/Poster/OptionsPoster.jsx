import download from "downloadjs";
import { sharePoster, createImage, downloadPoster, createBlob } from "../../../utils/services.js";
import share from "../../../assets/share.svg";
import IconSchedule from "./IconSchedule.jsx";
import GoBack from "../../../utils/GoBack.jsx";
import Heart from "../../../utils/Heart.jsx";
import Insta from "../../../utils/Insta.jsx";
import FaceBook from "../../../utils/FaceBook.jsx";
import Message from "../../../utils/Message.jsx";
import ShareModal from "./ShareModal.jsx";
import ShareIcon from "../../../utils/ShareIcon.jsx";

function OptionsPoster({ setter, tourIndex, handleTour }) {
  function handleDownload(callback) {
    createImage("poster", callback);
  }

  function handleShare() {
    createBlob("poster", sharePoster);
  }

  return (
    <>
      <div className="mr-2 flex items-center gap-6">
        {/* <div onClick={() => setter("schedule")} className=" md:flex btn btn-sm btn-outline text-white bg-[#00b3f0]">
        Schedule
      </div> */}
        {tourIndex == 5 && (
          <div className="-mt-6 -ml-9 z-50 pinhole w-[100px] h-[100px] rounded-full animate-fade-up animate-once animate-duration-[800ms] animate-ease-linear">
            <div onClick={() => handleTour()} className=" z-50  w-[130px] h-[130px] rounded-full "></div>
          </div>
        )}
        <div className="-mt-1 mr-1">
          <GoBack />
        </div>

        {tourIndex == 6 && (
          <div className="-mt-6 ml-8 z-50 pinhole w-[100px] h-[100px] rounded-full animate-fade-up animate-once animate-duration-[800ms] animate-ease-linear">
            <div onClick={() => handleTour()} className=" z-50  w-[130px] h-[130px] rounded-full "></div>
          </div>
        )}
        <div className=" w-10" onClick={() => setter("schedule")}>
          <IconSchedule />
        </div>
        {/* <div onClick={() => handleDownload(downloadPoster)} className="hidden md:flex btn btn-sm btn-outline text-white bg-[#00b3f0]">
          Share
        </div> */}
        {tourIndex == 4 && (
          <div className="-mt-6 ml-24 z-50 pinhole w-[100px] h-[100px] rounded-full animate-fade-up animate-once animate-duration-[800ms] animate-ease-linear">
            <div onClick={() => handleTour()} className=" z-50  w-[130px] h-[130px] rounded-full "></div>
          </div>
        )}
        <ShareIcon />
      </div>
      <ShareModal handler={handleShare} shareText={"Share or save your Poster Image"} />
    </>
  );
}

export default OptionsPoster;

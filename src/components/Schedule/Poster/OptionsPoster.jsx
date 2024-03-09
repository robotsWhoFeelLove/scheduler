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

function OptionsPoster({ setter }) {
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
        <div className="-mt-1 mr-1">
          <GoBack />
        </div>
        <div className=" w-10" onClick={() => setter("schedule")}>
          <IconSchedule />
        </div>
        {/* <div onClick={() => handleDownload(downloadPoster)} className="hidden md:flex btn btn-sm btn-outline text-white bg-[#00b3f0]">
          Share
        </div> */}

        <div onClick={() => document.getElementById("share-modal").showModal()} className="md:hidden  text-white mt-1 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 40" x="0px" y="0px" width="40px">
            <g data-name="Layer 10">
              <path
                fill="white"
                stroke="white"
                d="M20.89941,3.67749a.46691.46691,0,0,0-.77441.35132V7.5h-2.25a9.00005,9.00005,0,0,0-9,9v2.22559a.46687.46687,0,0,0,.896.18383A9.544,9.544,0,0,1,18.54321,13.125H20.125v4.59619a.46691.46691,0,0,0,.77441.35132l7.82422-6.84619a.467.467,0,0,0,0-.70264Z"
              />
              <path
                fill="white"
                stroke="white"
                d="M25,16.61035a.99943.99943,0,0,0-1,1V25a1.00067,1.00067,0,0,1-1,1H6a1.00067,1.00067,0,0,1-1-1V11a1.00067,1.00067,0,0,1,1-1H8.79a1,1,0,0,0,0-2H6a3.00328,3.00328,0,0,0-3,3V25a3.00328,3.00328,0,0,0,3,3H23a3.00328,3.00328,0,0,0,3-3V17.61035A.99943.99943,0,0,0,25,16.61035Z"
              />
            </g>
          </svg>
        </div>
      </div>
      <ShareModal handler={handleShare} shareText={"Share or save your Poster Image"} />
    </>
  );
}

export default OptionsPoster;

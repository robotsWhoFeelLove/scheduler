import download from "downloadjs";
import { sharePoster, createImage, downloadPoster } from "../../utils/services.js";

function OptionsPoster() {
  function handleDownload(callback) {
    createImage("poster", callback);
  }

  return (
    <div className="mr-2">
      <div onClick={() => handleDownload(downloadPoster)} className="hidden md:flex btn btn-sm btn-outline text-white bg-[#1cb6dc]">
        Share
      </div>
      <div onClick={() => handleDownload(sharePoster)} className="md:hidden btn btn-sm btn-outline text-white bg-[#1cb6dc]">
        Share
      </div>
    </div>
  );
}

export default OptionsPoster;

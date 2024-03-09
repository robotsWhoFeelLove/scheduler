import Heart from "../../../utils/Heart";
import FaceBook from "../../../utils/FaceBook";
import Message from "../../../utils/Message";
import { FacebookShareButton } from "react-share";
import Insta from "../../../utils/Insta";
import ShareButton from "../../../utils/ShareButton";
const url = window.location;
function ShareModal({ handler, shareText }) {
  return (
    <dialog id="share-modal" className="modal">
      <div className="modal-box w-11/12 max-w-5xl">
        <h3 className="font-bold text-lg font-start">IT'S DANGEROUS TO GO ALONE!</h3>
        <div className="h-14 flex gap-1">
          <Heart fillColor="red" />
          <Heart fillColor="red" />
          <Heart fillColor="red" />
          <Heart fillColor="#878787" />
        </div>
        <p className="py-4 font-start">SHARE WITH ONE OF THESE...</p>
        <div className="bg-slate-200  p-2">
          <div className="flex items-center justify-around">
            <Insta />
            <FaceBook />
            <Message />
          </div>
          <div className="text-xs text-[#333333] font-start text-center mt-2">{shareText}</div>
          <div className="mt-4" onClick={() => handler()}>
            <ShareButton fill={"#333333"} />
          </div>
        </div>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
}

export default ShareModal;

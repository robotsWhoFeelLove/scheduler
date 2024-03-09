import Heart from "../../../utils/Heart";
import FaceBook from "../../../utils/FaceBook";
import Message from "../../../utils/Message";
import { FacebookShareButton } from "react-share";
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
          <div className="flex items-center justify-between">
            <div className="text-xs text-[#333333] font-start">Share a link to you schedule on Facebook</div>
            <FacebookShareButton url={url} quote={"Check out my Festival Lineup"} hashtag="#hamtramckBlowout">
              <FaceBook />
            </FacebookShareButton>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-xs text-[#333333] font-start">{shareText}</div>
            <div onClick={() => handler()}>
              <Message />
            </div>
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

import GoBack from "../../utils/GoBack";
import { shareSchedule } from "../../utils/services";
import ShareModal from "./Poster/ShareModal";

function OptionsSchedule({ setter }) {
  return (
    <>
      <ShareModal handler={shareSchedule} shareText={"Share a link to your schedule."} />
      <div className="flex  justify-end gap-8 items-center m-2">
        <div className="-mr-2.5 -mt-1">
          <GoBack />
        </div>
        <div className="-mr-3 mt-2" onClick={() => setter("poster")}>
          <svg width="50px" height="50px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 80" x="0px" y="0px">
            <g data-name="27-proster">
              <path
                fill="white"
                d="M61.707,18.293l-16-16A1,1,0,0,0,44,3V5H42a1,1,0,0,0-1,1V8H39a1,1,0,0,0-.707,1.707L41.586,13H22.414l3.293-3.293A1,1,0,0,0,25,8H23V6a1,1,0,0,0-1-1H20V3a1,1,0,0,0-1.707-.707l-16,16A1,1,0,0,0,3,20H5v2a1,1,0,0,0,1,1H8v2a1,1,0,0,0,.617.924A.987.987,0,0,0,9,26a1,1,0,0,0,.707-.293L13,22.414V61a1,1,0,0,0,1,1,.949.949,0,0,0,.184-.018L46.1,56c2.68-.075,4.554-3.14,4.761-3.493A.989.989,0,0,0,51,52V22.414l3.293,3.293A1,1,0,0,0,55,26a.987.987,0,0,0,.383-.076A1,1,0,0,0,56,25V23h2a1,1,0,0,0,1-1V20h2a1,1,0,0,0,.707-1.707ZM10,22.586V22a1,1,0,0,0-1-1H7V19a1,1,0,0,0-1-1H5.414L18,5.414V6a1,1,0,0,0,1,1h2V9a1,1,0,0,0,1,1h.586l-3,3H14a1,1,0,0,0-1,1v5.586ZM17.586,15,15,17.586V15ZM29.441,57.087l12.18-3.914a11.128,11.128,0,0,0,1.3,1.388ZM49,51.713C48.488,52.484,47.23,54,46,54c-1.1,0-2.61-1.722-3.168-2.556a1,1,0,0,0-1.138-.4L15,59.628V20.414L20.414,15H43.586L49,20.414Zm0-34.127L46.414,15H49ZM58,18a1,1,0,0,0-1,1v2H55a1,1,0,0,0-1,1v.586l-3-3V14a1,1,0,0,0-1-1H44.414l-3-3H42a1,1,0,0,0,1-1V7h2a1,1,0,0,0,1-1V5.414L58.586,18Z"
              />
              <path fill="white" d="M40,22H24a1,1,0,0,0-1,1V41a1,1,0,0,0,1,1H40a1,1,0,0,0,1-1V23A1,1,0,0,0,40,22ZM39,40H25V24H39Z" />
              <rect fill="white" x="23" y="17" width="2" height="3" />
              <rect fill="white" x="27" y="17" width="2" height="3" />
              <rect fill="white" x="31" y="17" width="2" height="3" />
              <rect fill="white" x="35" y="17" width="2" height="3" />
              <rect fill="white" x="39" y="17" width="2" height="3" />
              <rect fill="white" x="23" y="44" width="18" height="2" />
              <rect fill="white" x="23" y="48" width="5" height="2" />
              <rect fill="white" x="30" y="48" width="11" height="2" />
              <rect fill="white" x="23" y="52" width="7" height="2" />
            </g>
          </svg>
        </div>
        <div className="mt-1 cursor-pointer" onClick={() => document.getElementById("share-modal").showModal()}>
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
    </>
  );
}

export default OptionsSchedule;

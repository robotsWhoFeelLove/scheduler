import { useState } from "react";
import Spotlight from "../Tour/Spotlight";

function DayTabs({ setter, active, tourIndex, handleTour }) {
  return (
    <>
      <div role="tablist" className="z-30 tabs tabs-boxed fixed bottom-14 right-4">
        {tourIndex == 1 && (
          <div className="-mb-8 z-50 pinhole w-[100px] h-[100px] rounded-full animate-fade-up animate-once animate-duration-[800ms] animate-ease-linear">
            <div onClick={() => handleTour()} className=" z-50  w-[130px] h-[130px] rounded-full "></div>
          </div>
        )}
        <a role="tab" className={"tab " + (active == "Friday" && "tab-info text-white bg-info")} onClick={() => setter("Friday")}>
          Friday
        </a>
        <a role="tab" className={"tab " + (active == "Saturday" && "tab-info text-white bg-info")} onClick={() => setter("Saturday")}>
          Saturday
        </a>
      </div>
    </>
  );
}

export default DayTabs;

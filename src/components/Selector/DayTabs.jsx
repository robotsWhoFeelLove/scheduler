import { useState } from "react";
import Spotlight from "../Tour/Spotlight";

function DayTabs({ setter, active, tourIndex, handleTour }) {
  return (
    <div role="tablist" className="z-30 tabs tabs-boxed fixed bottom-14 right-4">
      <a role="tab" className={"tab " + (active == "Friday" && "tab-info text-white bg-info")} onClick={() => setter("Friday")}>
        Friday
      </a>
      <a role="tab" className={"tab " + (active == "Saturday" && "tab-info text-white bg-info")} onClick={() => setter("Saturday")}>
        Saturday
      </a>
    </div>
  );
}

export default DayTabs;

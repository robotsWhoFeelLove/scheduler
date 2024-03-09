import { useState } from "react";

function DayTabs({ setter, active }) {
  return (
    <div role="tablist" className="z-50 tabs tabs-boxed fixed bottom-14 right-4">
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

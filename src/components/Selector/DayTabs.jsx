import { useState } from "react";

function DayTabs({ setter, active }) {
  return (
    <div role="tablist" className="tabs tabs-boxed ">
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

import { useState } from "react";

function DayTabs({ setter, active }) {
  return (
    <div role="tablist" className="tabs tabs-boxed">
      <a role="tab" className={"tab " + (active == "Friday" && "tab-active ")} onClick={() => setter("Friday")}>
        Friday
      </a>
      <a role="tab" className={"tab " + (active == "Saturday" && "tab-active ")} onClick={() => setter("Saturday")}>
        Saturday
      </a>
    </div>
  );
}

export default DayTabs;

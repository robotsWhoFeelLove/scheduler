import { bands } from "../../assets/bands";
import { useState } from "react";
import { filterTime } from "../../utils/functions";

function SlotContent({ day, time, setter }) {
  const [local, setLocal] = useState();

  return (
    <div>
      {filterTime(bands, time, day).map((band, i) => {
        return (
          <div
            className={"flex items-center btn  btn-outline m-2  " + (band == local && " btn-active")}
            key={band.name + i}
            onClick={() => {
              if (local == band) {
                setLocal(null);
                setter(day, time, null);
              } else {
                setLocal(band);
                setter(day, time, band);
              }
            }}
          >
            <div className="text-lg font-bold  ">{band.name} </div>
            <div>{"@" + band.venue}</div>
          </div>
        );
      })}
    </div>
  );
}

export default SlotContent;

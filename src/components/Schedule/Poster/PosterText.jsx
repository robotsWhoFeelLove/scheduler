import { filterBands, getTime } from "../../../utils/functions";

function PosterText({ localBands, day }) {
  return (
    <>
      <div className={"w-1/2 flex flex-col  px-2 " + (day == "Friday" && " items-end")}>
        <div className=" text-xl ">{day}</div>
        <>
          {filterBands(localBands, day).map((band) => {
            return (
              <div key={band.name}>
                <div className="flex gap-3">
                  <div className={"text-xs " + (day == "Saturday" && "order-last")}>{getTime(band.time)}</div>
                  <div className="text-xs">{band.name}</div>
                </div>
                <div className={"text-xs -mt-1 " + (day == "Friday" && " text-end")}>{"@" + band.venue}</div>
                <div></div>
              </div>
            );
          })}
        </>
      </div>
    </>
  );
}

export default PosterText;

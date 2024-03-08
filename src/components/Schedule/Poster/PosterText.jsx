import { filterBands, getTime } from "../../../utils/functions";

function PosterText({ localBands, day }) {
  return (
    <>
      <div className={"w-1/2 flex flex-col  px-2 " + (day == "Friday" && " items-end")}>
        <div className=" text-xl ">{day}</div>
        <>
          {filterBands(localBands, day).map((band) => {
            return (
              <div key={band.name} className={"flex flex-col " + (day == "Friday" && " items-end")}>
                <div className="text-xs ">{band.name}</div>

                <div className="flex gap-1 items-center">
                  <div className={"text-[6pt]  -mt-1 " + (day == "Friday" && " text-end")}>{"@" + band.venue}</div>
                  <div className={"text-[6pt]  -mt-1 " + (day == "Saturday" && "order-last")}>{getTime(band.time)}</div>
                </div>
              </div>
            );
          })}
        </>
      </div>
    </>
  );
}

export default PosterText;

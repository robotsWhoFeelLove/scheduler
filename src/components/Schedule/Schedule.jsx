import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { bands } from "../../assets/bands";
import BandCard from "./BandCard";
import DayTabs from "../Selector/DayTabs";
import Poster from "./Poster";
import { shareSchedule } from "../../utils/services";

function Schedule() {
  const routeParams = useParams();
  const [active, setActive] = useState("Friday");
  const [localBands, setLocalBands] = useState([]);
  const [category, setCategory] = useState("schedule");

  useEffect(() => {
    let tempIndexes = routeParams.sid.split("-");
    tempIndexes.shift();
    let tempBands = [];
    tempIndexes.map((el) => {
      bands.map((band) => {
        if (band.index == Number(el)) {
          tempBands = [...tempBands, band];
        }
      });
    });
    tempBands.sort((a, b) => a.time - b.time);
    setLocalBands(tempBands);
  }, []);

  return (
    <>
      {category == "schedule" && (
        <div>
          <DayTabs active={active} setter={setActive} />
          <div className="flex w-screen justify-end gap-2 items-center m-2 pr-5">
            <div className="btn btn-outline btn-sm right-0 " onClick={() => setCategory("poster")}>
              Get Poster
            </div>
            <div className="btn btn-outline btn-sm right-0 " onClick={() => shareSchedule(window.location.href)}>
              Share Schedule
            </div>
          </div>
          {bands.length > 0 && active == "Friday" && (
            <div className="w-full px-5">
              {localBands
                .filter((el) => el.day == "Friday")
                .map((band, j) => {
                  return (
                    <div key={"-" + band.name + j}>
                      <BandCard band={band} />
                    </div>
                  );
                })}
            </div>
          )}
          {bands.length > 0 && active == "Saturday" && (
            <div className="w-full p-5">
              {localBands
                .filter((el) => el.day == "Saturday")
                .map((band, j) => {
                  return (
                    <div key={"-" + band.name + j}>
                      <BandCard band={band} />
                    </div>
                  );
                })}
            </div>
          )}
        </div>
      )}
      {category == "poster" && localBands && <Poster localBands={localBands} />}
    </>
  );
}

export default Schedule;

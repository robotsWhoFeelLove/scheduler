import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { bands } from "../../assets/bands";
import BandCard from "./BandCard";
import DayTabs from "../Selector/DayTabs";
import Poster from "./Poster/Poster";
import { createImage, shareSchedule } from "../../utils/services";
import NavBar from "../NavBar/NavBar";
import OptionsPoster from "./Poster/OptionsPoster";
import OptionsSchedule from "./OptionsSchedule";
import Banner from "../../utils/Banner";
import TourModal from "../Tour/TourModal";
import Spotlight from "../Tour/Spotlight";
import Spotlights from "../../utils/Spotlights";
import download from "downloadjs";

function Schedule() {
  const routeParams = useParams();
  const [active, setActive] = useState("Friday");
  const [localBands, setLocalBands] = useState([]);
  const [category, setCategory] = useState("schedule");
  const [tourIndex, setTourIndex] = useState(0);

  useEffect(() => {
    // loadBands();
    setTimeout(() => document.getElementById("tour-modal").showModal(), 10);
  }, []);

  function loadBands() {
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
  }

  function handleTour() {
    if (tourIndex == 3) setCategory("poster");
    if (tourIndex == 6) {
      setCategory("schedule");
      loadBands();
      setTourIndex(0);
      return;
    }
    setTourIndex((x) => {
      console.log({ x });
      return x + 1;
    });
  }

  return (
    <>
      <Spotlights tourIndex={tourIndex} handleTour={handleTour} />
      <TourModal setter={handleTour} loadBands={loadBands} />
      <Banner />
      <NavBar Options={category == "schedule" ? OptionsSchedule : OptionsPoster} setter={setCategory} tourIndex={tourIndex} handleTour={handleTour} />
      {tourIndex == 1 && (
        <div
          onClick={handleTour}
          className="cursor-pointer hidden md:flex justify-center items-center pinhole top-[30%] left-[35%] w-[300px] h-[300px] rounded-full"
        >
          <div>Click to continue</div>
        </div>
      )}
      {category == "schedule" && (
        <>
          <div>
            <div className="md:hidden">
              <DayTabs active={active} setter={setActive} tourIndex={tourIndex} handleTour={handleTour} />
            </div>

            <div className="md:hidden">
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
            <div className="hidden md:flex">
              <div className="w-1/2 px-5">
                <h2 className="font-anta text-3xl m-2">Friday</h2>
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

              <div className="w-1/2 p-5">
                <h2 className="font-anta text-3xl m-2">Saturday</h2>
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
            </div>
          </div>
        </>
      )}
      {category == "poster" && localBands && <Poster localBands={localBands} />}
      <div className="text-slate-500 mt-20 text-xs ml-10">{"© Ian Lee Lamb " + new Date().getFullYear()}</div>
    </>
  );
}

export default Schedule;

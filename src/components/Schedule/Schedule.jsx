import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { bands } from "../../assets/bands";
import BandCard from "./BandCard";
import DayTabs from "../Selector/DayTabs";
import Poster from "./Poster/Poster";
import { shareSchedule } from "../../utils/services";
import NavBar from "../NavBar/NavBar";
import OptionsPoster from "./Poster/OptionsPoster";
import OptionsSchedule from "./OptionsSchedule";
import Banner from "../../utils/Banner";
import TourModal from "../Tour/TourModal";
import Spotlight from "../Tour/Spotlight";

function Schedule() {
  const routeParams = useParams();
  const [active, setActive] = useState("Friday");
  const [localBands, setLocalBands] = useState([]);
  const [category, setCategory] = useState("schedule");
  const [tourIndex, setTourIndex] = useState(0);

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
    setTimeout(() => document.getElementById("tour-modal").showModal(), 10);
  }, []);

  function handleTour() {
    if (tourIndex == 3) setCategory("poster");
    setTourIndex((x) => {
      console.log({ x });
      return x + 1;
    });
  }

  return (
    <>
      {tourIndex == 1 && (
        <Spotlight
          text="Switch days by tapping the tabs"
          pinholeClasses={" bottom-0 right-0"}
          textClasses={" bottom-28 right-28"}
          setter={handleTour}
        />
      )}
      {tourIndex == 2 && (
        <Spotlight
          text="Share a link to your schedule with others"
          pinholeClasses={" -bottom-14 -right-2"}
          textClasses={" bottom-28 right-28"}
          setter={handleTour}
        />
      )}
      {tourIndex == 3 && (
        <Spotlight text="Or check out your poster." pinholeClasses={" -bottom-14 right-12"} textClasses={" bottom-28 right-28"} setter={handleTour} />
      )}
      {tourIndex == 4 && (
        <Spotlight
          text="You can also share an image of your poster."
          pinholeClasses={" -bottom-14 -right-2"}
          textClasses={" bottom-28 right-28"}
          setter={handleTour}
        />
      )}
      {tourIndex == 5 && (
        <Spotlight
          text="Or go back and recreate your schedule from scratch."
          pinholeClasses={" -bottom-14 right-28"}
          textClasses={" bottom-28 right-28"}
          setter={handleTour}
        />
      )}

      <TourModal setter={handleTour} />
      <Banner />
      <NavBar Options={category == "schedule" ? OptionsSchedule : OptionsPoster} setter={setCategory} tourIndex={tourIndex} handleTour={handleTour} />
      {category == "schedule" && (
        <>
          <div>
            <DayTabs active={active} setter={setActive} tourIndex={tourIndex} handleTour={handleTour} />

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
        </>
      )}
      {category == "poster" && localBands && <Poster localBands={localBands} />}
    </>
  );
}

export default Schedule;

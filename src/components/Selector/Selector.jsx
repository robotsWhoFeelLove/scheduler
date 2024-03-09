import Accordion from "./Accordion";
import { useState } from "react";
import { bands } from "../../assets/bands";
import DayTabs from "./DayTabs";
import TimeSlot from "./TimeSlots";
import { schedule } from "../../assets/schedule";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../../utils/useStorage";
import ModalPrevious from "./ModalPrevious";
import Schedule from "../Schedule/Schedule";
import NavBar from "../NavBar/NavBar";
import OptionsSelector from "./OptionsSelector";
import { cloneThing } from "../../utils/functions";
import Banner from "../../utils/Banner";

const TIMESLOTS = [8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5];

let localSchedule = cloneThing(schedule);

function Selector() {
  const [active, setActive] = useState("Friday");
  const [scheduler, setScheduler] = useState(localSchedule);
  const navigate = useNavigate();

  function handleSchedule(day, slot, val) {
    let newSchedule = { ...scheduler };
    newSchedule[day]["s" + slot] = val;
    setScheduler(newSchedule);
  }

  function isEmpty() {
    return Object.values(scheduler.Friday).filter((el) => el != null) + Object.values(scheduler.Saturday).filter((el) => el != null) == 0;
  }

  function goToSchedule() {
    if (isEmpty()) return;
    let mySlots = [];
    Object.values(scheduler).map((day) => {
      Object.values(day).map((slot) => {
        if (slot != null) mySlots = mySlots + "-" + slot.index;
      });
    });
    navigate("/schedule/" + mySlots);
  }

  return (
    <>
      <Banner />
      <NavBar setter={goToSchedule} Options={OptionsSelector} scheduler={scheduler} />
      <div className="p-5 ">
        <DayTabs active={active} setter={setActive} />
        <div className="mb-20">
          {TIMESLOTS.map((el, i) => {
            return (
              <div className="pointer-none" key={"time" + el + i}>
                <TimeSlot time={el} day={active} scheduler={handleSchedule} />
              </div>
            );
          })}
        </div>
        {/* <ModalPrevious prev={prev} remove={removePrev} setter={setScheduler} /> */}
      </div>
    </>
  );
}

export default Selector;

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
import NavBar from "../../utils/NavBar";
import OptionsSelector from "./OptionsSelector";
import { cloneThing } from "../../utils/functions";

const TIMESLOTS = [8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5];

let localSchedule = cloneThing(schedule);

function Selector() {
  const [active, setActive] = useState("Friday");
  const [scheduler, setScheduler] = useState(localSchedule);
  // const [prev, setPrev, removePrev] = useLocalStorage("data", "");
  const navigate = useNavigate();

  // function deleteExistingSchedule() {
  //   setScheduler("");
  // }

  function handleSchedule(day, slot, val) {
    let newSchedule = { ...scheduler };
    newSchedule[day]["s" + slot] = val;
    console.log({ newSchedule });
    setScheduler(newSchedule);
    // setPrev(newSchedule);
  }

  function isEmpty() {
    return Object.values(schedule.Friday).filter((el) => el != null) + Object.values(schedule.Saturday).filter((el) => el != null) == 0;
  }

  function goToSchedule() {
    const test = isEmpty();
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
      <NavBar setter={setScheduler} />
      <div className="p-5 ">
        <div
          className={
            "w-full btn btn-outline my-2 " +
            (Object.values(schedule.Friday).filter((el) => el != null) + Object.values(schedule.Saturday).filter((el) => el != null) == 0 &&
              "bg-slate-300")
          }
          onClick={goToSchedule}
        >
          Go to Schedule
        </div>
        <DayTabs active={active} setter={setActive} />
        <div>
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

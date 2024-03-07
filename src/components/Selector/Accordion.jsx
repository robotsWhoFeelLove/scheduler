import { bands } from "../../assets/bands";
import TimeSlot from "./TimeSlots";

const TIMESLOTS = [8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5];

function Accordion() {
  return (
    <div className="p-5">
      <div className="join join-vertical w-full">
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" defaultChecked />
          <div className="collapse-title text-xl font-medium">Friday</div>
          <div className="collapse-content">
            <div>
              {TIMESLOTS.map((el, i) => {
                return (
                  <div className="pointer-none" key={"time" + el + i}>
                    <TimeSlot time={el} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="join join-vertical w-full">
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" defaultChecked />
          <div className="collapse-title text-xl font-medium">Saturday</div>
          <div className="collapse-content">
            <div>test</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accordion;

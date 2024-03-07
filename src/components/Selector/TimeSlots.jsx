import SlotContent from "./SlotContent";

function TimeSlot({ time, day, scheduler }) {
  const hr = Math.floor(time);
  const m = (time % hr) * 60;

  return (
    <div className="join join-vertical w-full">
      <div className="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="my-accordion-4" defaultChecked />
        <div className="collapse-title text-xl font-medium">{hr + ":" + m + " PM"}</div>
        <div className="collapse-content">
          <div>
            <SlotContent day={day} time={time} setter={scheduler} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimeSlot;

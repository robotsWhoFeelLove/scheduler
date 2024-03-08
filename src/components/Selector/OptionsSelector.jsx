import { schedule } from "../../assets/schedule";
import { cloneThing } from "../../utils/functions";

let localSchedule = cloneThing(schedule);

function OptionsSelector({ setter }) {
  return (
    <div className="btn btn-sm btn-outline text-white bg-[#00b3f0] mr-2" onClick={() => setter(localSchedule)}>
      Start Over
    </div>
  );
}

export default OptionsSelector;

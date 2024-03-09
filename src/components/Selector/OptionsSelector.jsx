import { schedule } from "../../assets/schedule";
import { cloneThing } from "../../utils/functions";

let localSchedule = cloneThing(schedule);

function OptionsSelector({ setter, scheduler }) {
  function selectionTest() {
    const test =
      Object.values(scheduler.Friday).filter((el) => el != null).length + Object.values(scheduler.Saturday).filter((el) => el != null).length > 0;
    console.log({ test });
  }

  return (
    // <div className="btn btn-sm btn-outline text-white bg-[#00b3f0] mr-2" onClick={() => setter(localSchedule)}>
    //   Start Over
    // </div>
    <div>
      {Object.values(scheduler.Friday).filter((el) => el != null).length + Object.values(scheduler.Saturday).filter((el) => el != null).length >
        0 && (
        <div className="mr-2 my-2 text-white p-1 rounded font-bold text-sm border w-20  font-anta bg-info" onClick={() => setter()}>
          GET LINEUP
        </div>
      )}
    </div>
  );
}
export default OptionsSelector;

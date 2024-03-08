import { useEffect } from "react";
import Schedule from "../Schedule/Schedule";

function ModalPrevious({ prev, setter, remove }) {
  useEffect(() => {
    if (prev) document.getElementById("my_modal").showModal();
  }, []);
  return (
    <>
      <dialog id="my_modal" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">It looks like you already started a schedule.</h3>
          <p className="py-4">Would you like to keep it or start over?</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Keep</button>
              <button className="btn">Delete</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default ModalPrevious;

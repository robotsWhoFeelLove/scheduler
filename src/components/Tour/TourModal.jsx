function TourModal({ setter, loadBands }) {
  return (
    <div>
      <dialog id="tour-modal" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Would you like to take a tour?</p>
          <div className="modal-action">
            <form className="flex gap-5" method="dialog">
              {/* if there is a button, it will close the modal */}
              <button className="btn" onClick={() => setter()}>
                Yes
              </button>
              <button onClick={() => loadBands()} className="btn">
                No
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default TourModal;

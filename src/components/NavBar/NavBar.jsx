import Logo from "./Logo";

function NavBar({ Options, setter, scheduler, tourIndex, handleTour }) {
  return (
    <>
      <nav id="nav" className="z-30 h-14 w-screen bg-[#878787] flex justify-between items-center fixed bottom-0">
        <div className="h-14 ">
          <Logo fillColor="#ffffff" height="100px" width="100px" />
        </div>
        <div className="mr-6">{Options && <Options setter={setter} scheduler={scheduler} tourIndex={tourIndex} handleTour={handleTour} />}</div>
      </nav>
    </>
  );
}

export default NavBar;

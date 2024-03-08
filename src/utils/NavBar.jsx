import logo from "/blowout.png";

function NavBar({ Options, setter }) {
  return (
    <>
      <nav id="nav" className="h-14 w-screen bg-slate-300 flex justify-between items-center">
        <img src={logo} className="h-14 p-1 " alt="" />
        {Options && <Options setter={setter} />}
      </nav>
    </>
  );
}

export default NavBar;

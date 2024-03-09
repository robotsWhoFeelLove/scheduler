function Spotlight({ setter, text, pinholeClasses, textClasses }) {
  return (
    <>
      <div onClick={() => setter()} className="z-50  ">
        <div
          className={"fixed w-56  text-white z-50 text-3xl animate-fade-up animate-once animate-duration-[800ms] animate-ease-linear " + textClasses}
        >
          {text}
        </div>
      </div>
      <div className="">
        <div
          className={
            "fixed pinhole  z-40 w-[130px] h-[130px] rounded-full animate-fade-up animate-once animate-duration-[800ms] animate-ease-linear " +
            pinholeClasses
          }
        >
          <div onClick={() => setter()} className="rounded-full text-center  text-[#333333] text-lg w-36 h-36"></div>
        </div>
      </div>
    </>
  );
}

export default Spotlight;

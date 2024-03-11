import Spotlight from "../components/Tour/Spotlight";

function Spotlights({ tourIndex, handleTour }) {
  return (
    <>
      {tourIndex == 1 && (
        <Spotlight
          text="Switch days by tapping the tabs"
          pinholeClasses={" bottom-0 right-0"}
          textClasses={" bottom-28 right-28"}
          setter={handleTour}
        />
      )}
      {tourIndex == 2 && (
        <Spotlight
          text="Share a link to your schedule with others"
          pinholeClasses={" -bottom-14 -right-2"}
          textClasses={" bottom-28 right-28"}
          setter={handleTour}
        />
      )}
      {tourIndex == 3 && (
        <Spotlight text="Or check out your poster." pinholeClasses={" -bottom-14 right-12"} textClasses={" bottom-28 right-28"} setter={handleTour} />
      )}
      {tourIndex == 4 && (
        <Spotlight
          text="You can also share an image of your poster."
          pinholeClasses={" -bottom-14 -right-2"}
          textClasses={" bottom-28 right-28"}
          setter={handleTour}
        />
      )}
      {tourIndex == 5 && (
        <Spotlight
          text="Or go back and recreate your schedule from scratch."
          pinholeClasses={" -bottom-14 right-28"}
          textClasses={" bottom-28 right-28"}
          setter={handleTour}
        />
      )}
      {tourIndex == 6 && (
        <Spotlight
          text="Thanks for using the lineup app. Have a rockin' day."
          pinholeClasses={" -bottom-14 right-28"}
          textClasses={" bottom-28 right-28"}
          setter={handleTour}
        />
      )}
    </>
  );
}

export default Spotlights;

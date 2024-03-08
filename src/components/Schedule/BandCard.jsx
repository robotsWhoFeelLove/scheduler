import { venues } from "../../assets/venues";
import { getTime } from "../../utils/functions";

function BandCard({ band }) {
  return (
    <div>
      <div className="rounded-lg p-3 px-5 w-full glass my-2">
        <div className="">
          <div className="flex items-center justify-between">
            <h2 className="card-title">{band.name}</h2>
            <div>{getTime(band.time)}</div>
          </div>
          <div className="flex items-center mt-1">
            <div>{"@" + band.venue}</div>
            <a
              onClick={() => {
                window.open(venues.filter((venue) => venue.name == band.venue)[0].map);
              }}
              className="btn w-fit btn-sm text-xs ml-2"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BandCard;

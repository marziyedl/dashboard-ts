import { useGetList } from "hooks";
import { useParams } from "react-router-dom";
import { GET_SENSOR_LOGS } from "utils/APIUrls";
import "./EventTimeLine.scss";
import PerfectScrollbar from "react-perfect-scrollbar";
import moment from "moment";
import { TimestampToDate } from "utils/helpers";
type resultType = {
  time: string;
  description: string;
};

function EventTimeline() {
  const { id = "" } = useParams();

  const { items = [], loading }: { items: resultType[]; loading: boolean } =
    useGetList(GET_SENSOR_LOGS(id));
  return (
    <PerfectScrollbar>
      <div className="events">
        {items.map((item) => {
          return (
            <div className="event" key={item.time}>
              <div className="knob"></div>
              <span className="date text-truncate row">
                <span className="col-10 text-truncate">{item.description}</span>
                <span className="col-2">
                  {moment(TimestampToDate(item.time)).format("dd")}
                </span>
              </span>
            </div>
          );
        })}
        <div className="line"></div>
      </div>
    </PerfectScrollbar>
  );
}

export default EventTimeline;

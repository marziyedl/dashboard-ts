import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment } from "react";
import { Card } from "reactstrap";
import { faUser, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { useGetList } from "hooks";
import { GET_SENSOR_EVENTS } from "../../utils/APIUrls";
import { useParams } from "react-router-dom";
import PerfectScrollbar from 'react-perfect-scrollbar';
import { TimestampToDate } from '../../utils/helpers';
import moment from "moment";

type resultType = {
  event_name: string;
  description: string;
  time: string;
};
function ActivityCard() {
  const { id = "" } = useParams();
  const { items = [], loading }: { items: resultType[]; loading: boolean } =
    useGetList(GET_SENSOR_EVENTS(id));
  return (
    <PerfectScrollbar>
      <section>
        {items.map((item: resultType) => {
          return (
            <Fragment key={item.time}>
              <div className="d-flex w-100 my-2">
                <FontAwesomeIcon
                  size="3x"
                  className="mx-2"
                  icon={faUserCircle}
                />
                <div className="d-flex flex-column justify-content-center">
                  <span>{item.event_name}</span>
                  <span>
                    {moment(TimestampToDate(item.time)).format("dddd")}
                  </span>
                </div>
              </div>
              <p className="text-muted">{item.description}</p>
            </Fragment>
          );
        })}
      </section>
    </PerfectScrollbar>
  );
}

export default ActivityCard;

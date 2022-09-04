import {  Line } from "@ant-design/charts";
import { useGetList } from "hooks";
import moment from "moment";
import { useParams } from "react-router-dom";
import { GET_SENSOR_WEEKLY } from "utils/APIUrls";
import { TimestampToDate } from "utils/helpers";

type itemType = {
  time: string;
  temp: number;
};
function WeeklyLineChart() {
  const { id = "" } = useParams();

  const { items, loading }: { items: itemType[]; loading: boolean } =
    useGetList(GET_SENSOR_WEEKLY(id));
  const config = {
    data: items.map((item) => {
      return {
        temp: item.temp,
        time: moment(TimestampToDate(item.time)).format("dd"),
      };
    }),
    xField: "time",
    yField: "temp",
    smooth: true,
  };
  return !loading ? <Line {...config} /> : <></>;
}

export default WeeklyLineChart;

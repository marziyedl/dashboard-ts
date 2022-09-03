import { Line } from "@ant-design/plots";
import { useGetList } from "hooks";
import { useEffect, useState } from "react";
import { GET_SENSOR_STATES } from "utils/APIUrls";

type ChartData = {
  name: string;
  temp: number;
  time: number;
};
function LineChart() {
  const { items, loading } = useGetList(GET_SENSOR_STATES);
  const [chartData, setChartData] = useState<ChartData[]>([]);

  useEffect(() => {
    let index = 0;
    let newArray: ChartData[] = [];

    const convertArray = (array: any) => {
      if (array[index].stats) {
        const device = array[index].stats.map((item: any, i: number) => {
          return { name: array[index].device_id, temp: item.temp, time: i };
        });

        newArray = [...newArray, ...device];
      }
      index += 1;
      if (index === array.length) return newArray;
      convertArray(array);
    };

    if (!items.length) return;
    // convert API response to data for chart
    convertArray(items);

    setChartData(newArray);
  }, [items]);

  const config = {
    data: chartData,
    xField: "time",
    yField: "temp",
    seriesField: "name",

    smooth: true,
    animation: {
      appear: {
        animation: "path-in",
        duration: 5000,
      },
    },
  };
  return <>{!loading && chartData.length ? <Line {...config} /> : ""}</>;
}

export default LineChart;

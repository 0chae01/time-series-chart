import { chartDataType, responseDataType } from "@/types/data";
import { changeTimeFormat } from "./changeTimeFormat";

const getChartData = (responseData: responseDataType) => {
  const chartData: chartDataType[] = Object.entries(responseData).map(
    ([time, item]) => ({
      time: changeTimeFormat(new Date(time)),

      ...item,
    })
  );
  return chartData;
};

export default getChartData;

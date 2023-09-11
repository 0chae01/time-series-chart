import { chartDataType, responseDataType } from "@/types/data";

const getChartData = (responseData: responseDataType) => {
  const chartData: chartDataType[] = Object.entries(responseData).map(
    ([time, item]) => ({
      date: time.slice(0, 10),
      time: time.slice(11),

      ...item,
    })
  );
  return chartData;
};

export default getChartData;

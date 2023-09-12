import { useState } from "react";
import { chartDataType } from "@/types/data";
import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Area,
  Cell,
  ResponsiveContainer,
  Tooltip,
  AreaProps,
} from "recharts";
import CustomDot from "./CustomDot";
import CustomToolTip from "./CustomToolTip";
import {
  CategoricalChartFunc,
  CategoricalChartState,
} from "recharts/types/chart/generateCategoricalChart";

interface ChartProps {
  data: chartDataType[];
  curQueryData: string[];
  toggleFilter: (id: string) => void;
}

const Chart = ({ data, curQueryData, toggleFilter }: ChartProps) => {
  const [hiddenValue, setHiddenValue] = useState("");

  const onClick = (e: CategoricalChartState) => {
    if (e && e.activePayload) {
      const payload = e.activePayload[0].payload;

      if (payload.id) {
        toggleFilter(payload.id);
      }
    }
  };

  const toggleValueType = (e: AreaProps) => {
    const selectedValue = e.dataKey as string;
    if (hiddenValue === "") {
      return setHiddenValue(selectedValue as string);
    }
    if (hiddenValue === selectedValue) {
      return setHiddenValue("");
    }
    setHiddenValue(selectedValue);
  };

  if (!data) return null;
  return (
    <ResponsiveContainer width={"100%"} height={600}>
      <ComposedChart
        data={data}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 10,
        }}
        onClick={onClick as CategoricalChartFunc}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis
          dataKey="time"
          width={30}
          height={70}
          tickMargin={5}
          tickSize={15}
        />
        <YAxis
          yAxisId="left"
          label={{
            value: "value_area",
            angle: -90,
            position: "insideLeft",
            offset: 1,
          }}
          domain={[0, 200]}
        />
        <YAxis
          yAxisId="right"
          orientation="right"
          label={{
            value: "value_bar",
            angle: -90,
            position: "insideRight",
            offset: -10,
          }}
          domain={[0, 20000]}
        />
        <Tooltip content={<CustomToolTip />} />
        <Bar
          dataKey="value_bar"
          barSize={20}
          fill="#ffb700"
          yAxisId="right"
          hide={hiddenValue === "value_bar"}
        >
          {data.map((entry, index) => (
            <Cell
              fill={curQueryData.includes(entry.id) ? "#ff6200" : "#ffb700"}
              key={`cell-${index}`}
            />
          ))}
        </Bar>
        <Area
          type="monotone"
          dataKey="value_area"
          fill="#b3c5ff"
          stroke="#277fe4"
          yAxisId="left"
          legendType="circle"
          dot={<CustomDot />}
          activeDot={{ fill: "red" }}
          hide={hiddenValue === "value_area"}
        />
        <Legend
          height={50}
          margin={{ top: 100 }}
          onClick={(data) => toggleValueType(data)}
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default Chart;

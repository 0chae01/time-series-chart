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
  Brush,
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
  const [startIndex, setStartIndex] = useState(0);

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
    <>
      <p className="graph-guide">그래프 타입을 선택하세요 ▼</p>
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
            angle={-20}
            label={{
              value: "TIME: 2023-02-01",
              position: "insideBottomLeft",
              offset: 10,
            }}
          />
          <YAxis
            yAxisId="left"
            label={{
              value: "value_area",
              angle: -90,
              position: "insideLeft",
              offset: 1,
              fill: hiddenValue === "value_area" ? "#fff" : "#277fe4",
            }}
            domain={[0, 200]}
            opacity={hiddenValue === "value_area" ? 0 : 1}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            label={{
              value: "value_bar",
              angle: 90,
              position: "insideRight",
              offset: -10,
              fill: hiddenValue === "value_bar" ? "#fff" : "#ffc53d",
            }}
            domain={[0, 20000]}
            opacity={hiddenValue === "value_bar" ? 0 : 1}
          />
          <Tooltip content={<CustomToolTip />} animationDuration={200} />
          <Bar
            dataKey="value_bar"
            barSize={20}
            fill="#ffc53dd9"
            yAxisId="right"
            hide={hiddenValue === "value_bar"}
          >
            {data.slice(startIndex).map((entry, index) => (
              <Cell
                fill={
                  curQueryData.includes(entry.id) ? "#ff6200d9" : "#ffc53dd9"
                }
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
            animationDuration={300}
          />
          <Legend
            height={50}
            onClick={(data) => toggleValueType(data)}
            align="right"
            verticalAlign="top"
          />
          <Brush
            dataKey="time"
            height={30}
            stroke="gray"
            travellerWidth={10}
            onChange={(e) => setStartIndex(e.startIndex as number)}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </>
  );
};

export default Chart;

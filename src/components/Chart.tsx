import { useEffect, useState } from "react";
import { useLoaderData, useSearchParams } from "react-router-dom";
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
} from "recharts";
import styled from "styled-components";
import CustomDot from "./CustomDot";
import CustomToolTip from "./CustomToolTip";

interface ChartProps {
  region: string;
  valueType: string;
  selectRegion: (region: string) => void;
  selectValueType: (valueType: string) => void;
}

const Chart = ({
  region,
  valueType,
  selectRegion,
  selectValueType,
}: ChartProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<chartDataType[]>();
  const fetchedData = useLoaderData() as chartDataType[];
  const [searchParams, _setSearchParams] = useSearchParams();
  const [dotRegion, setDotRegion] = useState("");

  useEffect(() => {
    setData(fetchedData);
    setIsLoading(false);
  }, []);

  if (!data) return null;
  return (
    <Container>
      {isLoading ? (
        "Loading..."
      ) : (
        <ResponsiveContainer width={"100%"} height={500}>
          <ComposedChart
            data={data}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 10,
            }}
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
            />
            <Tooltip content={<CustomToolTip setDotRegion={setDotRegion} />} />
            <Bar
              dataKey="value_bar"
              barSize={10}
              fill="#ffb700"
              yAxisId="right"
            >
              {data.map((entry, index) => (
                <Cell
                  fill={entry.id === region ? "#ff6200" : "#ffb700"}
                  key={`cell-${index}`}
                  onClick={() =>
                    entry.id === region
                      ? selectRegion("전체")
                      : selectRegion(entry.id)
                  }
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
              onClick={() =>
                selectRegion(
                  searchParams.get("region") === dotRegion ? "전체" : dotRegion
                )
              }
            />
            <Legend
              height={50}
              margin={{ top: 100 }}
              onClick={(legend) => selectValueType(legend.value)}
              cursor={"pointer"}
            />
          </ComposedChart>
        </ResponsiveContainer>
      )}
    </Container>
  );
};

export default Chart;

const Container = styled.div`
  max-width: 1440px;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
`;

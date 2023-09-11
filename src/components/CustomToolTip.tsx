import { Dispatch, useEffect } from "react";
import { TooltipProps } from "recharts";

interface props extends TooltipProps<number, string> {
  setDotRegion: Dispatch<React.SetStateAction<string>>;
}
const CustomToolTip = ({ active, payload, setDotRegion }: props) => {
  useEffect(() => {
    if (payload && payload.length) setDotRegion(payload[0].payload.id);
  }, [payload]);

  if (active && payload && payload.length) {
    const [bar, area] = payload;
    return (
      <div className="tooltip">
        <h3 className="tooltip--region">📍{bar.payload.id}</h3>
        <div className="tooltip--value-wrapper">
          <p className="tooltip--value">
            {"time: "}
            <span>{`${bar.payload.time}`}</span>
          </p>
          <p className="tooltip--value">
            {`${bar.dataKey}: `}
            <span>{`${bar.value}`}</span>
          </p>
          <p className="tooltip--value">
            {`${area.dataKey}: `}
            <span>{`${area.value}`}</span>
          </p>
        </div>
      </div>
    );
  }

  return null;
};
export default CustomToolTip;

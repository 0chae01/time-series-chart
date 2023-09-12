import { TooltipProps } from "recharts";

const CustomToolTip = ({ active, payload }: TooltipProps<number, string>) => {
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

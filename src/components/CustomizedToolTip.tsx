import type { Dispatch } from "react";
import { useEffect } from "react";
import { Payload } from "recharts/types/component/DefaultTooltipContent";

interface Props {
  active: boolean;
  setDotRegion: Dispatch<React.SetStateAction<string>>;
  valueType: string;
  payload: Payload<number, string>[];
}

const CustomizedToolTip = ({
  active,
  setDotRegion,
  valueType,
  payload,
}: Props) => {
  useEffect(() => {
    if (payload && payload.length) setDotRegion(payload[0].payload.id);
  }, [payload]);

  if (active && payload && payload.length)
    return (
      <div className="tooltip">
        <h3 className="tooltip--region">📍{payload[0].payload.id}</h3>
        <div className="tooltip--value-wrapper">
          {valueType === "value_bar" ||
          valueType === "value_area" ||
          valueType === "전체" ? (
            <p className="tooltip--value">
              <span>time</span>: {payload[0].payload.time}
            </p>
          ) : null}
          {valueType === "value_area" || valueType === "전체" ? (
            <p className="tooltip--value">
              <span>value_area</span>: {payload[0].payload.value_area}
            </p>
          ) : null}
          {valueType === "value_bar" || valueType === "전체" ? (
            <p className="tooltip--value">
              <span>value_bar</span>: {payload[0].payload.value_bar}
            </p>
          ) : null}
        </div>
      </div>
    );

  return null;
};
export default CustomizedToolTip;

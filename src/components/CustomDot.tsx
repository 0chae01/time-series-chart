import { useSearchParams } from "react-router-dom";
import { chartDataType } from "@/types/data";

interface CustomizedDotProps {
  cx: number;
  cy: number;
  payload: chartDataType;
}

const CustomDot = ({
  cx,
  cy,
  payload,
}: CustomizedDotProps | Record<string, never>) => {
  const [searchParams, _setSearchParams] = useSearchParams();

  return (
    <>
      {searchParams.get("region") === payload.id ? (
        <circle
          cx={cx}
          cy={cy}
          r={3}
          stroke="#fff"
          fill="#277fe4"
          strokeWidth={1}
        />
      ) : null}
    </>
  );
};

export default CustomDot;

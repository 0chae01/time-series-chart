import { useSearchParams } from "react-router-dom";
import Chart from "@/components/Chart";

function App() {
  const [searchParams, setSearchParams] = useSearchParams();
  const region = searchParams.get("region") as string;
  const valueType = searchParams.get("valueType") as
    | "전체"
    | "value_bar"
    | "value_area";

  const selectRegion = (region: string) => {
    setSearchParams({ region, valueType });
  };

  const selectValueType = (valueType: string) => {
    setSearchParams({ region, valueType });
  };

  return (
    <Chart
      region={region}
      valueType={valueType}
      selectRegion={selectRegion}
      selectValueType={selectValueType}
    />
  );
}

export default App;

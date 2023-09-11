import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Chart from "@/components/Chart";

function App() {
  const [searchParams, setSearchParams] = useSearchParams();
  const region = searchParams.get("region") as string;
  const valueType = searchParams.get("valueType") as string;

  const selectRegion = (region: string) => {
    setSearchParams({ region, valueType });
  };

  const selectValueType = (valueType: string) => {
    setSearchParams({ valueType, region });
  };

  useEffect(() => {
    if (!region && !valueType) {
      searchParams.set("region", "전체");
      searchParams.set("valueType", "전체");
    }
  }, []);

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

import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { chartDataType } from "@/types/data";
import Chart from "@/components/Chart";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<chartDataType[]>();

  const fetchedData = useLoaderData() as chartDataType[];

  useEffect(() => {
    setData(fetchedData);
    setIsLoading(false);
  }, []);

  if (!data) return <div>데이터를 불러오는 데 실패했습니다.</div>;

  return <>{isLoading ? <div>Loading...</div> : <Chart data={data} />}</>;
}

export default App;

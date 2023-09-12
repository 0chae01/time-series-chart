import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { chartDataType } from "@/types/data";
import Chart from "@/components/Chart";
import Button from "@/components/Button";
import useQueryParams from "@/hooks/useQueryParams";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<chartDataType[]>();

  const fetchedData = useLoaderData() as chartDataType[];

  const { curQueryData, toggleFilter, resetFilter } = useQueryParams("region");

  const regions = [...new Set(fetchedData.map((data) => data.id))].sort();

  useEffect(() => {
    setData(fetchedData);
    setIsLoading(false);
  }, []);

  if (!data) return <div>데이터를 불러오는 데 실패했습니다.</div>;

  return (
    <>
      <div className="filter-area">
        {regions.map((region, idx) => (
          <Button
            key={idx}
            value={region}
            curQueryData={curQueryData}
            toggleFilter={toggleFilter}
          />
        ))}
        {curQueryData.length > 0 ? (
          <button onClick={resetFilter} className="reset">
            ╳ 필터 초기화
          </button>
        ) : (
          <p className="filter-guide">◀︎ 지역 필터를 선택하세요</p>
        )}
      </div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <Chart
          data={data}
          curQueryData={curQueryData}
          toggleFilter={toggleFilter}
        />
      )}
    </>
  );
}

export default App;

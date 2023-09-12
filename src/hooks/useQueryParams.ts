import { useSearchParams } from "react-router-dom";

const useQueryParams = (queryKey: string) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const curQueryData = searchParams.getAll(queryKey) || [];

  const toggleFilter = (id: string) => {
    const isExist = curQueryData.includes(id);

    if (isExist) {
      if (curQueryData.length === 1) {
        searchParams.delete(queryKey);
        return setSearchParams(searchParams);
      }
      const newQueryData = curQueryData.filter((item) => item !== id);
      searchParams.delete(queryKey);
      newQueryData.forEach((query) => searchParams.append(queryKey, query));
      setSearchParams(searchParams);
    } else {
      searchParams.append(queryKey, id);
      setSearchParams(searchParams);
    }
  };

  const resetFilter = () => {
    setSearchParams("");
  };

  return { curQueryData, toggleFilter, resetFilter };
};

export default useQueryParams;

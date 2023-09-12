import { API_BASE_URL } from "@/constants/api";
import getChartData from "@/utils/getChartData";

const loadData = async () => {
  try {
    const response = await fetch(API_BASE_URL);
    if (!response.ok) {
      throw new Error("데이터 로딩에 실패했습니다.");
    }
    const data = await response.json();
    const responseData = data.response;
    return getChartData(responseData);
  } catch (error) {
    console.error(error);
  }
};

export default loadData;

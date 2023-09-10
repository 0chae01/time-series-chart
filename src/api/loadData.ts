const loadData = async () => {
  try {
    const response = await fetch("/data.json");
    if (!response.ok) {
      throw new Error("데이터 로딩에 실패했습니다.");
    }
    const data = await response.json();
    return data.response;
  } catch (error) {
    console.error(error);
  }
};

export default loadData;

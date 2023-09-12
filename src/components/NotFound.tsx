import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="error">
      <h1>에러가 발생했습니다.</h1>
      <Link to={"/"} replace>
        메인화면으로
      </Link>
    </div>
  );
};

export default NotFound;

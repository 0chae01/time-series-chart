import { createBrowserRouter } from "react-router-dom";
import loadData from "./api/loadData";
import App from "./App";

export const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    loader: loadData,
  },
]);

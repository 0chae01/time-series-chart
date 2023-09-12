import { createBrowserRouter } from "react-router-dom";
import loadData from "@/api/loadData";
import App from "@/App";
import NotFound from "@/components/NotFound";

export const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    loader: loadData,
    errorElement: <NotFound />,
  },
]);

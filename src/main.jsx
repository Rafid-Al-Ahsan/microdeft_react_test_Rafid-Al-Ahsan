import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Main from "./component/Main";
import Registration from "./component/Registration";
import Login from "./component/Login";
import AddCourse from "./component/AddCourse";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
  },
  {
    path: "/registration",
    element: <Registration></Registration>
  },
  {
    path: "/login",
    element: <Login></Login>
  },
  {
    path: "/addcourse",
    element: <AddCourse></AddCourse>
  }
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);
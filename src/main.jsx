import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, Membership, About, Contact, Executive } from "./routes";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: (
      <div className="text-3xl text-center">
        Page not found <br />
        <a href="/" className="text-violet-800">
          Go back home
        </a>
      </div>
    ),
  },
  {
    path: "/membership",
    element: <Membership />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/executive",
    element: <Executive />,
  },
  {
    path: "/events",
    element: (
      <div className="text-3xl text-center">
        This Page is under development, check again later!
        <br />
        <a href="/" className="text-violet-800">
          Go back home
        </a>
      </div>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

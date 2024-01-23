import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./component/Home.jsx";
import Error from "./component/Error.jsx";
import Contact from "./component/Contact.jsx";
import Header from "./component/Header.jsx";
import Resume from "./component/Resume.jsx";
import Services from "./component/Services.jsx";
import Blog from "./component/Blog.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";

import { RouterProvider, createHashRouter } from "react-router-dom";

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/contact",
    element: <Contact />,
    errorElement: <Error />,
  },
  {
    path: "/resume",
    element: <Resume />,
  },
  {
    path: "/service",
    element: <Services />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
]);
const clientId =
  "68032213417-38dqh2stmdt6v4tinqsi8aknvm9kf7pe.apps.googleusercontent.com";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={clientId}>
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
  </React.StrictMode>
);

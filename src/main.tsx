import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./app/layout";
import Demo from "./app/demo/page";
import NotFound from "./app/not-found";
import App from "./app/page";
import { MDXWrapper } from "./components/mdx-wrapper";
import Mdx from "./mdx/Mdx.mdx";
import Curring from "./mdx/Curring.mdx";
import React from "./mdx/React.mdx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true, // 默认route
        element: <App />,
      },
      {
        path: "react",
        element: <React />,
      },
      {
        path: "demo",
        element: <Demo />,
      },
      {
        path: "mdx",
        element: <Mdx />,
      },
      {
        path: "curring",
        element: <Curring />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MDXWrapper>
      <RouterProvider router={router} />
    </MDXWrapper>
  </StrictMode>
);

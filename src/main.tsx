import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./app/layout";
import Demo from "./app/demo/page";
import NotFound from "./app/not-found";
import App from "./app/page";
import { MDXWrapper } from "./components/mdx-wrapper";
import Mdx from "./mdx/Mdx.mdx";
import Curring from "./mdx/Curring.mdx";
import React from "./mdx/React.mdx";
import Hoc from "./mdx/HOC.mdx";
import Hooks from "./mdx/Hooks.mdx";
import Fetch from "./mdx/Fetch.mdx";
import Debug from "./mdx/Debug.mdx";

// 递归函数，用于为每个 element 包裹 MDXWrapper
const wrapWithMDXWrapper = (routes: RouteObject[]) => {
  return routes.map((route) => {
    const newRoute = { ...route };

    // 包裹每个 element
    if (newRoute.element) {
      newRoute.element = <MDXWrapper>{newRoute.element}</MDXWrapper>;
    }

    // 如果有子路由，递归包裹
    if (newRoute.children) {
      newRoute.children = wrapWithMDXWrapper(newRoute.children);
    }

    return newRoute;
  });
};

const routes = [
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
      {
        path: "hoc",
        element: <Hoc />,
      },
      {
        path: "hooks",
        element: <Hooks />,
      },
      {
        path: "fetch",
        element: <Fetch />,
      },
      {
        path: "debug",
        element: <Debug />,
      },
    ],
  },
];

// 调用 wrapWithMDXWrapper 包裹所有的路由
const wrappedRoutes = wrapWithMDXWrapper(routes);

const router = createBrowserRouter(wrappedRoutes);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./app/layout";
import Demo from "./app/demo/page";
import NotFound from "./app/not-found";
import App from "./app/page";
import { MDXWrapper } from "./components/mdx-wrapper";
import MDXContent from "./mdx/Mdx.mdx";

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
        path: "test",
        element: <div>Test</div>,
      },
      {
        path: "demo",
        element: <Demo />,
      },
      {
        path: "mdx",
        element: <MDXContent />,
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

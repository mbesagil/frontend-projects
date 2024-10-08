import { useEffect, useState } from "react";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Layout } from "./router/Layout";
import MainPage from "./router/MainPage";
import Collection from "./router/Collection";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <MainPage /> },
        { path: "/collection/:slugs", element: <Collection /> },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;

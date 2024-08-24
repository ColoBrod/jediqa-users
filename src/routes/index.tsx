import React from "react";
import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";

// Layouts
import LayoutMain from "~/components/layouts/LayoutMain";

// Pages
import Loading from "~/components/pages/Loading";
import NotFound from "~/components/pages/NotFound";
import UsersList from "~/components/pages/UsersList";
import FavoriteUsers from "~/components/pages/FavoriteUsers";

// Routes
import App from "~/App";

const root: RouteObject = {
  path: "",
  element: <App />,
  children: [
    /**
     * Корневой раздел. Лэйаут - LayoutMain
     */
    {
      path: "", 
      element: <LayoutMain />, 
      children: [
        { 
          path: "", 
          element: <Navigate to="users" replace />, 
        },
        {
          path: "users",
          element: <UsersList />,
        },
        {
          path: "favorite-users",
          element: <FavoriteUsers />,
        },
        { path: '*', element: <NotFound />},
      ],
    },
  ],
};

const router = createBrowserRouter([ root ]);
export default router;

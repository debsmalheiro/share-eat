import { useRoutes } from "react-router-dom";

import { Dashboard } from "../pages/Dashboard";
import { LocalsMenu } from "../pages/LocalsMenu";
import { AddMeal } from "../pages/AddMeal";

export const AppRoutes = () => {
  return useRoutes([
    { path: "/", element: <Dashboard /> },
    { path: "/menu/:name", element: <LocalsMenu /> },
    { path: "/new/:name", element: <AddMeal /> },
  ]);
};
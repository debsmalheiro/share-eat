import { useRoutes } from "react-router-dom";

import { Dashboard } from "../pages/Dashboard";
import { RestaurantMenu } from "../pages/RestaurantMenu";
import { AddMeal } from "../pages/AddMeal";

export const AppRoutes = () => {
  return useRoutes([
    { path: "/", element: <Dashboard /> },
    { path: "/menu/:name", element: <RestaurantMenu /> },
    { path: "/new/:name", element: <AddMeal /> },
  ]);
};
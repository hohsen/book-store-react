import { FC } from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  // useParams,
} from "react-router-dom";

import "./_zeroing.css";
import "./index.css";

import { AppLayout } from "./components/AppLayout";
import { Subscribe } from "./components/Subscribe";
import { BookPage } from "./features/books-grid/components/book";
import { Grid } from "./features/books-grid/components/grid";
import { Cart } from "./features/cart";
import { Favorite } from "./features/favorite";
import { LoginPage, Profile } from "./features/profile";

// const BookPage: FC = () => {
//   const params = useParams();
//   return;
// };

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: [<Grid />, <Subscribe />],
      },
      {
        path: "/book/:isbn13",
        element: <BookPage />,
      },
      {
        path: "/favorites",
        element: <Favorite />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);

const App: FC = () => {
  return <RouterProvider router={router} />;
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(<App />);

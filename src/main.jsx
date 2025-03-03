import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Router Components
import App from "./App.jsx";
import BooksPage from "./pages/BooksPage.jsx";
import BookPage from "./pages/BookPage.jsx";
import Favorites from "./pages/favorites.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        element: <BooksPage />,
        index: true,
      },
      {
        path: "/BookPage",
        element: <BookPage />,
      },
      {
        path: "/Favorites",
        element: <Favorites />,
      },
    ],
  },
  {
    path: "*",
    element: <p>404 PAGE NOT FOUND</p>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

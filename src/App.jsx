import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";

const APIURL = "https://gutendex.com/books/";

export default function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

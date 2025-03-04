import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import { useState } from "react";

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchParams, setSearchParams] = useState("");

  return (
    <>
      <Header
        searchParams={searchParams}
        setSearchParams={setSearchParams}
        selectCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <Outlet />
    </>
  );
}

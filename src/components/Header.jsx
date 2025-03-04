import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import Category from "./Category";
import { useEffect } from "react";

export default function Header({
  searchParams,
  setSearchParams,
  selectedCategory,
  setSelectedCategory,
}) {
  useEffect(() => {
    if (searchParams) {
      console.log("Hello", searchParams);
    }
  }, []);
  return (
    <section className="bg-gray-500 p-5 flex flex-wrap h-20 justify-between">
      <div>
        <Link to="/">
          <h1 className="text-3xl text-white ">Gutendex</h1>
        </Link>
      </div>
      <div className="text-1xl text-white flex">
        <input
          value={searchParams}
          onChange={(e) => {
            setSearchParams(e.target.value);
            console.log(e.target.value);
            console.log(searchParams);
          }}
          className="placeholder:text-center px-2"
          type="text"
          placeholder="Search"
        />
      </div>
      <div className="text-lg text-white">
        <Category
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>
      <nav className="text-2xl text-white">
        <Link to={"./Favorites"}>
          <FaStar style={{ color: "yellow" }}></FaStar>
        </Link>
      </nav>
    </section>
  );
}

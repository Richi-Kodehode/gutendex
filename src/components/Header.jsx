import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

export default function Header() {
  return (
    <section className="bg-gray-500 p-5 flex flex-wrap h-20 justify-between">
      <div>
        <Link to="/">
          <h1 className="text-4xl text-white ">Gutendex</h1>
        </Link>
      </div>
      <div className="text-2xl text-white flex">
        <p>--</p>
        <input
          className="placeholder:text-center"
          type="text"
          placeholder="Book title here"
        />
        <p>--</p>
      </div>
      <div>
        <select className="text-2xl text-white" name="" id="">
          <option value="Books">Category</option>
        </select>
      </div>
      <nav className="text-2xl text-white">
        <Link to={"./Favorites"}>
          <FaStar style={{ color: "yellow" }}></FaStar>
        </Link>
      </nav>
    </section>
  );
}

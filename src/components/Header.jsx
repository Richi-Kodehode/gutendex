import { Link } from "react-router-dom";

export default function Header() {
  return (
    <section className="bg-gray-500 p-5 flex flex-wrap h-20 justify-between">
      <div>
        <h1 className="text-4xl text-white ">Gutendex</h1>
      </div>
      <div className="text-2xl text-white ">
        <input type="text" placeholder="Book title here" />
      </div>
      <div>
        <select className="text-2xl text-white" name="" id="">
          <option value="Books">Books</option>
        </select>
      </div>
      <nav className="text-2xl text-white">
        <Link to={"./Favorites"}>Fav</Link>
      </nav>
    </section>
  );
}

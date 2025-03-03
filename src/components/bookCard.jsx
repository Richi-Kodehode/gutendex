import { FaStar } from "react-icons/fa";

export function BookSection() {
  return div    
}

export default function BookCard() {
  return (
    <div className="bg-gray-400 h-96 flex justify-center ">
      <div className="bg-gray-600 flex flex-col border-2 rounded-xl">
        <h2>{title}</h2>
        <img src="#" alt="Picture here" />
        <h3>{Author}</h3>
        <p>{dowload_count}</p>
        <p>Category</p>
        <p>Language</p>
        <p>Link to book</p>
        <button>
          <FaStar
            style={{
              color: "yellow",
              width: "30px",
              height: "30px",
            }}
          ></FaStar>
        </button>
      </div>
      <div></div>
    </div>
  );
}

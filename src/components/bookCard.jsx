import { FaStar } from "react-icons/fa";

export default function BookCard() {
  return (
    <div className="bg-gray-400 min-h-screen flex justify-center ">
      <div className="bg-gray-600 flex flex-col rounded-xl ring-3 h-96 mt-10">
        <img src="#" alt="IMAGE" />
        <h3>title</h3>
        <p>author</p>
        <p>summaries</p>
        <p>download_count</p>
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

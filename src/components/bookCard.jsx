import { Link } from "react-router-dom";
import FavoriteButton from "./FavoriteButton";

export default function BookCard({ book }) {
  if (!book) return null;
  return (
    <div>
      <li>
        <Link to={`/src/pages/BookPage${book.id}`}>{book.title}</Link>
        <FavoriteButton book={book} />
      </li>
    </div>
  );
}

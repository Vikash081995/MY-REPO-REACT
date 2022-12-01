// urlSearchParams as Object

import { useSearchParams } from "react-router-dom";

const useCustomSearchParams = () => {
  const [search, setSearch] = useSearchParams();
  const searchAsObject = Object.fromEntries(new URLSearchParams(search));
  return [searchAsObject, setSearch];
};

const Bookshelf = () => {
  const books = [
    {
      title: "The Road to Rust",
      isCompleted: false
    },
    {
      title: "The Road to Rust1",
      isCompleted: false
    }
  ];
  const [search, setSearch] = useCustomSearchParams();

  const byTitle = (title) => (book) =>
    book.title.toLowerCase().includes((title || "").toLowerCase());

  const handleTitle = (event) => {
    setSearch({ title: event.target.value });
  };
  return (
    <>
      <h2>bookshelf</h2>
      <input type="text" value={search.title} onChange={handleTitle} />
      <ul>
        {books.filter(byTitle(search.title)).map((book) => (
          <li key={book.title}>{book.title}</li>
        ))}
      </ul>
    </>
  );
};
export default Bookshelf;

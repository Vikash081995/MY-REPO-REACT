import { useSearchParams } from "react-router-dom";

const useCustomSearchParams = (param = {}) => {
  const [search, setSearch] = useSearchParams();
  const searchAsObject = Object.fromEntries(new URLSearchParams(search));

  const transformedSearch = Object.keys(param).reduce(
    (acc, key) => ({
      ...acc,
      [key]: param[key](acc[key])
    }),
    searchAsObject
  );

  return [transformedSearch, setSearch];
};

const PARAMS = {
  BooleanParam: (string = "") => string === "true",
  NumberParam: (string = "") => (string ? Number(string) : null)
};
const bySearch = (search) => (book) =>
  book.title.toLowerCase().includes((search.title || "").toLowerCase()) &&
  book.isCompleted === search.isCompleted;

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

  const [search, setSearch] = useCustomSearchParams({
    isCompleted: PARAMS.BooleanParam
  });

  const handleTitle = (event) => {
    setSearch({ title: event.target.value });
  };

  const handleIsCompleted = (event) => {
    setSearch({ isCompleted: event.target.value });
  };

  return (
    <>
      <h2>bookshelf</h2>
      <input type="text" value={search.title} onChange={handleTitle} />
      <Checkbox
        label="Is Completed"
        value={search.title}
        onChange={handleIsCompleted}
      />
      <ul>
        {books.filter(bySearch(search)).map((book) => (
          <li key={book.title}>{book.title}</li>
        ))}
      </ul>
    </>
  );
};
export default Bookshelf;

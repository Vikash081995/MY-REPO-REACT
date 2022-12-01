// Search Params (also called Query Params) are a powerful feature, because they enable you to capture state in a URL. By having state in a URL, you can share it with other people.

// if an application shows a catalog of products, a developer will enable a user to search it. In React this would translate into a list of items (here: products) and a HTML input field for filtering them.

import { Link, Routes, Route, useSearchParams } from "react-router-dom";

const SearchParamsApp = () => {
  return (
    <>
      <h1>React Router</h1>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/bookshelf">Bookshelf</Link>
      </nav>
      <Routes>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="bookshelf" element={<Bookshelf />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
};

export default SearchParamsApp;

// -------------components---------------
const Home = () => {
  return <div>home Component</div>;
};
const NoMatch = () => {
  return <div>NoMatch Component</div>;
};

const Bookshelf = () => {
  const books = [
    {
      title: "The Road to Rust",
      isCompleted: false
    },
    {
      title: "The Road to Rust",
      isCompleted: false
    }
  ];

  const byTitle = (title) => (book) =>
    book.title.toLowerCase().includes((title | "").toLowerCase());

  const [search, setSearch] = useSearchParams();

  const handleTitle = (event) => {
    setSearch({ title: event.target.value });
  };

  return (
    <>
      <h2>Bookshelf</h2>
      <input type="text" value={search.get("title")} onChange={handleTitle} />

      <ul>
        {books.filter(byTitle(search.get("title"))).map((book) => (
          <li key={book.title}>{book.title}</li>
        ))}
      </ul>
    </>
  );
};

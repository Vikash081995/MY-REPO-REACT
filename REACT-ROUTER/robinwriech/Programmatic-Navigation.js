import { useState } from "react";
import {
  Routes,
  Route,
  Link,
  NavLink,
  useParams,
  Outlet,
  useNavigate
} from "react-router-dom";

const data = [
  { id: "1", fullName: "Robin Wieruch" },
  { id: "2", fullName: "Sarah Finnley" }
];

const ProgrammaticNavigation = () => {
  const [users, setUsers] = useState(data);
  const navigate = useNavigate();

  const handleRemoveUser = (userId) => {
    setUsers((state) => state.filter((user) => user.id !== userId));
    navigate("/users");
  };
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="users" element={<Users users={users} />}>
          <Route
            path=":userId"
            element={<User onRemoveUser={handleRemoveUser} />}
          />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
};
export default ProgrammaticNavigation;
// -------------components---------------
const Home = () => {
  return (
    <>
      <h2>Home</h2>
    </>
  );
};

const Users = ({ users }) => {
  return (
    <>
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.fullname}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
};

const NoMatch = () => {
  return <p>There's nothing here:404!</p>;
};

const Layout = () => {
  const style = ({ isActive }) => ({
    fontWeight: isActive ? "bold" : "normal"
  });

  return (
    <>
      <h1>React Router</h1>
      <nav style={{ borderBottom: "solid 1px", paddingBottom: "1rem" }}>
        <NavLink to="/home" style={style}>
          Home
        </NavLink>
        <NavLink to="/users" style={style}>
          Users
        </NavLink>
      </nav>
      <main style={{ padding: "1rem 0" }}>
        <Outlet />
      </main>
    </>
  );
};

const User = ({ onRemoveUser }) => {
  const { userId } = useParams();
  return (
    <>
      <h2>User: {userId}</h2>
      <button type="button" onClick={() => onRemoveUser(userId)}>
        Remove
      </button>
      <Link to="/users">Back to users </Link>
    </>
  );
};

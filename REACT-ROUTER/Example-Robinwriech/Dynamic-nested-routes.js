import {
  NavLink,
  Link,
  Routes,
  Route,
  Outlet,
  useParams
} from "react-router-dom";

const DynamicRouting = () => {
  const users = [
    {
      id: "1",
      fullName: "Robin Wieriech"
    },
    {
      id: "2",
      fullName: "Sarah Finnley"
    }
  ];
  return (
    <>
      <h1>React Router </h1>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/users">Users</Link>
      </nav>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="users" element={<Users users={users} />}>
            <Route path=":userId" element={<User />} />
          </Route>
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
};

export default DynamicRouting;

const Users = ({ users }) => {
  return (
    <>
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={user.id}>{user.fullname}</Link>
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

const Home = () => {
  return (
    <>
      <h2>Home</h2>
    </>
  );
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

const User = () => {
  const { userId } = useParams();
  return (
    <>
      <h2>User: {userId}</h2>
      <Link to="/users">Back to users </Link>
    </>
  );
};

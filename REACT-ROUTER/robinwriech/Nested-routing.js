import { Routes, Route, Link, Outlet } from "react-router-dom";

const NestedApp = () => {
  return (
    <>
      <h1>react Router</h1>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/user">User</Link>
      </nav>
      <Routes>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="user" element={<User />}>
          <Route index element={<Profile />} />
          <Route path="profile" element={<Profile />} />
          <Route path="account" element={<Account />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
};
export default NestedApp;
// -------------------components -------------------
const NoMatch = () => {
  return <p>There's nothing here:404!</p>;
};

const Home = () => {
  return <p>This is the Home Component </p>;
};

const Profile = () => {
  return <p> this is the profile page</p>;
};

const Account = () => {
  return <p>this is Account Page </p>;
};

const User = () => {
  return (
    <>
      <h1>User</h1>
      <nav>
        <Link to="profile">Profile</Link>
        <Link to="account">Account</Link>
      </nav>
      <Outlet />
    </>
  );
};

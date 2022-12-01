import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Home = () => {
  const { openSidebar, openModal } = useGlobalContext();

  return (
    <main>
      <button ClassName="sidebar-toggle">
        <FaBars />
      </button>
      <button className="btn">Show Modal</button>
    </main>
  );
};

export default Home;

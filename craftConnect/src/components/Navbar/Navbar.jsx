import { Link } from "react-router-dom";
import LogoutButton from "../LogoutButton/LogoutButton";

function Navbar() {
  return (
    <div className="fixed flex w-full justify-between items-center px-20 py-7 bg-black text-white">
      <div className="font-bold text-xl">
        <Link to={"/"}>CraftConnect.dev</Link>
      </div>
      <div className="w-1/2">
        <ul className="flex w-full justify-around font-medium">
          <li>Home</li>
          <li>Dashboard</li>
          <li>Most Liked</li>
          {/* top rated */}
          <li>Profile</li>
          <Link to={"/login"}>Login</Link>
          <Link to={"/register"}>Register</Link>
          <LogoutButton />
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

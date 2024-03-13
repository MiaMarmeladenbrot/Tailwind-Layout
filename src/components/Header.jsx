import { useState } from "react";
import { NavLink } from "react-router-dom";
import Login from "./Login";

const Header = () => {
  const [seen, setSeen] = useState(false);

  const togglePop = () => {
    setSeen(!seen);
    // console.log("func läuft");
  };

  return (
    <header className="mb-80 pt-5">
      <nav className="flex justify-between items-center">
        <h2 className="text-lg uppercase">Home_H</h2>
        <nav className="flex gap-6 items-center">
          <NavLink to="/" className={"hover:underline"}>
            Home
          </NavLink>
          <NavLink to="/">About us</NavLink>
          <NavLink to="/">Furniture</NavLink>
          <NavLink to="/">Contact us</NavLink>

          {/* Pop-up für Login-Fenster: */}
          <button
            onClick={togglePop}
            className={"py-1 px-2 border-2 rounded-lg"}
          >
            Log in
          </button>
          {seen ? <Login toggle={togglePop} /> : null}

          <button className={" py-1.5 px-2 bg-[#D4B170] rounded-lg"}>
            Sign up
          </button>
        </nav>
      </nav>
    </header>
  );
};

export default Header;

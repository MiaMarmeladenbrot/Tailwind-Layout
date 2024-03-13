import { useState } from "react";
import { NavLink } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";

const Header = () => {
  // * Login-Pop-Up:
  const [login, setLogin] = useState(false);

  const toggleLogin = () => {
    setLogin(!login);
  };

  // * Sign-up-Pop-up:
  const [signup, setSignup] = useState(false);

  const toggleSignup = () => {
    setSignup(!signup);
  };

  return (
    <header className="mb-72 pt-5">
      <nav className="flex justify-between items-center">
        <h2 className="text-lg uppercase">Home_H</h2>
        <nav className="flex gap-6 items-center">
          <NavLink to="/" className={"hover:underline"}>
            Home
          </NavLink>
          <NavLink to="/" className={"hover:underline"}>
            About us
          </NavLink>
          <NavLink to="/" className={"hover:underline"}>
            Furniture
          </NavLink>
          <NavLink to="/" className={"hover:underline"}>
            Contact us
          </NavLink>
          {/* Pop-up für Login-Fenster: */}
          <button
            onClick={toggleLogin}
            className={"py-1 px-2 border-2 rounded-lg"}
          >
            Log in
          </button>
          {login ? <Login toggle={toggleLogin} /> : null}

          {/* Pop-up für Signup-Fenster: */}
          <button
            onClick={toggleSignup}
            className={" py-1.5 px-2 bg-[#D4B170] rounded-lg"}
          >
            Sign up
          </button>
          {signup ? <Signup toggle={toggleSignup} /> : null}
        </nav>
      </nav>
    </header>
  );
};

export default Header;

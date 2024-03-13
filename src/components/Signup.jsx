import { Link } from "react-router-dom";
import "./Popup.css";

// props: toggle
const Signup = (props) => {
  return (
    <section className="popup">
      {/* <section className="fixed z-1 left-0 top-0 w-full overflow-auto bg-[#00000066] text-black "> */}
      <div className="popup-inner">
        {/* <div className="bg-white absolute left-[50%] top-1/2"> */}
        <h2 className="font-bold text-5xl mb-6">Sign up</h2>
        <form>
          <input className="bg-[#D9D9D9]" type="text" placeholder="Name" />

          <input
            className="bg-[#D9D9D9]"
            type="mail"
            placeholder="Email address"
          />

          <input
            type="password"
            className="bg-[#D9D9D9]"
            placeholder="Create Password"
          />

          <input
            type="password"
            className="bg-[#D9D9D9]"
            placeholder="Confirm Password"
          />

          <input
            className="bg-black text-white"
            type="submit"
            value={"Create Account"}
          />
          <p>
            Already have an account?{" "}
            <Link to="/login" className="hover:text-[#D9D9D9]">
              Log in
            </Link>
          </p>
        </form>

        <div className="flex justify-end">
          <button onClick={props.toggle}>X</button>
        </div>
      </div>
    </section>
  );
};

export default Signup;

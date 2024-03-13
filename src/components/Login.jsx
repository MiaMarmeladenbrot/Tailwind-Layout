import "./Login.css";

// props: toggle
const Login = (props) => {
  return (
    <section className="popup">
      {/* <section className="fixed z-1 left-0 top-0 w-full overflow-auto bg-[#00000066] text-black "> */}
      <div className="popup-inner">
        {/* <div className="bg-white absolute left-[50%] top-1/2"> */}
        <h2 className="font-bold text-5xl mb-6">Login</h2>
        <form>
          <div className="flex gap-7">
            <input
              className="bg-[#D9D9D9]"
              type="text"
              placeholder="First name"
            />
            <input
              className="bg-[#D9D9D9]"
              type="text"
              placeholder="Last name"
            />
          </div>
          <input
            className="bg-[#D9D9D9]"
            type="mail"
            placeholder="Email address"
          />

          <div className="flex flex-col items-center justify-center ">
            <input
              className="bg-black text-white max-w-36"
              type="submit"
              value={"Continue"}
            />
            <p>
              Forgot password? <a href="#">Reset</a>
            </p>{" "}
          </div>
        </form>

        <div className="flex justify-end">
          <button onClick={props.toggle}>X</button>
        </div>
      </div>
    </section>
  );
};

export default Login;

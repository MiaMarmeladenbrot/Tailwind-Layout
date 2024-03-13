import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="pt-20">
      <article className="flex gap-4 justify-evenly font-medium pb-16 px-24">
        <div className="flex flex-col gap-3">
          <h5 className="uppercase">Our Company</h5>
          <Link to="/">About us</Link>
          <Link to="/">Become a partner</Link>
          <Link to="/">Contact us</Link>
        </div>
        <div className="flex flex-col gap-3">
          <h5 className="uppercase">Learn more</h5>
          <Link>How it works</Link>
          <Link>FAQs</Link>
          <Link>Terms and Conditions</Link>
          <Link>Private Policy</Link>
        </div>
        <div className="flex flex-col gap-3">
          <h5 className="uppercase">Subscribe</h5>
          <div>
            <input
              type="mail"
              placeholder="Input your email address"
              className="bg-[#E7E7E7]  py-1 px-3 rounded-lg placeholder:text-[#CDC8CC]"
            />
            <input
              type="submit"
              value={"SEND"}
              className="bg-black text-white border-none py-1 px-3 rounded-lg size-fit"
            />
          </div>
        </div>
      </article>
      <div>
        <p className="bg-black text-white p-2 text-xs px-24">
          By using this website you accept our Terms and use and Private Policy
        </p>
      </div>
    </footer>
  );
};

export default Footer;

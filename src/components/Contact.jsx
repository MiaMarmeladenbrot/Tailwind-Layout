const Contact = () => {
  return (
    <section className="bg-[#A4A4A3] text-white px-24 pt-12 pb-24">
      <div className="flex justify-between gap-5 ">
        <div className="relative">
          <h2 className="text-5xl mb-6">Drop a message</h2>
          <form className="flex flex-col gap-2 min-w-96 ">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Input your name"
              className="bg-[#E7E7E7]  py-1 px-3 rounded-lg placeholder:text-[#CDC8CC]"
            />

            <label htmlFor="tel">Mobile no.</label>
            <input
              type="tel"
              id="tel"
              placeholder="Input your mobile number"
              className="bg-[#E7E7E7]  py-1 px-3 rounded-lg placeholder:text-[#CDC8CC]"
            />

            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Input your message"
              className="bg-[#E7E7E7]  py-1 px-3 rounded-lg placeholder:text-[#CDC8CC]"
            ></textarea>

            <div className="flex justify-end">
              <input
                type="submit"
                value={"SEND"}
                className="bg-black border-none py-1 px-3 rounded-lg size-fit "
              />
            </div>
          </form>
        </div>
        <img
          src="./img/phone.png"
          alt="old telephone"
          className="size-3/6 max-w-[500px]"
        />
      </div>
    </section>
  );
};

export default Contact;

// absolute right-0 bottom-0

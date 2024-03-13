const WhoWeAre = () => {
  return (
    <section className="px-24 bg-[#D9D9D9] pt-24 pb-12">
      <h3 className="text-3xl font-bold mb-10">Who we are</h3>
      <div className="flex items-start gap-5">
        <p className="font-medium w-[30%] mb-16">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper
          accumsan turpis quis quis at. Nec, nisi dis duis urna, elit justo,
          euismod. Ultricies fermentum nibh in ut quis lacus sollicitudin proin.
          Eu sit enim ullamcorper nisl id est. A pulvinar ut fringilla vulputate
          feugiat lobortis phasellus mattis dignissim. Dapibus sed quam
          venenatis platea. Et pharetra, convallis nec volutpat. Sed id et sed
          diam. Diam leo ipsum, urna in lorem amet euismod.
        </p>
        <div className="flex flex-col justify-start items-center text-center">
          <img
            className="object-contain h-80"
            src="./img/chair1.png"
            alt="grey chair"
          />
          <p>Black chair with long legs</p>
          <p>$ 500</p>
        </div>
        <div className="flex flex-col justify-start items-center text-center">
          <img
            className="object-contain	h-80"
            src="./img/chair4.png"
            alt="black chair"
          />
          <p>White chair with spiral design legs</p>
          <p>$ 1000</p>
        </div>
        <div className="flex flex-col justify-start items-center text-center">
          <img
            className="object-contain	h-80"
            src="./img/chair3.png"
            alt="white chair"
          />
          <p>Light brown chair with wooden legs</p>
          <p>$ 100</p>
        </div>
      </div>
      <img className="h-16" src="./img/arrow.svg" alt="" />
    </section>
  );
};

export default WhoWeAre;

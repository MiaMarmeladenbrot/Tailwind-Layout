import Header from "./Header";

const Hero = () => {
  return (
    <section className="px-24 bg-[url('/img/hero.png')] bg-center bg-no-repeat bg-cover min-h-screen text-white">
      <Header />
      <div className="flex items-center justify-center">
        <h1 className="text-7xl max-w-screen-lg text-center">
          Everyone Loves To Welcome A Good Furniture
        </h1>
      </div>
    </section>
  );
};

export default Hero;

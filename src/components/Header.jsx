const Header = () => {
  return (
    <header className="sm:p-16 py-16 px-8 flex justify-center lg:items-center max-lg:flex-col w-full sm:gap-16 gap-0">
      <div className="flex-1 flex flex-col gap-10">
        <img
          src="./logo.svg"
          alt="logo"
          className="object-contain w-[100px] h-[100px]"
        />
        <h1 className="sm:text-6xl text-5xl text-white lg:max-w-lg font-bold leading-[120%]">
          Explore The <span className="red-gradient">Anime Magic</span>
        </h1>
      </div>
      <div className="lg:flex-1 w-full justify-center">
        <img src="/anime.png" alt="anime" className="object-contain" />
      </div>
    </header>
  );
};

export default Header;

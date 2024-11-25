import Assets from "../assets/Assets";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="">
          {" "}
          {window.innerWidth > 768 ? (
            <img className="header-image" src={Assets.blueLogo} />
          ) : (
            <img className="header-image" src={Assets.mobileLogo} />
          )}
        </div>

        <div className="flex items-center">
          <a
            href="#about"
            className="mx-2.5 hover:opacity-70 cursor-pointer text-xl md:text-2xl"
          >
            sobre
          </a>
          <a
            href="#projects"
            className="mx-2.5 hover:opacity-70 cursor-pointer text-xl md:text-2xl"
          >
            projetos
          </a>
          <a
            href="#team"
            className="mx-2.5 hover:opacity-70 cursor-pointer text-xl md:text-2xl"
          >
            time
          </a>
        </div>
      </div>{" "}
    </div>
  );
};

export default Header;

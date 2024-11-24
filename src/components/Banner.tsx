import "../App.css";
import Contact from "./Contact";

const Banner = () => {
  return (
    <div className="bg-[url('/src/assets/background.jpg')] h-screen bg-cover bg-mobile md:bg-initial">
      <div className="max-w-screen-xl m-auto flex items-center h-full justify-end">
        <div className="absolute right-0 top-48 w-7/12 md:static md:w-5/12">
          {" "}
          <div className="mb-5">
            {" "}
            <h1 className="text-3xl md:text-5xl">Simplifique com a πping</h1>
            <h2 className="text-1xl">Excelência em Projetos.</h2>{" "}
          </div>
          <div>
            <a
              href="#contato"
              className="rounded-md p-2 text-white bg-piping-blue hover:opacity-90 cursor-pointer mt-20"
            >
              {" "}
              entrar em contato{" "}
            </a>
          </div>
          <div id="contato" className="modalDialog">
            <div>
              <div className="flex justify-end mt-3">
                {" "}
                <a href="" className="app-modal--close">
                  X
                </a>
              </div>

              <Contact />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

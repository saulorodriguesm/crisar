import Assets from "../assets/Assets";

const Footer = () => {
  return (
    <div className="bg-piping-blue p-10">
      <div className="fixed bottom-4 right-4 cursor-pointer w-14 ease-in duration-300">
        <a href={`https://api.whatsapp.com/send?phone=11991530393`}>
          {" "}
          <img src={Assets.whatsapp} />
        </a>
      </div>
      <div className="max-w-screen-xl m-auto md:flex justify-between">
        {" "}
        <div>
          {" "}
          <img className="w-32 mb-5" src={Assets.whiteLogo} />
          <div className=" text-white my-3">
            CrisAr - Instalação de Ar Condicionado{" "}
          </div>
        </div>
        <div className="flex flex-col justify-between text-white text-xs">
          <div className="flex my-3">

            <a href="">
              <img className="w-6" src={Assets.instagram} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

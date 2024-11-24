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
          <div className=" text-white my-3">πping projetos </div>
          <div className=" text-white my-3">CNPJ: 55.308.283/0001-25 </div>
          <div className="my-3 text-white">
            Horário de atendimento Seg. à Qui. das 08:00h às 18:00h | Sex. das
            08:00h às 17:00h{" "}
          </div>{" "}
        </div>
        <div className="flex flex-col justify-between text-white text-xs">
          <div className="flex my-3">
            <a
              className="mr-3"
              href="https://www.linkedin.com/company/%CF%80ping-projetos-de-engenharia/about/"
            >
              <img className="w-6" src={Assets.linkedin} />
            </a>
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

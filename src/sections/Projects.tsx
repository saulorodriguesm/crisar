
const Projects = () => {
  return (
    <div id="projects" className="p-10 bg-off-white">
      <div className="max-w-screen-xl m-auto ">
        <h3> Projetos </h3>
        <div className="md:flex justify-between md:mb-20">
          <div className=" mb-12 md:w-1/4 md:mb-0">
            <img className="h-60 w-full"  />
            <div className="bg-piping-blue text-white w-full p-3 min-h-24 flex items-center">
              Estação de tratamento de efluentes biológica com polimento e reuso
              através de osmose reversa{" "}
            </div>
          </div>
          <div className=" mb-12 md:w-1/4 md:mb-0">
            <img className="h-60 w-full" />
            <div className="bg-piping-blue text-white w-full p-3 min-h-24 flex items-center">
              Estação de tratamento de efluentes físico/químico
            </div>
          </div>{" "}
          <div className=" mb-12 md:w-1/4 md:mb-0">
            <img className="h-60 w-full" />
            <div className="bg-piping-blue text-white w-full p-3 min-h-24 flex items-center">
              Estação de tratamento de efluentes biológico (sistema por
              batelada){" "}
            </div>
          </div>
        </div>
        <div className="md:flex justify-between">
          <div className=" mb-12 md:w-1/4 md:mb-0">
            <img className="w-full h-60"  />
            <div className="bg-piping-blue text-white w-full p-3 min-h-24 flex items-center">
              Unidade móvel de tratamento de água
            </div>
          </div>
          <div className=" mb-12 md:w-1/4 md:mb-0">
            <img className="h-60 w-full" />
            <div className="bg-piping-blue text-white w-full p-3 min-h-24 flex items-center">
              Estação de tratamento de água
            </div>
          </div>{" "}
          <div className=" mb-12 md:w-1/4 md:mb-0">
            <img className="h-60 w-full" />
            <div className="bg-piping-blue text-white w-full p-3 min-h-24 flex items-center">
              Estação de tratamento de efluentes com alto teor de sílica
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

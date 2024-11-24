const Team = () => {
  return (
    <div id="team" className="p-10 ">
      <div className="max-w-screen-xl m-auto">
        <h3> Conheça o time</h3>
        <div className="w-100  text-black">
          Nosso time é composto por profissionais altamente capacitados, desde
          engenheiros a projetistas, cada um trazendo uma expertise única e
          essencial para o sucesso dos nossos projetos.Com essa equipe
          multidisciplinar e dedicada, estamos preparados para enfrentar
          desafios complexos e entregar resultados excepcionais em todos os
          nossos empreendimentos de engenharia. Conheça um pouco deles abaixo:
          <div className="md:flex w-100 mt-10">
            <img className="border-solid border-2 border-piping-blue rounded-lg mb-6 w-72 h-72 " />
            <div className="md:ml-6 font-bold">
              {" "}
              <div className="">Gabriela Rodrigues </div>
              <div>Projetista</div>
              <div>Formada em Engenharia</div>
              <div className="font-light text-black">
                {" "}
                João Silva é um engenheiro com cinco anos de experiência,
                especializado em engenharia civil. Durante sua carreira, ele
                participou de diversos projetos de infraestrutura, incluindo a
                construção de edifícios comerciais e residenciais, bem como a
                elaboração de sistemas de saneamento. João possui habilidades
                sólidas em planejamento, gerenciamento de projetos e análise
                estrutural, além de ser proficiente no uso de software de design
                e modelagem. Sua dedicação à qualidade e segurança, aliada à
                capacidade de trabalhar de forma colaborativa, faz dele um
                profissional valioso para qualquer equipe de engenharia.
              </div>
            </div>
          </div>
          <div className="md:flex md:justify-end md:text-right mt-10">
            {window.innerWidth < 768 ? (
              <img className="border-solid border-2 border-piping-blue  rounded-lg mb-6 w-72 h-72 " />
            ) : (
              ""
            )}
            <div className="md:mr-6 font-bold">
              {" "}
              <div>Paulo Silva </div>
              <div>Engenheiro</div>
              <div>Formada em Engenharia</div>{" "}
              <div className="text-black font-light">
                {" "}
                João Silva é um engenheiro com cinco anos de experiência,
                especializado em engenharia civil. Durante sua carreira, ele
                participou de diversos projetos de infraestrutura, incluindo a
                construção de edifícios comerciais e residenciais, bem como a
                elaboração de sistemas de saneamento. João possui habilidades
                sólidas em planejamento, gerenciamento de projetos e análise
                estrutural, além de ser proficiente no uso de software de design
                e modelagem. Sua dedicação à qualidade e segurança, aliada à
                capacidade de trabalhar de forma colaborativa, faz dele um
                profissional valioso para qualquer equipe de engenharia.
              </div>
            </div>
            {window.innerWidth < 768 ? (
              ""
            ) : (
              <img className="border-solid border-2 border-piping-blue  rounded-lg mb-6 w-72 h-72 " />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;

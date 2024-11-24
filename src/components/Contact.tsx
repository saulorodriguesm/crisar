import { useState } from "react";

const Contact = () => {
  const [message, setMessage] = useState<string>();
  const phone = "11991530393";

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    const formattedValue = value.replace(/ /g, "%20");
    setMessage(formattedValue);
  };

  return (
    <div className="p-4">
      <div>Entre em contato com o nosso time pelo WhatsApp</div>
      <div>
        <div className="my-5 flex flex-col">
          <label>Nome/Empresa: </label>
          <input className="border-piping-blue border-solid border-2 rounded-md p-2" />
        </div>
        <div className="my-5 flex flex-col">
          <label>Sua mensagem: </label>
          <textarea
            onChange={handleChange}
            rows={5}
            className="border-piping-blue border-solid border-2 rounded-md p-2"
          />
        </div>
        <div className="my-5 flex flex-col">
          <a
            className="rounded-md bg-piping-blue text-white p-2 hover:opacity-90 cursor-pointer text-center"
            href={`https://api.whatsapp.com/send?phone=${phone}&text=${message}`}
          >
            {" "}
            Enviar{" "}
          </a>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Contact;

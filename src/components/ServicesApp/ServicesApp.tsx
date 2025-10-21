import { ListCheck } from "lucide-react";
import { serviceapp } from "./serviceapp";

export default function ServicesApp() {
  return (
    <div className="container-section flex flex-col gap-5 pt-12 pb-8 md:py-8">
      <h1 className="text-white uppercase text-2xl">Como funciona</h1>

      <div className="flex flex-col md:flex-row items-center justify-center gap-5">
        {serviceapp.map((info, index) => (
          <div
            key={index}
            className="backdrop-blur-md bg-white/10 shadow-lg py-[48px] px-5 w-[320px] h-auto min-h-[312px] rounded-xl md:w-[300px] md:h-[287px] md:rounded-lg flex flex-col gap-3 items-center"
          >
            {info.icon}
            <h3 className="text-white text-2xl">{info.title}</h3>
            <p className="text-white text-[15px] text-center">
              {info.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

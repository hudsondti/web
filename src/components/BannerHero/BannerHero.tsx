import Link from "next/link";

export default function BannerHero() {
  return (
    <div className="h-[600px] flex items-center justify-center">
      <div className="container-section flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <h1 className="uppercase text-[#cbcbcb] text-center title-mobile md:text-9xl md:font-bold">
            Chronos
          </h1>
          <p className="text-white text-center">
            Sua nova maneira de gerenciar o tempo.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-white md:text-2xl text-center mx-auto">
            O site de agendamento de gastos é uma plataforma online que permite
            aos usuários planejar, registrar e acompanhar seus gastos futuros,
            como contas fixas, parcelas, investimentos, compras programadas e
            muito mais. Com uma interface intuitiva, o sistema oferece uma visão
            clara do fluxo financeiro, ajudando na tomada de decisões e evitando
            surpresas no orçamento.
          </p>

          <Link
            href="/agendamento"
            className="text-white uppercase bg-indigo-950 rounded-3xl px-6 py-3 self-center w-fit"
          >
            Comece agora
          </Link>
        </div>
      </div>
    </div>
  );
}

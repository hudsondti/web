"use client";
import { useState } from "react";

interface AgendaItem {
  id: number;
  text: string;
}

interface GastoItem {
  id: number;
  descricao: string;
  valor?: string;
}

export default function FinancasPage() {
  const [agendaItems] = useState<AgendaItem[]>([
    { id: 1, text: "Lorem Ipsum" },
    { id: 2, text: "Lorem Ipsum" },
    { id: 3, text: "Lorem Ipsum" },
  ]);

  const [calendarioItems] = useState<AgendaItem[]>([
    { id: 1, text: "Lorem Ipsum" },
    { id: 2, text: "Lorem Ipsum" },
    { id: 3, text: "Lorem Ipsum" },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#31155d] via-[#4a1e75] to-[#6a2c8c] relative overflow-hidden pt-[88px]">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full border-2 border-white/10" />
        <div className="absolute top-40 right-20 w-24 h-24 rounded-full border border-white/5" />
        <div className="absolute bottom-32 left-32 w-40 h-40 rounded-full border border-white/5" />
        <div className="absolute bottom-20 right-16 w-16 h-16 rounded-full border border-white/10" />
      </div>

      <main className="relative z-10 px-4 py-8">
        <div className="container-section">
          <div className="text-center mb-8">
            <h1 className="text-white text-4xl font-bold mb-2">CHRONOS</h1>
            <h2 className="text-white text-2xl">Controle Financeiro</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-[#31155d] text-white px-6 py-4">
                  <h3 className="text-xl font-bold">Agenda</h3>
                </div>
                <div className="p-6 space-y-4">
                  {agendaItems.map((item) => (
                    <div key={item.id} className="text-gray-700">
                      {item.text}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-[#31155d] text-white px-6 py-4">
                  <h3 className="text-xl font-bold">Calendário</h3>
                </div>
                <div className="p-6 min-h-[200px] bg-gray-50">
                  <div className="space-y-3">
                    {calendarioItems.map((item) => (
                      <div key={item.id} className="text-gray-500 text-sm">
                        {item.text}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-8 min-h-[600px]">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-[#31155d] mb-8">
                    Lorem Ipsum
                  </h3>

                  <div className="space-y-4">
                    <p className="text-gray-700 text-lg">Lorem Ipsum</p>
                    <p className="text-gray-700 text-lg">Lorem Ipsum</p>
                  </div>

                  <div className="mt-12 p-8 bg-gray-50 rounded-lg border-2 border-dashed border-gray-200 min-h-[300px] flex items-center justify-center">
                    <div className="text-center text-gray-400">
                      <p className="text-lg">Área de controle financeiro</p>
                      <p className="text-sm mt-2">
                        Adicione seus gastos e receitas aqui
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="relative z-10 bg-white/95 backdrop-blur-sm mt-auto">
        <div className="container-section py-4">
          <p className="text-center text-[#31155d] font-medium">
            T: Insira os Gastos de Hoje
          </p>
        </div>
      </div>
    </div>
  );
}

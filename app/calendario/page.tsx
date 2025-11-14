"use client";
import { useState } from "react";

interface AgendaItem {
  id: number;
  text: string;
}

export default function CalendarioPage() {
  const [agendaItems] = useState<AgendaItem[]>([
    { id: 1, text: "Lorem Ipsum" },
    { id: 2, text: "Lorem Ipsum" },
    { id: 3, text: "Lorem Ipsum" },
  ]);

  const [financasItems] = useState<AgendaItem[]>([
    { id: 1, text: "Lorem Ipsum" },
    { id: 2, text: "Lorem Ipsum" },
    { id: 3, text: "Lorem Ipsum" },
  ]);

  const generateCalendarDays = () => {
    const daysInMonth = 30;
    const firstDayOfWeek = 5;
    const days = [];

    // Previous month days
    for (let i = firstDayOfWeek; i > 0; i--) {
      days.push({ day: 31 - i + 1, isCurrentMonth: false, isPrevMonth: true });
    }

    // Current month days
    for (let day = 1; day <= daysInMonth; day++) {
      days.push({ day, isCurrentMonth: true, isPrevMonth: false });
    }

    // Next month days to fill the grid
    const totalCells = Math.ceil(days.length / 7) * 7;
    for (let day = 1; days.length < totalCells; day++) {
      days.push({ day, isCurrentMonth: false, isPrevMonth: false });
    }

    return days;
  };

  const calendarDays = generateCalendarDays();
  const weekDays = ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SAB"];

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
            <h2 className="text-white text-2xl">Calendário</h2>
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
                  <h3 className="text-xl font-bold">Finanças</h3>
                </div>
                <div className="p-6 min-h-[200px] bg-gray-50">
                  <div className="space-y-3">
                    {financasItems.map((item) => (
                      <div key={item.id} className="text-gray-500 text-sm">
                        {item.text}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-[#31155d] text-center mb-2">
                    Novembro de 2025
                  </h3>
                </div>

                <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                  <div className="bg-[#31155d] text-white grid grid-cols-7">
                    {weekDays.map((day) => (
                      <div
                        key={day}
                        className="p-3 text-center font-medium text-sm"
                      >
                        {day}
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-7">
                    {calendarDays.map((dayInfo, index) => (
                      <div
                        key={index}
                        className={`
                          p-3 h-16 border-r border-b border-gray-200 flex items-center justify-center text-sm font-medium
                          ${
                            !dayInfo.isCurrentMonth
                              ? "text-gray-300 bg-gray-50"
                              : "text-gray-700 hover:bg-blue-50 cursor-pointer"
                          }
                          ${
                            dayInfo.day === 14 && dayInfo.isCurrentMonth
                              ? "bg-[#31155d] text-white"
                              : ""
                          }
                        `}
                      >
                        {dayInfo.day}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <div className="text-center text-gray-600">
                    <p className="text-sm">Hoje: 14 de Novembro de 2025</p>
                    <p className="text-xs mt-2">
                      Clique em uma data para ver os compromissos
                    </p>
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
            T: Visualize seus Compromissos do Mês
          </p>
        </div>
      </div>
    </div>
  );
}

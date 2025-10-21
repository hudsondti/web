import Link from "next/link";
import Image from "next/image";
import { User, Calendar, DollarSign, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#010B0C] text-white pt-16 pb-8">
      <div className="container-section">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <Image
                src="/assets/engweb-logo.svg"
                alt="Chronos Logo"
                width={120}
                height={40}
                className="filter brightness-0 invert"
              />
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Chronos - Sua nova maneira de gerenciar o tempo. Planeje, registre
              e acompanhe seus gastos futuros com uma interface intuitiva.
            </p>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <MapPin size={16} />
              <span>Brasil</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-1 lg:col-span-1">
            <h3 className="text-white font-semibold text-lg mb-4">Navegação</h3>
            <div className="grid grid-cols-2 md:grid-cols-1 gap-3">
              <Link
                href="/agenda"
                className="text-gray-300 hover:text-white transition duration-300 flex items-center gap-2"
              >
                <Calendar size={16} />
                Agenda
              </Link>
              <Link
                href="/calendario"
                className="text-gray-300 hover:text-white transition duration-300 flex items-center gap-2"
              >
                <Calendar size={16} />
                Calendário
              </Link>
              <Link
                href="/financas"
                className="text-gray-300 hover:text-white transition duration-300 flex items-center gap-2"
              >
                <DollarSign size={16} />
                Finanças
              </Link>
              <Link
                href="/login"
                className="text-gray-300 hover:text-white transition duration-300 flex items-center gap-2"
              >
                <User size={16} />
                Login
              </Link>
            </div>
          </div>

          {/* Services - Hidden on mobile */}
          <div className="hidden md:block">
            <h3 className="text-white font-semibold text-lg mb-4">Serviços</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/agendamento"
                  className="text-gray-300 hover:text-white transition duration-300"
                >
                  Agendamento de Gastos
                </Link>
              </li>
              <li>
                <Link
                  href="/planejamento"
                  className="text-gray-300 hover:text-white transition duration-300"
                >
                  Planejamento Financeiro
                </Link>
              </li>
              <li>
                <Link
                  href="/controle"
                  className="text-gray-300 hover:text-white transition duration-300"
                >
                  Controle de Tempo
                </Link>
              </li>
              <li>
                <Link
                  href="/relatorios"
                  className="text-gray-300 hover:text-white transition duration-300"
                >
                  Relatórios
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info - Hidden on mobile */}
          <div className="hidden md:block">
            <h3 className="text-white font-semibold text-lg mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <Mail size={16} />
                <a
                  href="mailto:contato@chronos.com"
                  className="hover:text-white transition duration-300"
                >
                  contato@chronos.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone size={16} />
                <a
                  href="tel:+5511999999999"
                  className="hover:text-white transition duration-300"
                >
                  (11) 99999-9999
                </a>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-6">
              <Link
                href="/agendamento"
                className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg transition duration-300 text-sm font-medium"
              >
                Comece Agora
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2025 Chronos. Todos os direitos reservados.
            </div>

            <div className="flex gap-6 text-sm">
              <Link
                href="/privacidade"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                Política de Privacidade
              </Link>
              <Link
                href="/termos"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

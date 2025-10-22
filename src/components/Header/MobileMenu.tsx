import { Link, User } from "lucide-react";
import { useState } from "react";

interface MobileMenuProps {}

export default function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="absolute top-full left-0 w-full bg-[#26006b] shadow-lg bg-opacity-95 md:hidden">
      <nav className="container-section px-4 py-6">
        <ul className="flex flex-col gap-6 text-white">
          <li>
            <Link
              href="/agenda"
              className="block text-responsive hover:text-gray-300 transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Agenda
            </Link>
          </li>
          <li>
            <Link
              href="/calendario"
              className="block text-responsive hover:text-gray-300 transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Calendario
            </Link>
          </li>
          <li>
            <Link
              href="/financas"
              className="block text-responsive hover:text-gray-300 transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Finanças
            </Link>
          </li>
          <li className="flex justify-center">
            <Link
              className="flex items-center gap-3 rounded bg-indigo-800 py-2 px-4 hover:opacity-80 transition duration-300 w-fit text-responsive"
              href="/login"
              onClick={() => setIsMenuOpen(false)}
            >
              <User className="text-white w-6 h-6" />
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

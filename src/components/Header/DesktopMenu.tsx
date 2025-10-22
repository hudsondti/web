import { User } from "lucide-react";
import Link from "next/link";
import { pagesMenu } from "./pagesmenu";

export default function DesktopMenu() {
  return (
    <nav className="hidden md:block">
      <ul className="flex items-center gap-[56px] text-white">
        {pagesMenu.map((page) => (
          <li key={page.name}>
            <Link
              href={page.href}
              className="text-responsive hover:text-gray-300 transition duration-300"
            >
              {page.name}
            </Link>
          </li>
        ))}

        <Link
          className="flex items-center gap-3 rounded bg-indigo-800 py-2 px-4 hover:opacity-80 transition duration-300 text-responsive"
          href="/login"
        >
          <User className="text-white w-6 h-6" />
          Login
        </Link>
      </ul>
    </nav>
  );
}

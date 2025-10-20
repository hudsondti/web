import Link from "next/link";

export default function Header() {
  return (
    <div className="flex items-center justify-between py-8 px-11 bg-indigo-900">
      <div>Header</div>
      <nav>
        <ul className="flex items-center gap-8 text-white">
          <li>
            <Link href="/agenda">Agenda</Link>
          </li>
          <li>
            <Link href="/calendario">Calendario</Link>
          </li>
          <li>
            <Link href="/financas">Finanças</Link>
          </li>
          <Link href="/login">Login</Link>
        </ul>
      </nav>
    </div>
  );
}

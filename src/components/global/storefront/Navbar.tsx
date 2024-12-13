
import Link from "next/link";
import NavbarLinks from "./NavbarLinks";

export function Navbar() {
  return (
    <nav className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
      <div className="flex items-center">
        <Link href="/">
          <h1 className="text-black font-bold text-xl lg:text-3xl">
            Triki<span className="text-primary">Khadija</span>
          </h1>
        </Link>
        <NavbarLinks/>
      </div>
    </nav>
  );
}

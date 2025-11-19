import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-dark text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-bold hover:text-primary transition-colors">
          Ethan Chapman
        </Link>
        <nav>
          <ul className="flex gap-6 md:gap-8">
            <li>
              <Link href="/#about" className="hover:text-primary transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="/#projects" className="hover:text-primary transition-colors">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-primary transition-colors">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/#contact" className="hover:text-primary transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

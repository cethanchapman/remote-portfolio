import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white mt-16">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">Ethan Chapman</h3>
            <p className="text-gray-400">
              Computer Science | AI & Machine Learning | App Development | Information Technology | Hardware, Software & Coding
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#about" className="text-gray-400 hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/#projects" className="text-gray-400 hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-gray-400 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/cethanchapman"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/cethanchapman/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="mailto:cethanchapman@gmail.com"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Ethan Chapman. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

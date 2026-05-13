import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="w-full border-t py-12"
      style={{ backgroundColor: '#eaf6f2', borderColor: 'rgba(190, 201, 194, 0.3)' }}
    >
      <div className="max-w-[1200px] mx-auto px-5 md:px-16 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="font-serif text-xl font-semibold" style={{ color: '#006950' }}>
          Hong Cheon-pyo
        </div>

        <p className="text-sm text-center md:text-left" style={{ color: '#3e4944' }}>
          © {currentYear} Hong Cheon-pyo. All rights reserved. Crafted by DieNo
        </p>

        <nav className="flex gap-6">
          {[
            { href: '/', label: '홈' },
            { href: '/about', label: '소개' },
            { href: '/blog', label: '블로그' },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold tracking-wide transition-colors duration-300 hover:text-[#006950]"
              style={{ color: '#3e4944' }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}

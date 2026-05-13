'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navItems = [
  { href: '/', label: '홈' },
  { href: '/about', label: '소개' },
  { href: '/blog', label: '블로그' },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <nav
      className="fixed top-0 w-full z-[100] border-b transition-all duration-300"
      style={{
        backgroundColor: 'rgba(240, 252, 248, 0.85)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderColor: 'rgba(190, 201, 194, 0.3)',
        boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
      }}
    >
      <div className="flex justify-between items-center max-w-[1200px] mx-auto px-5 md:px-16 h-20">
        {/* 로고 */}
        <Link
          href="/"
          className="font-serif text-2xl font-semibold tracking-tight"
          style={{ color: '#131e1b' }}
        >
          Hong Cheon-pyo
        </Link>

        {/* 데스크탑 네비 */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold tracking-[0.05em] uppercase transition-colors duration-300 pb-1"
              style={
                isActive(item.href)
                  ? { color: '#006950', borderBottom: '2px solid #006950' }
                  : { color: '#3e4944' }
              }
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTA + 모바일 햄버거 */}
        <div className="flex items-center gap-3">
          <Link
            href="/about"
            className="hidden md:inline-flex items-center justify-center px-6 py-2 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 hover:opacity-90"
            style={{ backgroundColor: '#006950', color: '#ffffff' }}
          >
            Connect
          </Link>
          <button
            className="md:hidden p-2"
            style={{ color: '#131e1b' }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="메뉴"
          >
            <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>
              {mobileOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* 모바일 메뉴 */}
      {mobileOpen && (
        <div
          style={{
            backgroundColor: 'rgba(240, 252, 248, 0.97)',
            borderTop: '1px solid rgba(190, 201, 194, 0.3)',
          }}
        >
          <div className="max-w-[1200px] mx-auto px-5 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="py-3 text-base font-semibold"
                style={isActive(item.href) ? { color: '#006950' } : { color: '#3e4944' }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/about"
              onClick={() => setMobileOpen(false)}
              className="mt-2 py-3 px-6 rounded-full text-sm font-semibold text-center"
              style={{ backgroundColor: '#006950', color: '#ffffff' }}
            >
              Connect
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

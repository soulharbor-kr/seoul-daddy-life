import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "홍천표 — 골목상권의 혁신가",
  description: "위기를 기회로 바꾼 골목상권의 혁신가 홍천표 대표의 이야기. 유통 현장 40년, 신뢰와 연대로 동네 슈퍼마켓의 새 가능성을 증명합니다.",
  keywords: ["홍천표", "골목상권", "코사마트", "슈퍼마켓 혁신", "상생경영", "지역상권"],
  openGraph: {
    title: "홍천표 — 골목상권의 혁신가",
    description: "결핍에서 시작해 변화와 신뢰, 그리고 연대로 동네 슈퍼마켓의 새로운 가능성을 증명한 홍천표 대표의 이야기",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className="min-h-full flex flex-col antialiased" style={{ backgroundColor: '#f0fcf8', color: '#131e1b' }}>
        <Header />
        <div className="flex-1">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}

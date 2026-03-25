import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eatsfine Routing App",
  description: "Week2 Next.js App Router assignment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <header style={{ padding: "16px", borderBottom: "1px solid #ddd" }}>
          <nav style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <Link href="/">홈</Link>
            <Link href="/search">검색</Link>
            <Link href="/customer-support">고객센터</Link>
            <Link href="/mypage">마이페이지</Link>
            <Link href="/payment/success">결제 성공</Link>
            <Link href="/payment/fail">결제 실패</Link>
            <Link href="/reservation/complete">예약 완료</Link>
          </nav>
        </header>
        <main style={{ padding: "24px" }}>{children}</main>
      </body>
    </html>
  );
}

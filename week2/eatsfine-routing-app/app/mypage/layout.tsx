import Link from "next/link";

export default function MyPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <h1>마이페이지 레이아웃</h1>

      <nav style={{ display: "flex", gap: "12px", marginBottom: "20px" }}>
        <Link href="/mypage/info">내 정보</Link>
        <Link href="/mypage/settings">설정</Link>
        <Link href="/mypage/subscription">구독</Link>
        <Link href="/mypage/reservations">예약 내역</Link>
        <Link href="/mypage/store">내 매장</Link>
      </nav>

      <div>{children}</div>
    </section>
  );
}

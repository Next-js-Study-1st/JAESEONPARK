import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>잇츠파인 home 페이지</h1>
      <p>Next.js App Router 기반 라우팅 구조 과제</p>
      <ul>
        <li>
          <Link href="/search">검색 페이지로 이동</Link>
        </li>
        <li>
          <Link href="/mypage">마이페이지로 이동</Link>
        </li>
        <li>
          <Link href="/oauth/callback">OAuth 콜백 페이지로 이동</Link>
        </li>
      </ul>
    </div>
  );
}

import Link from "next/link";

export default function StorePage() {
  return (
    <div>
      <h1>마이페이지 - 매장 관리</h1>
      <ul>
        <li>
          <Link href="/mypage/store/register">매장 등록</Link>
        </li>
        <li>
          <Link href="/mypage/store/1">매장 상세페이지</Link>
        </li>
      </ul>
    </div>
  );
}

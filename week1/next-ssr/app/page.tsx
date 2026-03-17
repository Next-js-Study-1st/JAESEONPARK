type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const dynamic = "force-dynamic";

async function getPost(): Promise<Post> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("데이터를 불러오지 못했습니다.");
  }
  return res.json();
}

export default async function Page() {
  const post = await getPost();
  return (
    <main style={{ padding: "40px", lineHeight: 1.6 }}>
      <h1>Next.js SSR(Server Side Rendering) 응답 예시</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </main>
  );
}

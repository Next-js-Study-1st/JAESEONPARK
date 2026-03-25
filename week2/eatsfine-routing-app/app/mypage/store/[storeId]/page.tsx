type PageProps = {
  params: Promise<{
    storeId: string;
  }>;
};

export default async function StoreDetailPage({ params }: PageProps) {
  const { storeId } = await params;

  return <h1>마이페이지 - 매장 상세 페이지: {storeId}</h1>;
}

export default async function ArticlesLayout({
  children,
  params,
  // searchParams,
}: {
  children: React.ReactNode;
  params: Promise<{ articleId: string }>;
  // searchParams: Promise<{ lang: string }>;
}) {
  const { articleId } = await params;
  // const { lang } = await searchParams;

  return (
    <div>
      <h1>Params: {articleId}</h1>
      {/* <h1>SearchParams: {lang}</h1> */}
      {children}
    </div>
  );
}

export default async function MitraRubrik({
  params,
}: {
  params: Promise<{ rubrik_slug: string }>
}) {
  const { rubrik_slug } = await params
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="text-3xl font-bold underline">
          Mitra Rubrik - { rubrik_slug }
        </h1>
      </main>
    </div>
  );
}

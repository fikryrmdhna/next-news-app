import { fetchHomepage } from "@/lib/actions";
import ArticleCardTypeFour from "../components/sections/card/ArticleCardTypeFour";
import ArticleCardTypeOne from "../components/sections/card/ArticleCardTypeOne";
import ArticleCardTypeThree from "../components/sections/card/ArticleCardTypeThree";
import ArticleCardTypeTwo from "../components/sections/card/ArticleCardTypeTwo";

export default async function Home() {
  const data = await fetchHomepage({
    rubric_alias: 'berita-daerah,perspektif,jeda,', tags: 'ham,lingkungan,kebijakan-publik'
  })
  console.log('data', data)
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="text-3xl font-bold underline">
          Homepage
        </h1>
        <ArticleCardTypeOne />
        <ArticleCardTypeTwo />
        <ArticleCardTypeThree />
        <ArticleCardTypeFour />
      </main>
    </div>
  );
}

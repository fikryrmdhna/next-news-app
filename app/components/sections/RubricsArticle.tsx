import Link from "next/link";
import ArticleCardTypeTwo from "./card/ArticleCardTypeTwo";
import ArticleCardTypeThree from "./card/ArticleCardTypeThree";
import type { HomepageArticleByRubric } from "@/types/homepage";
import Button from "../ui/Button";

interface RubricsArticleProps {
  data: HomepageArticleByRubric;
}

export default function RubricsArticle({ data }: RubricsArticleProps) {
  if (!data || !data.articles || data.articles.length === 0) return null;

  const firstRubricData = data.articles.slice(0, 1);
  const restRubricData = data.articles.slice(1);

  return (
    <section className="mb-8 lg:mb-4">
      <Link href={`/rubrik/${data.rubric.alias}`}>
        <h2 className="text-2xl font-bold mb-2">
          {data.rubric.name}
        </h2>
      </Link>
      <p className="text-sm font-normal mb-6 text-[#616161]">
        {data.rubric.description}
      </p>
      {firstRubricData[0] && (
        <ArticleCardTypeTwo
          data={firstRubricData[0]}
          isTitleBold={true}
          classTitle="!text-lg lg:text-xl"
          classImage="!w-full !h-[180px] lg:!h-[160px]"
          isRubricArticleHeadline
        />
      )}
      <div className="mt-6">
        {restRubricData.map((kanal, index) => (
          <div key={kanal.article_uuid + index}>
            <div className="hidden lg:block">
              <ArticleCardTypeThree
                data={kanal}
                hideImageOnDesktop
              />
            </div>
            <div className="block lg:hidden mb-6">
              <ArticleCardTypeTwo
                data={kanal}
              />
            </div>
          </div>
        ))}
      </div>
      <Link href={`/rubrik/${data.rubric.alias}`}>
        <Button variant="secondary" className="w-full text-sm font-semibold">
          Telusuri {data.rubric.name}
        </Button>
      </Link>
    </section>
  );
}

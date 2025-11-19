import ArticleCardTypeFour from "./card/ArticleCardTypeFour";
import type { HomepageArticleByTag } from "@/types/homepage";

interface WidgetBrandProps {
  dataWidget: HomepageArticleByTag[];
}

export default function WidgetBrand({ dataWidget }: WidgetBrandProps) {
  if (!dataWidget || dataWidget.length === 0) return null;

  return (
    <>
      {dataWidget.map((item, index) => (
        <div key={`widget-brand-${index}`} className="bg-white p-4 rounded-lg shadow">
          <ArticleCardTypeFour data={item} />
        </div>
      ))}
    </>
  );
}

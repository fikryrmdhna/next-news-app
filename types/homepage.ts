export interface HomepagePartners {
  id: number;
  uuid: string;
  name: string;
  logo_url: string;
  avatar_url: string;
  partner_slug?: string;
  alias: string;
}

export interface HomepageLatestArticle {
  id: number;
  article_uuid: string;
  status: string;
  title_digital: string;
  canonical_url: string;
  description: string;
  feature_image: string;
  feature_image_caption: string;
  access: string;
  partner?: HomepagePartners;
}

export interface HomepageTag {
  id: number;
  caption: string;
  alias: string;
  description: string;
  meta_title: string;
  meta_keyword: string;
}

export interface HomepageArticleByRubric {
  rubric: HomepageRubric;
  articles: HomepageLatestArticle[];
}

export interface HomepageArticleByTag {
  tag: HomepageTag;
  articles: HomepageLatestArticle[];
}

export interface HomepageRubric {
  id: number;
  name: string;
  alias: string;
  description?: string;
}

export interface HomepageData {
  latest_articles: HomepageLatestArticle[];
  articles_by_tag: HomepageArticleByTag[];
  article_by_rubrics: HomepageArticleByRubric[];
  partners: HomepagePartners[];
  viral_tags: string[];
}

export interface HomepageApiResponse {
  status: number;
  message: string;
  data: HomepageData;
}

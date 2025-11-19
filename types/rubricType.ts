export interface Province {
  id?: number;
  name?: string;
  label?: string;
  value?: string;
}

export interface Rubric {
  id: number;
  name: string;
  alias: string;
}

interface Partner {
  id: number;
  uuid: string;
  name: string;
  logo_url?: string;
  avatar_url?: string;
  alias: string;
}

export interface Article {
  id: number;
  article_uuid: string;
  status: string;
  title_digital: string;
  canonical_url: string;
  description?: string;
  feature_image?: string;
  feature_image_caption?: string;
  access?: string;
  partner?: Partner;
  location?: string;
}

interface Tag {
  id: number;
  caption: string;
  alias: string;
  description?: string;
  meta_title?: string;
  meta_keyword?: string;
}

interface ArticleByTag {
  tag: Tag;
  articles: Article[];
}

export interface LatestArticlesResponse {
  data: {
    rubric: Rubric;
    provinces: Province[];
    latest_articles: Article[];
    articles_by_tag: ArticleByTag[];
  };
}

export interface WidgetBrandingData {
  title: string;
  image: string;
  logo: string;
  mitraName: string;
  buttonText: string;
  buttonLink: string;
}

export interface LatestNewsItem {
  title: string;
  image: string;
  partnerLogo: string;
  partnerName: string;
  partnerLink: string;
  label: string;
  href: string;
  location: string;
  access?: string;
}

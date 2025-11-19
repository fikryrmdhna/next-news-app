export interface PartnerSocialMedia {
  facebook?: string;
  instagram?: string;
  twitter?: string;
  tiktok?: string;
  telegram?: string;
}

export interface SubRubricData {
  id: number;
  name: string;
  alias: string;
  is_active: boolean;
  rubric_id?: number;
}

export interface PartnerData {
  id: number;
  uuid: string;
  name: string;
  alias: string;
  logo_url: string;
  avatar_url: string;
  partner_slug?: string;
  brand_color?: string;
  text_color?: string;
  vision?: string;
  social_media?: PartnerSocialMedia;
  code_of_ethics?: string;
}

export interface ArticleData {
  id: number;
  article_uuid: string;
  status: string;
  title_digital: string;
  canonical_url: string;
  description: string;
  feature_image: string;
  feature_image_caption: string;
  access: string;
  partner?: PartnerData;
}

export interface ArticleUserData {
  user_id: number;
  type: string;
  user: UserData[];
}

export interface UserData {
  id: number;
  name: string;
  foto?: string;
  biodata?: string;
}

export interface ArticleDetail {
  id: number;
  article_uuid: string;
  content: string;
  status: string;
  foot_note: string;
  upperdeck: string;
  summary: string[];
  title_digital: string;
  title_seo: string;
  kicker: string;
  canonical_url: string;
  description: string;
  feature_image: string;
  feature_image_caption: string;
  access: string;
  partner?: PartnerData;
  article_users?: ArticleUserData[];
  sub_rubric?: SubRubricData;
  article_relations?: string[];
  tag_article?: string[];
  published_at_label?: string;
}

export interface ArticleDetailData {
  article: ArticleDetail;
  related_articles: ArticleData[];
  latest_articles: ArticleData[];
  viral_tags: string[];
}

export interface ArticleDetailApiResponse {
  status: number;
  message: string;
  data: ArticleDetailData;
}

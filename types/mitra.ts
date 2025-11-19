export interface SocialMedia {
  facebook?: string;
  instagram?: string;
  twitter?: string;
  tiktok?: string;
  telegram?: string;
}

export interface RubricData {
  id: number;
  name: string;
  alias: string;
  url: string;
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
  partner: PartnerData;
}

export interface PartnerData {
  id: number;
  uuid: string;
  province_id: number;
  province_name: string;
  domain_id: number;
  name: string;
  alias: string;
  logo_url: string;
  avatar_url: string;
  brand_color: string;
  text_color: string;
  vision: string;
  notes: string;
  status: string;
  address: string;
  social_media: SocialMedia;
  code_of_ethics: string;
}

export interface HomepageMitraData {
  list: ArticleData[];
  partner: PartnerData;
  rubric: RubricData;
  total_entry: number;
  limit: number;
  total_page: number;
  is_has_next_page: boolean;
}

export interface HomepageMitraApiResponse {
  status: number;
  message: string;
  data: HomepageMitraData;
}

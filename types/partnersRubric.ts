export interface Partner {
  id: number;
  uuid: string;
  name: string;
  alias: string;
  logo_url: string;
  avatar_url: string;
}

export interface Article {
  id: number;
  article_uuid: string;
  status: string;
  title_digital: string;
  canonical_url: string;
  description: string;
  feature_image: string;
  feature_image_caption: string;
  access: string;
  partner: Partner;
}

export interface PartnersRubricData {
  list: Article[];
  partner: Partner;
  total_entry: number;
  limit: number;
  total_page: number;
  is_has_next_page: boolean;
}

export interface PartnersRubricApiResponse {
  status: number;
  message: string;
  data: PartnersRubricData;
}

export interface Partner {
  id: number
  uuid: string
  province_id: number
  name: string
  logo_url: string
  avatar_url: string
  alias: string
}

export interface Province {
  id: number
  name: string
}

export interface MediaPartnerResponse {
  status: number
  message: string
  data: {
    partners: Partner[]
    provinces: Province[]
    viral_tags: string[]
  }
}

export interface Labels {
  label: string
  value: string
}

import { apiServer } from "./api-server"
import type { HomepageApiResponse } from "@/types/homepage"
import type { ArticleDetailApiResponse } from "@/types/articleDetail"
import type { LatestArticlesResponse } from "@/types/rubricType"
import type { HomepageMitraApiResponse } from "@/types/mitra"
import type { PartnersRubricApiResponse } from "@/types/partnersRubric"
import type { MediaPartnerResponse } from "@/types/jaringanType"

const BASE_API_URL = process.env.BASE_API_URL

// Homepage
export async function fetchHomepage(params: { rubric_alias: string, tags: string }): Promise<HomepageApiResponse> {
  'use server'
  try {
    const data = await apiServer(`${BASE_API_URL}/home?rubric_alias=${params.rubric_alias}&tags=${params.tags}`)
    return data
  } catch (error) {
    throw new Error(`Failed to fetch homepage data: ${error}`)
  }
}

// Article Detail
export async function fetchArticleDetail(id: string, token?: string): Promise<ArticleDetailApiResponse> {
  'use server'
  try {
    const cleanToken = token?.replace('Bearer ', '') || ''
    const data = await apiServer(
      `${BASE_API_URL}/article/${id}/detail`,
      {
        method: 'GET',
        headers: {
          'X-REMP-Token': cleanToken,
          'X-Platform-Token': process.env.NEXT_SSO_TOKEN || '',
        },
      }
    )
    return data
  } catch (error) {
    throw new Error(`Failed to fetch article details: ${error}`)
  }
}

// Rubric by Alias
export async function fetchRubricByAlias(
  alias: string = '',
  tags: string | string[] = ''
): Promise<LatestArticlesResponse> {
  'use server'
  try {
    const tagsParam = Array.isArray(tags) ? tags.join(',') : tags
    const query = new URLSearchParams({
      rubric_alias: alias || '',
      ...(tagsParam && { tags: tagsParam })
    })
    
    const res = await apiServer(`${BASE_API_URL}/rubric?${query}`)
    return res as LatestArticlesResponse
  } catch (error) {
    console.warn('Failed to fetch rubric by alias:', error)
    throw new Error('Failed to fetch rubric by alias data')
  }
}

// Homepage Mitra
export async function fetchHomepageMitra(params: string = ''): Promise<HomepageMitraApiResponse> {
  'use server'
  try {
    const data = await apiServer(`${BASE_API_URL}/partner?limit=25&partner_alias=${params}&order=asc&sort=published_at`)
    return data
  } catch (error) {
    throw new Error(`Failed to fetch homepage mitra data: ${error}`)
  }
}

// Partners Rubric
export async function fetchPartnersRubric(params: { 
  partner_alias: string, 
  rubric_alias: string, 
  limit: number, 
  page: number 
}): Promise<PartnersRubricApiResponse> {
  'use server'
  try {
    const data = await apiServer(
      `${BASE_API_URL}/partner?partner_alias=${params.partner_alias}&rubric_alias=${params.rubric_alias}&limit=${params.limit}&page=${params.page}`
    )
    return data
  } catch (error) {
    throw new Error(`Failed to fetch partner rubric data: ${error}`)
  }
}

// Media Partners (Jaringan)
export async function fetchMediaPartners(): Promise<MediaPartnerResponse> {
  'use server'
  try {
    const data = await apiServer(`${BASE_API_URL}/media-partner`)
    return data
  } catch (error) {
    throw new Error(`Failed to fetch media partners: ${error}`)
  }
}

// Media Partners by Province
export async function fetchMediaPartnersByProvince(provinceId: number): Promise<MediaPartnerResponse> {
  'use server'
  try {
    const data = await apiServer(`${BASE_API_URL}/media-partner?province_id=${provinceId}`)
    return data
  } catch (error) {
    throw new Error(`Failed to fetch media partners by province: ${error}`)
  }
}
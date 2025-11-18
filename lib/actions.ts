import { apiServer } from "./api-server"

export async function fetchHomepage(params: { rubric_alias: string, tags: string }) {
  'use server'
  console.log('params', params)
  try {
    const data = await apiServer(`https://staging-api.tempo.co/sajian/teras/home?rubric_alias=${params.rubric_alias}&tags=${params.tags}`)
    return data
  } catch (error) {
    throw new Error(`Failed to fetch homepage data: ${error}`)
  }
}
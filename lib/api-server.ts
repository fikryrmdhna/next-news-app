import { cookies, headers } from 'next/headers'
import { generateUnixTimestamp } from '@/utils/format/formatDate'
import { generateSha256 } from '@/utils/general/generateSha'

export const apiServer = async (url: string, options: RequestInit = {}) => {
  const cookieStore = await cookies()
  const headersList = await headers()
  
  const userAuth = cookieStore.get('n_token')?.value
  const userAgent = headersList.get('user-agent') || ''
  const isMobile = /Mobile|iP(?:hone|od|ad)|Android|BlackBerry|IEMobile|Silk/.test(userAgent)
  
  const apiKey = process.env.NEXT_API_KEY || '302fd250-bc15-4754-bb2b-65c490c75da8'
  const secretKey = process.env.NEXT_SECRET_KEY || ''
  const xRequestTime = generateUnixTimestamp()
  const xTempoToken = generateSha256(apiKey + secretKey + xRequestTime)

  const requestHeaders: Record<string, string> = {
    ...Object.fromEntries(new Headers(options.headers || {})),
    'X-Platform-Application': isMobile ? 'mobile-web' : 'desktop',
    'Authorization': `Bearer ${userAuth || ''}`,
    'X-Api-Key': apiKey,
    'X-Request-Time': xRequestTime.toString(),
    'X-Tempo-Token': xTempoToken,
  }

  // Debug logging
  console.log('=== API Request Debug ===')
  console.log('URL:', url)
  console.log('API Key:', apiKey)
  console.log('Secret Key:', secretKey ? 'SET' : 'EMPTY')
  console.log('Request Time:', xRequestTime)
  console.log('Token String:', apiKey + secretKey + xRequestTime)
  console.log('X-Tempo-Token:', xTempoToken)
  console.log('Headers:', requestHeaders)

  const response = await fetch(url, {
    ...options,
    headers: requestHeaders,
    signal: options.signal || AbortSignal.timeout(15000),
  })

  console.log('Response Status:', response.status, response.statusText)

  if (!response.ok) {
    const errorText = await response.text()
    console.error('API Error Response:', errorText)
    throw new Error(`API Error: ${response.statusText}`)
  }

  return response.json()
}
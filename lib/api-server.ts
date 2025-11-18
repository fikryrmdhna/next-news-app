import { cookies, headers } from 'next/headers'

export const apiServer = async (url: string, options: RequestInit = {}) => {
  const cookieStore = await cookies()
  const headersList = await headers()
  
  const userAuth = cookieStore.get('n_token')?.value
  const userAgent = headersList.get('user-agent') || ''
  const isMobile = /Mobile|iP(?:hone|od|ad)|Android|BlackBerry|IEMobile|Silk/.test(userAgent)
  const terasApiKey = '302fd250-bc15-4754-bb2b-65c490c75da8'

  const requestHeaders: Record<string, string> = {
    ...Object.fromEntries(new Headers(options.headers || {})),
    'X-Platform-Application': isMobile ? 'mobile-web' : 'desktop',
    'Authorization': `Bearer ${userAuth}`,
    'X-Api-Key': terasApiKey || '',
  }

  const response = await fetch(url, {
    ...options,
    headers: requestHeaders,
    signal: options.signal || AbortSignal.timeout(15000),
  })

  console.log('requestHeaders', requestHeaders)

  if (!response.ok) {
    throw new Error(`API Error: ${response.statusText}`)
  }

  return response.json()
}
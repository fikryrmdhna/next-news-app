import Cookies from 'js-cookie'

const getIsMobile = () => {
  if (typeof window === 'undefined') return false
  return /Mobile|iP(?:hone|od|ad)|Android|BlackBerry|IEMobile|Silk/.test(navigator.userAgent)
}

export const api = async (url: string, options: RequestInit = {}) => {
  const userAuth = Cookies.get('n_token')
  const apiKey = process.env.NEXT_PUBLIC_BASE_API_KEY

  const headers: Record<string, string> = {
    ...Object.fromEntries(new Headers(options.headers || {})),
    'X-Platform-Application': getIsMobile() ? 'mobile-web' : 'desktop',
    'Authorization': `Bearer ${userAuth || ''}`,
    'X-Api-Key': apiKey || '',
  }

  const response = await fetch(url, {
    ...options,
    headers,
    signal: options.signal || AbortSignal.timeout(15000),
  })

  if (!response.ok) {
    throw new Error(`API Error: ${response.statusText}`)
  }

  return response.json()
}

// With retry logic
export const apiWithRetry = async (
  url: string, 
  options: RequestInit = {}, 
  retries = 3
): Promise<any> => {
  try {
    return await api(url, options)
  } catch (error) {
    if (retries > 0) {
      return apiWithRetry(url, options, retries - 1)
    }
    throw error
  }
}
export function generateSha256(string: string = ''): string {
  if (!string) return string;
  
  // Use Node.js crypto (server-side only)
  if (typeof window === 'undefined') {
    const crypto = require('crypto');
    return crypto.createHash('sha256').update(string).digest('hex');
  }
  
  // Fallback for client-side (though this should only run server-side)
  return string;
}

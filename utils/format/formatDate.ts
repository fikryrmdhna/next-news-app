export function generateUnixTimestamp(): number {
  return Math.floor(Date.now() / 1000);
}

export function formatTrimUTC(date: string): string {
  let dateString = date;
  if (dateString.includes('+0000 UTC')) {
    dateString = dateString.replace(' +0000 UTC', '').trim();
  }
  if (dateString.includes('+0700')) {
    dateString = dateString.replace(' +0700 WIB', '').trim();
  }
  if (dateString.includes('+0707')) {
    dateString = dateString.replace(' +0707 LMT', '').trim();
  }
  return dateString;
}

export function onPublishedDate(date: string): string | null {
  if (!date) return null;
  
  try {
    const trimmedDate = formatTrimUTC(date);
    const parsedDate = new Date(trimmedDate);
    
    if (isNaN(parsedDate.getTime())) {
      return 'Invalid Date';
    }
    
    return new Intl.DateTimeFormat('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(parsedDate).replace(',', ' |');
  } catch (error) {
    console.error('Error formatting date:', error);
    return null;
  }
}

export function onPublishedDateWithoutTime(date: string): string | null {
  if (!date) return null;
  
  try {
    const trimmedDate = formatTrimUTC(date);
    const parsedDate = new Date(trimmedDate);
    
    if (isNaN(parsedDate.getTime())) {
      return 'Invalid Date';
    }
    
    return new Intl.DateTimeFormat('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(parsedDate);
  } catch (error) {
    console.error('Error formatting date:', error);
    return null;
  }
}

export function dateWithTimeZone(dateStr: string | undefined): string | null {
  if (!dateStr) {
    console.warn('Invalid date string provided:', dateStr);
    return null;
  }

  const date = `${dateStr.replace(' ', 'T')}+07:00`;
  return date;
}

export function toFullStringDate(dateStr: string | undefined): string | null {
  if (!dateStr) {
    return null;
  }

  const date = new Date(dateStr);

  if (Number.isNaN(date.getTime())) {
    console.warn('Invalid date value for:', dateStr);
    return null;
  }

  return new Intl.DateTimeFormat('id-ID', {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Asia/Jakarta',
  }).format(date) + ' WIB';
}

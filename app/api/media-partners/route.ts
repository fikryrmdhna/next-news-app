import { NextRequest, NextResponse } from 'next/server';
import { fetchMediaPartners, fetchMediaPartnersByProvince } from '@/lib/actions';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const provinceId = searchParams.get('province_id');

    let data;
    if (provinceId) {
      data = await fetchMediaPartnersByProvince(Number(provinceId));
    } else {
      data = await fetchMediaPartners();
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch media partners' },
      { status: 500 }
    );
  }
}

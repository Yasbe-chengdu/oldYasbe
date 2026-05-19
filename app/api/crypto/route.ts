import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const pricingPayload = await fetch('https://api.beeznis.com/api/crypto/pricing', {
      headers: {
        Accept: 'application/json',
      },
      cache: 'no-store',
    }).then(r => r.json());

    const cryptoData = Array.isArray(pricingPayload?.data) ? pricingPayload.data : [];

    const result = cryptoData.map((coin: any) => ({
      code: coin.coinCode,
      name: coin.coinName,
      price: Number(coin.price),
      iconUrlName: coin.iconUrlName,
      networkFees: coin.networkFees ?? [],
    }));

    return NextResponse.json(result);
  } catch (error) {
    console.error('Error fetching crypto exchange rate:', error);
    return NextResponse.json({ error: 'Error fetching crypto exchange rate' }, { status: 500 });
  }
}

export async function getExchangeRateHistory(base = 'USD', term = 'CAD', period = 'week') {
  const url = 'https://api.rates-history-service.prd.aws.ofx.com/rate-history/api/1';
  const body = {
    method: 'spotRateHistory',
    data: { base, term, period },
  };
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(body),
    });
    if (!response.ok) {
      const errorText = await response.text();
      console.error('API Error Response:', errorText);
      throw new Error(`HTTP error! status: ${response.status}, body: ${errorText}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error fetching exchange rate:', error);
  }
}

export async function getCryptoExchangeRate(base: string, term: string) {
  const url = `/api/crypto?base=${base}&term=${term}`;
  try {
    const response = await fetch(url, {
      method: 'GET',
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    console.log('response========>2', response);
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error('Error fetching crypto exchange rate:', error);
    return null;
  }
}

export function calculateConversion(amount: number, rate: number) {
  if (!rate || isNaN(amount) || rate <= 0) {
    console.log('Invalid rate or amount');
    return 0;
  }
  let converted = 0;
  converted = amount * rate;
  return converted;
}

export function format2digits(value: number): string {
  if (!isFinite(value) || value === 0) return '0';
  const absoluteValue = Math.abs(value);
  if (absoluteValue >= 1) {
    const fixed = value.toFixed(2);
    return fixed.replace(/\.0+$/, '').replace(/\.$/, '');
  }
  const exponent = Math.floor(Math.log10(absoluteValue));
  const decimals = Math.max(0, 1 - exponent);
  const fixed = value.toFixed(decimals);
  return fixed.replace(/0+$/, '').replace(/\.$/, '');
}

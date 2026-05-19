'use client';
import React, { useState, useEffect } from 'react';
import { CurrencyInput } from './CurrencyInput';
import currenciesData from '@/public/currencies.json';
import { Clock } from 'lucide-react';
import { calculateConversion, format2digits, getExchangeRateHistory } from '@/lib/exchange-rate';
import { useParams } from 'next/navigation';
import { useTranslation } from '@/i18n/client';

const getCurrencyFlag = (currency: any) => {
  if (currency.symbol) {
    return <span className={`fi fi-${currency.symbol.toLowerCase()}`} style={{ fontSize: '24px' }} />;
  }

  if (currency.logo) {
    return (
      <span className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center text-xs font-bold">
        <img src={currency.logo} alt={currency.name} className="w-6 h-6 rounded-full" />
      </span>
    );
  }

  return (
    <span className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center text-xs font-bold">
      {currency.code}
    </span>
  );
};

const withCurrencyFlag = (currency: any) => {
  return {
    ...currency,
    flag: getCurrencyFlag(currency),
  };
};

const currencies = currenciesData.map(withCurrencyFlag);

export const ExchangeWidget: React.FC = () => {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, 'home');
  const [usdt, setUSDT] = useState(0);
  const [allCurrencies, setAllCurrencies] = useState(currencies);
  const usdCurrency = allCurrencies.find(c => c.code === 'BTC') || allCurrencies[0];
  const eurCurrency = allCurrencies.find(c => c.code === 'USD') || allCurrencies[1];
  const [fromCurrency, setFromCurrency] = useState(usdCurrency);
  const [toCurrency, setToCurrency] = useState(eurCurrency);
  const [fromAmount, setFromAmount] = useState(format2digits(1));
  const [toAmount, setToAmount] = useState(format2digits(1));
  const [exchangeRate, setExchangeRate] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const fetchExchangeRate = async (from: any, to: any) => {
    if (from.code === to.code) {
      setExchangeRate(1);
      return;
    }
    setIsLoading(true);
    try {
      let effectiveFrom = allCurrencies.find(c => c.code === from.code) || from;
      let effectiveTo = allCurrencies.find(c => c.code === to.code) || to;

      if (!usdt) {
        const response = await fetch('https://api.beeznis.com/api/crypto/pricing');
        const pricingPayload = await response.json();
        const cryptoData = Array.isArray(pricingPayload?.data)
          ? pricingPayload.data
          : Array.isArray(pricingPayload)
            ? pricingPayload
            : [];
        const newCurrencies = [...currencies];
        for (const crypto of cryptoData) {
          const code = crypto.coinCode ?? crypto.code;
          const name = crypto.coinName ?? crypto.name ?? code;
          const price = Number(crypto.price);

          if (!code || Number.isNaN(price)) {
            continue;
          }

          const cIndex: number = newCurrencies.findIndex(cc => cc.code === code);
          if (cIndex === -1) {
            newCurrencies.push(
              withCurrencyFlag({
                code,
                name,
                price,
                logo: crypto.logo,
              }),
            );
          } else {
            newCurrencies[cIndex] = withCurrencyFlag({
              ...newCurrencies[cIndex],
              name,
              price,
              logo: newCurrencies[cIndex].logo ?? crypto.logo,
            });
          }

          if (code === 'USDT') {
            setUSDT(price);
          }
        }
        setAllCurrencies(newCurrencies);
        effectiveFrom = newCurrencies.find(c => c.code === from.code) || from;
        effectiveTo = newCurrencies.find(c => c.code === to.code) || to;
      }
      if (!effectiveFrom?.price && !effectiveTo?.price) {
        const historyData = await getExchangeRateHistory(effectiveFrom.code, effectiveTo.code, 'day');
        const rate = historyData?.data?.CurrentInterbankRate;
        if (rate !== null && rate !== undefined) {
          setExchangeRate(rate);
          setLastUpdated(new Date(historyData.data.fetchTime));
        } else {
          console.warn('Could not fetch exchange rate for', effectiveFrom.code, 'to', effectiveTo.code);
          setExchangeRate(1);
        }
        return;
      }
      if (effectiveFrom?.price && !effectiveTo?.price) {
        const historyData = await getExchangeRateHistory('USD', effectiveTo.code, 'day');
        const rate = historyData?.data?.CurrentInterbankRate;
        setExchangeRate(effectiveFrom.price * rate);
        setLastUpdated(new Date(historyData.data.fetchTime));
      }
      if (!effectiveFrom?.price && effectiveTo?.price) {
        const historyData = await getExchangeRateHistory('USD', effectiveFrom.code, 'day');
        const rate = historyData?.data?.CurrentInterbankRate;
        setExchangeRate(rate / effectiveTo.price);
        setLastUpdated(new Date(historyData.data.fetchTime));
      }
      if (effectiveFrom?.price && effectiveTo?.price) {
        setExchangeRate(effectiveFrom?.price / effectiveTo?.price);
        setLastUpdated(new Date());
      }
    } catch (error) {
      setExchangeRate(1);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchExchangeRate(fromCurrency, toCurrency);
  }, [fromCurrency, toCurrency]);

  useEffect(() => {
    if (fromAmount && !isNaN(parseFloat(fromAmount))) {
      const converted = calculateConversion(parseFloat(fromAmount), exchangeRate);
      setToAmount(format2digits(converted));
    } else {
      setToAmount('0');
    }
  }, [fromAmount, exchangeRate, fromCurrency.code, toCurrency.code]);

  const handleFromAmountChange = (value: string) => {
    setFromAmount(value);
  };

  const handleFromCurrencyChange = (currency: any) => {
    setFromCurrency(currency);
  };

  const handleToCurrencyChange = (currency: any) => {
    setToCurrency(currency);
  };

  const formatLastUpdated = () => {
    if (!lastUpdated) return 'Never';
    const now = new Date();
    const diffInMinutes = Math.floor((now.getTime() - lastUpdated.getTime()) / (1000 * 60));
    if (diffInMinutes < 1) return 'Just now';
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) return `${diffInHours}h ago`;
    const diffInDays = Math.floor(diffInHours / 24);
    return `${diffInDays}d ago`;
  };

  return (
    <section
      className="w-[600px] h-[653px] shrink-0 relative bg-[#1C1C1C] rounded-2xl max-md:w-full max-md:max-w-[500px] max-md:h-auto max-sm:w-full max-sm:h-auto"
      aria-label="Currency exchange widget"
    >
      <div className="absolute lg:top-[97px] lg:w-[600px] lg:h-[557px]">
        <svg
          width="600"
          height="417"
          viewBox="0 0 600 417"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <g filter="url(#filter0_f_bg_blur)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M554.473 679.156C547.485 712.084 498.944 724.267 458.344 731.986C423.395 738.631 380.429 713.379 344.93 718.997C289.149 727.825 254.735 801.879 199.22 772.994C143.638 744.074 208.58 678.838 179.05 632.687C153.27 592.398 72.2298 582.52 50.9721 541.309C29.1642 499.032 34.2941 447.338 70.5921 422.429C107.261 397.266 174.282 420.871 227.733 420.011C269.232 419.342 306.899 410.586 349.673 417.935C397.381 426.13 456.707 430.77 486.83 464.521C517.946 499.384 479.068 537.773 491.315 576.633C502.696 612.747 561.59 645.623 554.473 679.156Z"
              fill="#FFCA00"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_bg_blur"
              x="-371.82"
              y="0.972015"
              width="1336.71"
              height="1188.49"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="204.909" result="effect1_foregroundBlur" />
            </filter>
          </defs>
        </svg>
      </div>

      <div className="lg:absolute lg:w-[32rem] flex flex-col justify-center items-center gap-6 lg:h-[334px] box-border bg-white p-8 rounded-2xl left-10 top-40 max-md:relative max-md:m-10 max-md:left-0 max-md:top-0  max-sm:m-5 max-sm:p-6 ">
        <div className="flex flex-col items-center gap-3">
          <div className="flex justify-center items-center gap-2">
            <Clock className="w-6 h-6 text-[#1C1C1C]" />
            <span className="text-[#1C1C1C] text-base font-semibold leading-[25.6px] tracking-[-0.32px]">
              {t('lastUpdated')} {formatLastUpdated()}
            </span>
          </div>
          <div className="inline-flex h-12 justify-center items-center bg-[#FFF4CC] px-5 py-1 rounded-[60px] max-sm:px-3 max-sm:py-1 max-sm:inline-flex">
            <span className="text-[#1C1C1C] text-base font-medium leading-[25.6px] tracking-[-0.32px] whitespace-nowrap">
              {isLoading ? 'Loading...' : `1 ${fromCurrency?.code} = ${format2digits(exchangeRate)} ${toCurrency.code}`}
            </span>
          </div>
        </div>

        <form
          className="flex flex-col items-start gap-4 w-full max-sm:gap-3 max-sm:items-stretch"
          onSubmit={e => e.preventDefault()}
        >
          <CurrencyInput
            label={t('from')}
            value={fromAmount}
            currency={fromCurrency}
            onValueChange={handleFromAmountChange}
            onCurrencyChange={handleFromCurrencyChange}
            currencies={allCurrencies}
          />

          <CurrencyInput
            label={t('to')}
            value={toAmount}
            currency={toCurrency}
            onValueChange={setToAmount}
            onCurrencyChange={handleToCurrencyChange}
            currencies={allCurrencies}
            readOnly
          />
        </form>
      </div>
    </section>
  );
};

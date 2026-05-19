'use client';

import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';

interface CountryMapProps {
  className?: string;
  activeGroup: 'collection' | 'payout' | null;
}

const CountryMapComponent = dynamic(() => Promise.resolve(CountryMapInner), {
  ssr: false,
  loading: () => (
    <div className="w-[60vh] h-[25vh] md:w-[1000px] md:h-[700px] bg-gray-200 animate-pulse rounded-lg flex items-center justify-center">
      <div className="text-gray-500">Loading map...</div>
    </div>
  ),
});

function CountryMapInner({ activeGroup = 'collection' }: CountryMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<any>(null);
  const geojsonLayer = useRef<any>(null);
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);
  const [L, setL] = useState<any>(null);

  const DEFAULT_STYLE = {
    fillColor: '#d1d9dc',
    weight: 1,
    color: '#000',
    opacity: 0.2,
    fillOpacity: 0.3,
  };

  const SELECTED_STYLE = {
    fillColor: '#FFCA00',
    weight: 2,
    opacity: 1,
    color: 'hsl(var(--border))',
    fillOpacity: 0.9,
  };

  const HOVER_STYLE = {
    fillColor: '#5a5b60',
    weight: 2,
    opacity: 1,
    color: 'hsl(var(--border))',
    fillOpacity: 0.9,
  };

  useEffect(() => {
    const loadLeaflet = async () => {
      if (typeof window !== 'undefined') {
        const leaflet = await import('leaflet');

        if (!document.querySelector('link[href*="leaflet.css"]')) {
          const link = document.createElement('link');
          link.rel = 'stylesheet';
          link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
          link.integrity = 'sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=';
          link.crossOrigin = '';
          document.head.appendChild(link);
        }

        setL(leaflet.default);
        setIsClient(true);
      }
    };
    loadLeaflet();
  }, []);

  const geoJSONloc = '/countries.geojson';

  const getSelectedCountries = (group: 'collection' | 'payout' | null): string[] => {
    if (group === 'collection') {
      return [
        'Andorra',
        'Australia',
        'Austria',
        'Belgium',
        'Canada',
        'Croatia',
        'Cyprus',
        'Estonia',
        'Finland',
        'France',
        'Germany',
        'Greece',
        'Hong Kong S.A.R.',
        'Ireland',
        'Italy',
        'Kosovo',
        'Latvia',
        'Lithuania',
        'Luxembourg',
        'Malta',
        'Monaco',
        'Montenegro',
        'Netherlands',
        'Portugal',
        'San Marino',
        'Singapore',
        'Slovakia',
        'Slovenia',
        'Spain',
        'Switzerland',
        'United Kingdom',
        'United States of America',
        'Vatican',
      ];
    } else if (group === 'payout') {
      return [
        'Andorra',
        'Australia',
        'Austria',
        'Belgium',
        'Canada',
        'Croatia',
        'Cyprus',
        'Estonia',
        'Finland',
        'France',
        'Germany',
        'Greece',
        'Hong Kong S.A.R.',
        'Ireland',
        'Italy',
        'Kosovo',
        'Latvia',
        'Lithuania',
        'Luxembourg',
        'China',
        'Malta',
        'Monaco',
        'Montenegro',
        'Netherlands',
        'New Zealand',
        'Portugal',
        'San Marino',
        'Singapore',
        'Slovakia',
        'Slovenia',
        'Spain',
        'Switzerland',
        'Taiwan',
        'United Kingdom',
        'United States of America',
        'Vatican',
      ];
    }
    return [];
  };

  const getMapSettings = () => {
    if (typeof window === 'undefined') return { zoom: 2, center: [40, 0] };
    const isMobile = window.innerWidth < 768;
    return {
      zoom: isMobile ? 0.35 : 2,
      center: [40, 0] as [number, number],
      minZoom: isMobile ? 0.35 : 1,
      maxZoom: isMobile ? 2 : 5,
    };
  };

  const updateMapView = () => {
    if (!mapInstance.current || !L) return;
    const settings = getMapSettings();
    mapInstance.current.setView(settings.center, settings.zoom);
    mapInstance.current.setMinZoom(settings.minZoom);
    mapInstance.current.setMaxZoom(settings.maxZoom);
  };

  const getCountryStyle = (countryName: string) => {
    const isHovered = hoveredCountry === countryName;
    if (activeGroup === null) {
      return isHovered ? HOVER_STYLE : DEFAULT_STYLE;
    }
    const selectedCountries = getSelectedCountries(activeGroup);
    const isSelected = selectedCountries.includes(countryName);
    if (isHovered) {
      return HOVER_STYLE;
    } else if (isSelected) {
      return SELECTED_STYLE;
    } else {
      return DEFAULT_STYLE;
    }
  };

  const refreshAllStyles = () => {
    if (!geojsonLayer.current) return;
    geojsonLayer.current.eachLayer((layer: any) => {
      const pathLayer = layer;
      const feature = layer.feature;
      const countryName = feature?.properties?.name || feature?.properties?.NAME;
      if (countryName) {
        const style = getCountryStyle(countryName);
        pathLayer.setStyle(style);
      }
    });
  };

  useEffect(() => {
    if (!mapRef.current || !L || !isClient) return;
    const settings = getMapSettings();
    mapInstance.current = L.map(mapRef.current, {
      center: settings.center,
      zoom: settings.zoom,
      minZoom: settings.minZoom,
      maxZoom: settings.maxZoom,
      zoomControl: false,
      scrollWheelZoom: false,
      doubleClickZoom: false,
      boxZoom: false,
      dragging: false,
      attributionControl: false,
    });

    loadCountries();

    const style = document.createElement('style');
    style.textContent = `
      .leaflet-container {
        background: hsl(var(--map-ocean));
        border-radius: 0.5rem;
      }
    `;
    document.head.appendChild(style);

    const handleResize = () => {
      clearTimeout((window as any).resizeTimeout);
      (window as any).resizeTimeout = setTimeout(() => {
        updateMapView();
      }, 100);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      mapInstance.current?.remove();
      document.head.removeChild(style);
    };
  }, [L, isClient]);

  const loadCountries = async () => {
    if (!L) return;

    try {
      const response = await fetch(geoJSONloc);
      const data = await response.json();

      geojsonLayer.current = L.geoJSON(data, {
        style: () => DEFAULT_STYLE,
        onEachFeature: (feature: any, layer: any) => {
          const countryName = feature.properties.name || feature.properties.NAME;

          layer.on({
            mouseover: () => {
              setHoveredCountry(countryName);
            },
            mouseout: () => {
              setHoveredCountry(null);
            },
          });
        },
      });

      if (mapInstance.current && geojsonLayer.current) {
        geojsonLayer.current.addTo(mapInstance.current);
        refreshAllStyles();
      }
    } catch (error) {
      console.error('Error loading countries:', error);
    }
  };

  useEffect(() => {
    refreshAllStyles();
  }, [activeGroup, hoveredCountry]);

  if (!isClient) {
    return (
      <div className="w-[60vh] h-[25vh] md:w-[1000px] md:h-[700px] bg-gray-200 animate-pulse rounded-lg flex items-center justify-center">
        <div className="text-gray-500">Loading map...</div>
      </div>
    );
  }

  return (
    <div>
      <div
        ref={mapRef}
        className="w-[60vh] h-[25vh] md:w-[1000px] md:h-[700px] bg-inherit mx-auto md:ml-0 -ml-[70px] max-sm:w-[360px] max-sm:h-[220px] max-sm:ml-0"
      />
    </div>
  );
}

export const CountryMap = (props: CountryMapProps) => {
  return <CountryMapComponent {...props} />;
};

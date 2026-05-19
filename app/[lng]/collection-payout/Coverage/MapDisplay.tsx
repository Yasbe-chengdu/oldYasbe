import React from 'react';

interface MapDisplayProps {
  activeTab: 'collection' | 'payout';
}

export const MapDisplay: React.FC<MapDisplayProps> = ({ activeTab }) => {
  return (
    <div className="w-full relative">
      <img
        src="/images/coverage-map.png"
        alt={`Global ${activeTab} coverage map`}
        className="w-full max-w-screen-xl h-auto relative object-contain"
        loading="lazy"
      />
      <div className="sr-only">
        Interactive world map showing {activeTab} coverage across different regions and countries.
      </div>
    </div>
  );
};

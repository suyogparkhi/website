import React from 'react';

const PositionCard = ({ position }: any) => {
  return (
    <div className="bg-gray-900 p-4 rounded-lg w-[100%]">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 rounded-full bg-orange-500"></div>
          <span className="text-gray-200">{position.symbol}</span>
          <span className="text-gray-400 text-sm">{position.shortPercent} short</span>
        </div>
        <button className="text-blue-400 text-sm">Share</button>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-4">
        <div>
          <div className="text-gray-400 text-sm mb-1">Value</div>
          <div className="text-gray-200">${position.value}</div>
          <div className={`text-sm ${position.profitPercent >= 0 ? 'text-green-500' : 'text-red-500'}`}>
            {position.profitAmount >= 0 ? '+' : ''}{position.profitAmount} ({position.profitPercent}%)
          </div>
        </div>
        <div>
          <div className="text-gray-400 text-sm mb-1">Size</div>
          <div className="text-gray-200">${position.size}</div>
          <div className="text-gray-400 text-sm">{position.cryptoAmount} {position.symbol.split('-')[0]}</div>
        </div>
        <div>
          <div className="text-gray-400 text-sm mb-1">Collateral</div>
          <div className="text-gray-200">${position.collateral}</div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-4">
        <div>
          <div className="text-gray-400 text-sm mb-1">Entry Price</div>
          <div className="text-gray-200">${position.entryPrice.toLocaleString()}</div>
        </div>
        <div>
          <div className="text-gray-400 text-sm mb-1">Mark Price</div>
          <div className="text-gray-200">{position.markPrice.toLocaleString()}</div>
        </div>
        <div>
          <div className="text-gray-400 text-sm mb-1">Liq. Price</div>
          <div className="text-yellow-400">${position.liqPrice.toLocaleString()}</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <button className="bg-gray-800 text-gray-200 py-2 px-4 rounded hover:bg-gray-700">
          Take Profit
        </button>
        <button className="bg-gray-800 text-gray-200 py-2 px-4 rounded hover:bg-gray-700">
          Stop Loss
        </button>
        {/* <button className="bg-gray-800 text-gray-200 py-2 px-4 rounded hover:bg-gray-700">
          Market Close
        </button> */}
      </div>
    </div>
  );
};

const PositionsGrid = () => {
  const positions = [
    {
      symbol: "WBTC-PERP",
      shortPercent: "-100.02%",
      value: "3.74",
      profitAmount: "1.17",
      profitPercent: "40.83",
      size: "286.35",
      cryptoAmount: "0.006638",
      collateral: "2.86",
      entryPrice: 43134.92,
      markPrice: 42966.98,
      liqPrice: 43436.17
    },
    {
      symbol: "ETH-PERP",
      shortPercent: "-85.5%",
      value: "5.12",
      profitAmount: "-0.89",
      profitPercent: "-14.8",
      size: "320.45",
      cryptoAmount: "0.12445",
      collateral: "3.25",
      entryPrice: 2543.21,
      markPrice: 2612.34,
      liqPrice: 2789.90
    },
    {
      symbol: "SOL-PERP",
      shortPercent: "-95.3%",
      value: "2.98",
      profitAmount: "0.45",
      profitPercent: "15.2",
      size: "156.78",
      cryptoAmount: "1.8934",
      collateral: "1.95",
      entryPrice: 89.45,
      markPrice: 87.23,
      liqPrice: 94.56
    },
    {
      symbol: "AVAX-PERP",
      shortPercent: "-110.5%",
      value: "4.23",
      profitAmount: "0.78",
      profitPercent: "22.6",
      size: "198.34",
      cryptoAmount: "0.8756",
      collateral: "2.45",
      entryPrice: 34.56,
      markPrice: 32.89,
      liqPrice: 36.78
    },
    {
      symbol: "MATIC-PERP",
      shortPercent: "-92.8%",
      value: "1.89",
      profitAmount: "-0.34",
      profitPercent: "-15.2",
      size: "145.67",
      cryptoAmount: "12.4567",
      collateral: "1.56",
      entryPrice: 1.23,
      markPrice: 1.28,
      liqPrice: 1.34
    },
    
  ];

  return (
    <div className="bg-black min-h-screen p-2">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-8xl mx-auto">
        {positions.map((position, index) => (
          <PositionCard key={index} position={position} />
        ))}
      </div>
    </div>
  );
};

export default PositionsGrid;
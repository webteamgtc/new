import React from 'react';

const MarketOverViewNew = () => {
  const headers = [
    "Instrument",
    "Mon, 20 Jan, 2025",
    "Fri, 24 Jan, 2025",
    "Mon, 27 Jan, 2025",
    "Tues, 28 Jan, 20254",
    "Wed, 29 Jan, 2025",
    "Thurs, 30 Jan, 2025",
    "Fri, 31 Jan, 2025",
    "Mon, 3 Feb, 2025",
    ];

  const rows = [
    {
      instrument: "FX",
      data: [
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
      ],
    },
    {
      instrument: "Metals",
      data: [
        "Early Close 21:15",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
      ],
    },
    {
      instrument: "OIL/Energies (BRNUSD)",
      data: [
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
      ],
    },
    {
      instrument: "OIL/Energies (WTIUSD)",
      data: [
        "Early Close 21:30",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
      ],
    },
    {
      instrument: "OIL/Energies (NGCUSD)",
      data: [
        "Early Close 21:30",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
      ],
    },
    {
      instrument: "Indices - AUS200c",
      data: [
        "Early Close 23:00",
        "Early Close 23:00",
        "Late Open 08:10",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
      ],
    },
    {
      instrument: "Indices - CN50c",
      data: [
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
      ],
    },
    {
      instrument: "Indices - EU50c",
      data: [
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
      ],
    },
    {
      instrument: "Indices - FRA40c",
      data: [
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
      ],
    },
    {
      instrument: "Indices - GER40c",
      data: [
        "Early Closed at 23:00",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
      ],
    },
    {
      instrument: "Indices - HK50c",
      data: [
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Early Close 06:00",
        "Closed",
        "Closed",
        "Closed",
        "Normal Trading Hours",
      ],
    },
    {
      instrument: "Indices - JPN225c",
      data: [
        "Early Closed at 20:00",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
      ],
    },
    {
      instrument: "Indices - SPA35c",
      data: [
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
      ],
    },
    {
      instrument: "Indices - UK100c",
      data: [
        "Early Close 23:00",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
      ],
    },
    {
      instrument: "Indices - US30c",
      data: [
        "Early Close 20:00",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
      ],
    },
    {
      instrument: "Indices - US500c",
      data: [
        "Early Close 20:00",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
      ],
    },
    {
      instrument: "Indices - USTECHC",
      data: [
        "Early Close 20:00",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
      ],
    },
    {
      instrument: "Stocks (SIX)",
      data: [
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
      ],
    },
    {
      instrument: "Stocks BM",
      data: [
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
      ],
    },
    {
      instrument: "Stocks (EURONEXT)",
      data: [
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
      ],
    },
    
    {
      instrument: "Stocks (LSE)",
      data: [
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
      ],
    },
    {
      instrument: "Stocks (XETRA)",
      data: [
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
      ],
    },
    {
      instrument: "EU Shares:Exchanges - SIX",
      data: [
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
         ],
    },
    {
      instrument: "EU Shares:Exchanges - BM",
      data: [
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
      ],
    },
    {
      instrument: "EU Shares:Exchanges - EURONEXT",
      data: [
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
      ],
    },
    {
      instrument: "EU Shares:Exchanges - LSE",
      data: [
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
      ],
    },
    {
      instrument: "EU Shares:Exchanges - XETRA",
      data: [
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
      ],
    },
 
    {
      instrument: "NYSE (US Shares:Exchanges)",
      data: [
        "Closed",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
      ],
    },
    {
      instrument: "NDAQ (US Shares:Exchanges)",
      data: [
        "Closed",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
      ],
    },
    {
      instrument: "HKEX (Asia Shares:Exchanges)",
      data: [
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Early Close 06:00",
        "Closed",
        "Closed",
        "Closed",
        "Normal Trading Hours",
      ],
    },
    {
      instrument: "TSE (Asia Shares:Exchanges)",
      data: [
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
      ],
    },
    {
      instrument: "Crypto",
      data: [
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
      ],
    },
    {
      instrument: "Futures GOLDG25",
      data: [
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
      ],
    },
    {
      instrument: "Futures SILVERH25",
      data: [
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
      ],
    },
  ];

  const renderCellContent = (item) => {
    if (!item) return "";

    return item.split('\n').map((line, i) => (
      <span key={i} style={{ display: 'block', whiteSpace: 'pre-wrap' }}>{line}</span>
    ));
  };

  const getCellClass = (item) => {
    if (!item) return "";
    const normalizedItem = item.trim().toLowerCase();
  
    if (normalizedItem.includes("early closed")) return "bg-secondary text-white";
    if (normalizedItem.includes("closed")) return "bg-primary text-white";
    if (normalizedItem.includes("early close")) return "bg-secondary text-white";
  
    return "";
  };

  return (
    <table className="trading_hours_table container">
      <thead className="header-section">
        <tr>
          {headers.map((header, index) => (
            <th key={index} className="shadow-2xl text-sm" scope="col">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={index}>
            <td scope="row">{row.instrument}</td>
            {row.data.map((item, idx) => (
              <td key={idx} className={getCellClass(item)}>
                <span className='text-sm'>{renderCellContent(item)}</span>
              </td>
            ))}
          </tr>
        ))} 
      </tbody>
    </table>
  );
};

export default MarketOverViewNew;

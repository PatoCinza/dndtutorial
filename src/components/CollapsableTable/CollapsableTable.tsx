import React, { useState } from 'react';
import './CollapsableTable.css';

export type CollapsableTableData = {
  header: string[];
  rows: { cells: string[] }[];
};

interface CollapsableTableProps {
  data: CollapsableTableData;
  title?: string;
}

export const CollapsableTable: React.FC<CollapsableTableProps> = ({ data, title }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="collapsable-table-container">
      <div
        className="collapsable-table-header"
        onClick={() => setOpen(o => !o)}
      >
        <span>{title || 'Tabela'}</span>
        <span style={{ fontSize: 18 }}>{open ? '▲' : '▼'}</span>
      </div>
      {open && (
        <table className="collapsable-table-table">
          <thead>
            <tr>
              {data.header.map((h, i) => (
                <th key={i} className="collapsable-table-th">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.rows.map((row, idx) => (
              <tr key={idx} className={idx % 2 === 0 ? 'collapsable-table-row-even' : 'collapsable-table-row-odd'}>
                {row.cells.map((cell, cidx) => (
                  <td key={cidx} className="collapsable-table-td">{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}; 
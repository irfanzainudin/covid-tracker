import React from 'react';
import SummaryCard from './SummaryCard';

export default function SummaryList({ data }) {
  return (
    <div>
      <h1>Worldwide</h1>
      {
        Object.keys(data).map((k) => {
          return (
            <div className="SummaryList">
              <SummaryCard k={k} value={data[k]} />
            </div>
          )
        })
      }
    </div>
  )
}
import React from 'react';

export default function SummaryCard({ k, value }) {
  return (
    <div className="SummaryCard">
      <div className="SummaryCards-header">
        <b>{ k.charAt(0).toUpperCase() + k.substring(1) }</b>
      </div>
      <div className="SummaryCards-body">
        <h1>{ value }</h1>
      </div>
    </div>
  )
}
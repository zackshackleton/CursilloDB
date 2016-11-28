import React from 'react';

const ParishResults = (props) => {
  const renderRows = () => {
    return (
      <div>
      <div className="ParishResults-table-row">
        <div className="ParishResults-table-row-column">Parish ID</div>
        <div className="ParishResults-table-row-column">Name</div>
        <div className="ParishResults-table-row-column">Sponsor Name</div>
        <div className="ParishResults-table-row-column">Phone</div>
        <div className="ParishResults-table-row-column">Address</div>
        <div className="ParishResults-table-row-column">
          <button className="Cancel">Delete</button>
        </div>
      </div>

      <div className="ParishResults-table-row">
        <div className="ParishResults-table-row-column">Parish ID</div>
        <div className="ParishResults-table-row-column">Name</div>
        <div className="ParishResults-table-row-column">Sponsor Name</div>
        <div className="ParishResults-table-row-column">Phone</div>
        <div className="ParishResults-table-row-column">Address</div>
        <div className="ParishResults-table-row-column">
          <button className="Cancel">Delete</button>
        </div>
      </div>

      </div>
    );
  }

  return (
    <div className="ParishResults">
      <h3>Results</h3>

      <div className="ParishResults-table">
        <div className="ParishResults-table-header">
          <div className="ParishResults-table-header-column">Parish ID</div>
          <div className="ParishResults-table-header-column">Name</div>
          <div className="ParishResults-table-header-column">Sponsor Name</div>
          <div className="ParishResults-table-header-column">Phone</div>
          <div className="ParishResults-table-header-column">Address</div>
          <div className="ParishResults-table-header-column" />
        </div>

        {renderRows()}
      </div>

      
    </div>
  )
}

export default ParishResults;

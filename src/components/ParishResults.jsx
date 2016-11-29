import React from 'react';

const ParishResults = (props) => {
  const removeParish = (ID) => {
    const payload = {
      data: { 
        id: ID 
      }
    }

    props.actions.removeParish(payload);
  }

  const renderRows = () => {
    return (props.info.result).map((row, index) => {
      return (
        <div className="ParishResults-table-row" key={index}>
          <div className="ParishResults-table-row-column">{row.PARISH_ID}</div>
          <div className="ParishResults-table-row-column">{row.PARISH_NAME}</div>
          <div className="ParishResults-table-row-column">{row.SPONSOR_NAME}</div>
          <div className="ParishResults-table-row-column">{row.PHONE_NUMBER}</div>
          <div className="ParishResults-table-row-column">{row.STREET + ' ' + row.CITY + ', ' + row.STATE_NAME}</div>
          <div className="ParishResults-table-row-column">
            <button className="Cancel" onClick={() => {removeParish(row.PARISH_ID)}}>Delete</button>
          </div>
        </div>
      );
    })
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

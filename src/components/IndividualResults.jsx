import React from 'react';

const IndividualResults = (props) => {
  const removeIndividual = (ID) => {
    const payload = {
      data: { 
        id: ID 
      }
    }

    props.actions.removeIndividual(payload);
  }

  const renderRows = () => {
    return (props.info.result).map((row, index) => {
      return (
        <div className="IndividualResults-table-row" key={index}>
          <div className="IndividualResults-table-row-column">{row.INDIVIDUAL_ID}</div>
          <div className="IndividualResults-table-row-column">{row.FIRST_NAME + ' ' + row.LAST_NAME}</div>
          <div className="IndividualResults-table-row-column">{row.GENDER}</div>
          <div className="IndividualResults-table-row-column">{row.PHONE_NUMBER}</div>
          <div className="IndividualResults-table-row-column">{row.STREET + ' ' + row.CITY + ', ' + row.STATE_NAME}</div>
          <div className="IndividualResults-table-row-column">
            <button className="Cancel" onClick={() => {removeParish(row.INDIVIDUAL_ID)}}>Delete</button>
          </div>
        </div>
      );
    });
  }

  return (
    <div className="IndividualResults">
      <h3>Results</h3>

      <div className="IndividualResults-table">
        <div className="IndividualResults-table-header">
          <div className="IndividualResults-table-header-column">Individual ID</div>
          <div className="IndividualResults-table-header-column">Name</div>
          <div className="IndividualResults-table-header-column">Gender</div>
          <div className="IndividualResults-table-header-column">Phone</div>
          <div className="IndividualResults-table-header-column">Address</div>
          <div className="IndividualResults-table-header-column" />
        </div>

        {renderRows()}
      </div>

      
    </div>
  )
}

export default IndividualResults;

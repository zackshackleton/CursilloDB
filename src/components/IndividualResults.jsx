import React from 'react';

const IndividualResults = (props) => {
  const renderRows = () => {
    return (
      <div>
      <div className="IndividualResults-table-row">
        <div className="IndividualResults-table-row-column">Individual ID</div>
        <div className="IndividualResults-table-row-column">Name</div>
        <div className="IndividualResults-table-row-column">Gender</div>
        <div className="IndividualResults-table-row-column">Phone</div>
        <div className="IndividualResults-table-row-column">Address</div>
        <div className="IndividualResults-table-row-column">
          <button className="Cancel">Delete</button>
        </div>
      </div>

      <div className="IndividualResults-table-row">
        <div className="IndividualResults-table-row-column">Individual ID</div>
        <div className="IndividualResults-table-row-column">Name</div>
        <div className="IndividualResults-table-row-column">Gender</div>
        <div className="IndividualResults-table-row-column">Phone</div>
        <div className="IndividualResults-table-row-column">Address</div>
        <div className="IndividualResults-table-row-column">
          <button className="Cancel">Delete</button>
        </div>
      </div>

      </div>
    );
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

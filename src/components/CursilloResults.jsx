import React, { Component, PropTypes } from 'react';

class CursilloResults extends Component {
  constructor () {
    super ();
  }

  renderRows () {
    return (
      <div>
      <div className="CursilloResults-table-row">
        <div className="CursilloResults-table-row-column">Cursillo ID</div>
        <div className="CursilloResults-table-row-column">Gender</div>
        <div className="CursilloResults-table-row-column">Start Date</div>
        <div className="CursilloResults-table-row-column">End Date</div>
        <div className="CursilloResults-table-row-column">Address</div>
        <div className="CursilloResults-table-row-column">
          <button onClick={() => {this.props.updateModal(true)}}>Add Individual</button>
          <button className="Cancel" onClick={() => {this.props.updateModal(null)}}>Delete</button>
        </div>
      </div>

      <div className="CursilloResults-table-row">
        <div className="CursilloResults-table-row-column">Cursillo ID</div>
        <div className="CursilloResults-table-row-column">Gender</div>
        <div className="CursilloResults-table-row-column">Start Date</div>
        <div className="CursilloResults-table-row-column">End Date</div>
        <div className="CursilloResults-table-row-column">Address</div>
        <div className="CursilloResults-table-row-column">
          <button onClick={() => {this.props.updateModal(true)}}>Add Individual</button>
          <button className="Cancel" onClick={() => {this.props.updateModal(null)}}>Delete</button>
        </div>
      </div>

      </div>
    );
  }

  render () {
    return (
      <div className="CursilloResults">
        <h3>Results</h3>

        <div className="CursilloResults-table">
          <div className="CursilloResults-table-header">
            <div className="CursilloResults-table-header-column">Cursillo ID</div>
            <div className="CursilloResults-table-header-column">Gender</div>
            <div className="CursilloResults-table-header-column">Start Date</div>
            <div className="CursilloResults-table-header-column">End Date</div>
            <div className="CursilloResults-table-header-column">Address</div>
            <div className="CursilloResults-table-header-column" />
          </div>

          {this.renderRows()}
        </div>

        
      </div>
    )
  }
}

export default CursilloResults;

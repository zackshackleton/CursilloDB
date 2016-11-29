import React, { Component, PropTypes } from 'react';

class CursilloResults extends Component {
  constructor () {
    super ();

    this.removeCursillo = this.removeCursillo.bind(this);
  }

  removeCursillo (ID) {
    const payload = {
      data: { 
        id: ID 
      }
    }
    this.props.removeCursillo(payload);
  }

  renderRows () {
    return (this.props.info.result).map((row, index) => {
      return (
        <div className="CursilloResults-table-row" key={index}>
          <div className="CursilloResults-table-row-column">{row.CURSILLO_ID}</div>
          <div className="CursilloResults-table-row-column">{row.GENDER}</div>
          <div className="CursilloResults-table-row-column">{row.START_DATE}</div>
          <div className="CursilloResults-table-row-column">{row.END_DATE}</div>
          <div className="CursilloResults-table-row-column">{row.STREET + ' ' + row.CITY + ', ' + row.STATE_NAME}</div>
          <div className="CursilloResults-table-row-column">
            <button onClick={() => {this.props.updateModal(true)}}>Add Individual</button>
            <button className="Cancel" onClick={() => {this.removeCursillo(row.CURSILLO_ID)}}>Delete</button>
          </div>
        </div>
      )
    })
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

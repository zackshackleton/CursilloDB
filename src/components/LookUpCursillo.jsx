import React, { Component } from 'react';
import ButtonRow from './ButtonRow';
import Dropdown from './Dropdown';
import TextInput from './TextInput';
import CursilloResults from './CursilloResults';

class LookUpCursillo extends Component {
  constructor () {
    super ();
    
    this.submitClickHandler = this.submitClickHandler.bind(this);
    this.cancelClickHandler = this.cancelClickHandler.bind(this);
    this.successCallback = this.successCallback.bind(this);
    this.errorCallback = this.errorCallback.bind(this);

    this.state = {
      dataReady: false
    }
  }

  submitClickHandler () {
    const payload = {
      data: {
        id: (this.refs.cursilloID.state.value === '') ? '%' : this.refs.cursilloID.state.value,
        gender: (this.refs.cursilloGender.state.value === 'Select...') ? '%' : this.refs.cursilloGender.state.value,
        startMonth: (this.refs.cursilloStartMonth.state.value === '') ? '%' : this.refs.cursilloStartMonth.state.value,
        startDay: (this.refs.cursilloStartDay.state.value === '') ? '%' : this.refs.cursilloStartDay.state.value,
        startYear: (this.refs.cursilloStartYear.state.value === '') ? '%' : this.refs.cursilloStartYear.state.value,
        endMonth: (this.refs.cursilloEndMonth.state.value === '') ? '%' : this.refs.cursilloEndMonth.state.value,
        endDay: (this.refs.cursilloEndDay.state.value === '') ? '%' : this.refs.cursilloEndDay.state.value,
        endYear: (this.refs.cursilloEndYear.state.value === '') ? '%' : this.refs.cursilloEndYear.state.value,
        street: (this.refs.cursilloStreet.state.value === '') ? '%' : this.refs.cursilloStreet.state.value,
        city: (this.refs.cursilloCity.state.value === '') ? '%' : this.refs.cursilloCity.state.value,
        state: (this.refs.cursilloState.state.value === 'State') ? '%' : this.refs.cursilloState.state.value,
        zip: (this.refs.cursilloZip.state.value === '') ? '%' : this.refs.cursilloZip.state.value,
      },
      success: this.successCallback,
      error: this.errorCallback
    }

    this.props.actions.lookUpCursillo(payload);
  }

  successCallback () {
    this.setState({ dataReady: true })
  }

  errorCallback () {
    this.setState({ dataReady: false })
  }

  cancelClickHandler () {
    this.props.updateCurrentPage('Main')
  }

  renderResults () {
    if (this.state.dataReady === false) return;

    return <CursilloResults info={this.props.info}
                            removeCursillo={this.props.actions.removeCursillo}
                            updateModal={this.props.updateModal} />
  }

  render () {
    return (
      <div className="Cursillo">
        <h3>Look up a Cursillo</h3>

        <div className="container">
          <TextInput title="Cursillo ID" ref="cursilloID" />
          <Dropdown title="Gender" values={["Male", "Female"]} ref="cursilloGender" />

          <div>
            <TextInput title="Start Date" placeholder="Month" ref="cursilloStartMonth" />
            <TextInput showTitle={false} placeholder="Day" ref="cursilloStartDay" />
            <TextInput showTitle={false} placeholder="Year" ref="cursilloStartYear" />
          </div>

          <div>
            <TextInput title="End Date" placeholder="Month" ref="cursilloEndMonth"/>
            <TextInput showTitle={false} placeholder="Day" ref="cursilloEndDay"/>
            <TextInput showTitle={false} placeholder="Year" ref="cursilloEndYear" />
          </div>

          <div>
            <TextInput title="Address" placeholder="Street" ref="cursilloStreet"/>
            <TextInput showTitle={false} placeholder="City" ref="cursilloCity" />
            <Dropdown  showTitle={false} placeholder="State" values={["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"]} ref="cursilloState" />
            <TextInput showTitle={false} placeholder="Zip" ref="cursilloZip" />
          </div>

          <ButtonRow onSubmit={this.submitClickHandler}
                     onCancel={this.cancelClickHandler} />
        </div>

        <div className="container">
          {this.renderResults()}
        </div>
      </div>
    );
  }
}

export default LookUpCursillo;

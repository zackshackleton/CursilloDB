import React, { Component } from 'react';
import ButtonRow from './ButtonRow';
import Dropdown from './Dropdown';
import TextArea from './TextArea';
import TextInput from './TextInput';

class Cursillo extends Component {
  constructor () {
    super ();
    
    this.submitClickHandler = this.submitClickHandler.bind(this);
    this.cancelClickHandler = this.cancelClickHandler.bind(this);
    this.successCallback = this.successCallback.bind(this);
    this.errorCallback = this.errorCallback.bind(this);
  }

  submitClickHandler () {
    const payload = {
      data: {
        id: this.refs.cursilloID.state.value,
        gender: this.refs.cursilloGender.state.value,
        startMonth: this.refs.cursilloStartMonth.state.value,
        startDay: this.refs.cursilloStartDay.state.value,
        startYear: this.refs.cursilloStartYear.state.value,
        endMonth: this.refs.cursilloEndMonth.state.value,
        endDay: this.refs.cursilloEndDay.state.value,
        endYear: this.refs.cursilloEndYear.state.value,
        street: this.refs.cursilloStreet.state.value,
        city: this.refs.cursilloCity.state.value,
        state: this.refs.cursilloState.state.value,
        zip: this.refs.cursilloZip.state.value,
        description: this.refs.cursilloDescription.state.value,
        notes: this.refs.cursilloNotes.state.value
      },
      success: this.successCallback,
      error: this.errorCallback
    }

    this.props.actions.createCursillo(payload);
  }

  successCallback () {
    console.log("Success");
  }

  errorCallback () {
    console.log("Error");
  }

  cancelClickHandler () {
    this.props.updateCurrentPage('Main')
  }

  render () {
    return (
      <div className="Cursillo">
        <h3>Add a Cursillo</h3>

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

            <TextArea title="Description" ref="cursilloDescription" />
            <TextArea title="Notes" ref="cursilloNotes" />

          <ButtonRow onSubmit={this.submitClickHandler}
                     onCancel={this.cancelClickHandler} />
        </div>
      </div>
    );
  }
}

export default Cursillo;

import React, { Component } from 'react';
import ButtonRow from './ButtonRow';
import Dropdown from './Dropdown';
import TextArea from './TextArea';
import TextInput from './TextInput';

class Parish extends Component {
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
        id: this.refs.parishID.state.value,
        name: this.refs.parishName.state.value,
        street: this.refs.parishStreet.state.value,
        city: this.refs.parishCity.state.value,
        state: this.refs.parishState.state.value,
        zip: this.refs.parishZip.state.value,
        phone: this.refs.parishPhone.state.value,
        sponsorName: this.refs.parishSponsorName.state.value,
        notes: this.refs.parishNotes.state.value,
      },
      success: this.successCallback,
      error: this.errorCallback
    }

    this.props.actions.createParish(payload);
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
      <div className="Parish">
        <h3>Add a Parish</h3>
        <div className="container">
          <TextInput title="Parish ID" ref="parishID" />
          <TextInput title="Parish Name" ref="parishName" />

          <div>
            <TextInput title="Address" placeholder="Street" ref="parishStreet" />
            <TextInput showTitle={false} placeholder="City" ref="parishCity" />
            <Dropdown  showTitle={false} placeholder="State" values={["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"]} ref="parishState" />
            <TextInput showTitle={false} placeholder="Zip" ref="parishZip" />
          </div>

          <div>
            <TextInput title="Phone Number" ref="parishPhone" />
            <TextInput title="Sponsor Name" ref="parishSponsorName" />
          </div>

          <div>
            <TextArea title="Notes" ref="parishNotes" />
          </div>

          <ButtonRow onSubmit={this.submitClickHandler}
                     onCancel={this.cancelClickHandler} />
        </div>
      </div>
    );
  }
}

export default Parish;

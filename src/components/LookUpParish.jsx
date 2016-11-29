import React, { Component } from 'react';
import ButtonRow from './ButtonRow';
import Dropdown from './Dropdown';
import TextInput from './TextInput';
import ParishResults from './ParishResults';

class LookUpParish extends Component {
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
        id: (this.refs.parishID.state.value === '') ? '%' : this.refs.parishID.state.value,
        name: (this.refs.parishName.state.value === '') ? '%' : this.refs.parishName.state.value,
        street: (this.refs.parishStreet.state.value === '') ? '%' : this.refs.parishStreet.state.value,
        city: (this.refs.parishCity.state.value === '') ? '%' : this.refs.parishCity.state.value,
        state: (this.refs.parishState.state.value === 'State') ? '%' : this.refs.parishState.state.value,
        zip: (this.refs.parishZip.state.value === '') ? '%' : this.refs.parishZip.state.value,
        phone: (this.refs.parishPhone.state.value === '') ? '%' : this.refs.parishPhone.state.value,
        sponsorName: (this.refs.parishSponsorName.state.value === '') ? '%' : this.refs.parishSponsorName.state.value,
      },
      success: this.successCallback,
      error: this.errorCallback
    }

    this.props.actions.lookUpParish(payload);
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

    return <ParishResults {...this.props}/>
  }

  render () {
    return (
      <div className="Parish">
        <h3>Look up a Parish</h3>
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

          <ButtonRow onSubmit={this.submitClickHandler}
                     onCancel={this.cancelClickHandler} />
        </div>

        {this.renderResults()}
      </div>
    );
  }
}

export default LookUpParish;

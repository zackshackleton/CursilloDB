import React, { Component } from 'react';
import ButtonRow from './ButtonRow';
import Dropdown from './Dropdown';
import TextArea from './TextArea';
import TextInput from './TextInput';

class Individual extends Component {
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
        cursilloID: this.refs.cursilloID.state.value,
        id: this.refs.individualID.state.value,
        gender: this.refs.individualGender.state.value,
        active: this.refs.individualActive.state.value,
        firstName: this.refs.individualFirst.state.value,
        preferred: this.refs.individualPreferred.state.value,
        lastName: this.refs.individualLast.state.value,
        month: this.refs.individualMonth.state.value,
        day: this.refs.individualDay.state.value,
        year: this.refs.individualYear.state.value,
        street: this.refs.individualStreet.state.value,
        city: this.refs.individualCity.state.value,
        state: this.refs.individualState.state.value,
        zip: this.refs.individualZip.state.value,
        phone: this.refs.individualPhone.state.value,
        email: this.refs.individualEmail.state.value,
        jobTitle: this.refs.individualJobTitle.state.value,
        workPhone: this.refs.individualWorkPhone.state.value,
        maritalStatus: this.refs.individualMaritalStatus.state.value,
        spouseFirst: this.refs.individualSpouseFirst.state.value,
        spouseLast: this.refs.individualSpouseLast.state.value,
        spouseAttended: this.refs.individualSpouseAttended.state.value,
        spouseID: this.refs.individualSpouseID.state.value,
        parishID: this.refs.individualParishID.state.value,
        living: this.refs.individualLiving.state.value,
        role: this.refs.individualRole.state.value,
        talkID: this.refs.individualTalkID.state.value,
        talkNumber: this.refs.individualTalkNumber.state.value,
        talkDescription: this.refs.individualTalkDescription.state.value,
      },
      success: this.successCallback,
      error: this.errorCallback
    }
    
    this.props.actions.createIndividual(payload);
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
      <div className="Individual">
        <h3>Add an Individual</h3>

        <div className="container">
          <TextInput title="Cursillo ID" ref="cursilloID" />
          <TextInput title="Individual ID" ref="individualID" />
          <Dropdown  title="Gender" values={["Male", "Female"]} ref="individualGender" />
          <Dropdown  title="Active" values={["True", "False"]} ref="individualActive" />

          <div>
            <TextInput title="Name" placeholder="First Name" ref="individualFirst" />
            <TextInput showTitle={false} placeholder="Preferred Name" ref="individualPreferred" />
            <TextInput showTitle={false} placeholder="Last Name" ref="individualLast" />
          </div>

          <div>
            <TextInput title="Date of Birth" placeholder="Month" ref="individualMonth" />
            <TextInput showTitle={false} placeholder="Day" ref="individualDay" />
            <TextInput showTitle={false} placeholder="Year" ref="individualYear" />
          </div>

          <div>
            <TextInput title="Address" placeholder="Street" ref="individualStreet" />
            <TextInput showTitle={false} placeholder="City" ref="individualCity" />
            <Dropdown  showTitle={false} placeholder="State" values={["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"]} ref="individualState" />
            <TextInput showTitle={false} placeholder="Zip" ref="individualZip" />
          </div>

          <div>
            <TextInput title="Contact Info" placeholder="Home Phone" ref="individualPhone" />
            <TextInput showTitle={false} placeholder="Email" ref="individualEmail" />
          </div>

          <div>
            <TextInput title="Occupation" placeholder="Job Title" ref="individualJobTitle" />
            <TextInput showTitle={false} placeholder="Work Phone" ref="individualWorkPhone" />
          </div>

          <div>
            <Dropdown  title="Marital Status" values={["Single", "Married"]} ref="individualMaritalStatus" />
            <TextInput title="Spouse Name" placeholder="First Name" ref="individualSpouseFirst" />
            <TextInput showTitle={false} placeholder="Last Name" ref="individualSpouseLast" />
            <Dropdown  title="Spouse Attended?" values={["True", "False"]}  ref="individualSpouseAttended" />
            <TextInput title="Spouse ID"  ref="individualSpouseID"/>
          </div>

          <div>
            <TextInput title="Parish ID" ref="individualParishID" />
            <Dropdown  title="Living" values={["True", "False"]} ref="individualLiving" />
            <Dropdown  title="Role" values={["Family", "Finance", "General", "Kitchen", "Landscape", "Prayer", "Sanitation", "Security", "Water"]} ref="individualRole" />
          </div>

          <div className="container">
            <TextInput title="Talk ID" ref="individualTalkID" />
            <TextInput title="Talk Number" ref="individualTalkNumber" />
            <TextArea  title="Talk Description" ref="individualTalkDescription" />
          </div>

          <ButtonRow onSubmit={this.submitClickHandler}
                     onCancel={this.cancelClickHandler} />
        </div>
      </div>
    );
  }
}

export default Individual;

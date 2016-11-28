import React, { Component, PropTypes } from 'react';

import Cursillo from '../Cursillo';
import Dropdown from '../Dropdown';
import Individual from '../Individual';
import Login from '../Login';
import Main from '../Main';
import Navbar from '../Navbar';
import Parish from '../Parish';
import AddIndividual from '../AddIndividual';

import LookUpCursillo from '../LookUpCursillo';
import LookUpIndividual from '../LookUpIndividual';
import LookUpParish from '../LookUpParish';

class Layout extends Component {
  constructor () {
    super();

    this.updateCurrentPage = this.updateCurrentPage.bind(this);
    this.updateModal = this.updateModal.bind(this);

    this.state = {
      currentPage: 'Login',
      modal: null
    }
  }

  updateCurrentPage (input) {
    this.setState({ currentPage: input });
  }

  updateModal (input) {
    this.setState({ modal: input });
  }

  renderLayout () {
    if (this.state.currentPage === 'Login') {
      return <Login updateCurrentPage={this.updateCurrentPage} />
    } else if (this.state.currentPage === 'Main') {
      return <Main updateCurrentPage={this.updateCurrentPage}
                   actions={this.props.actions}
                   info={this.props.info} />;
    } else if (this.state.currentPage === 'Add Cursillo') {
      return <Cursillo updateCurrentPage={this.updateCurrentPage}
                       actions={this.props.actions}
                       info={this.props.info} />;
    } else if (this.state.currentPage === 'Add Individual') {
      return <Individual updateCurrentPage={this.updateCurrentPage}
                         actions={this.props.actions}
                         info={this.props.info} />;
    } else if (this.state.currentPage === 'Add Parish') {
      return <Parish updateCurrentPage={this.updateCurrentPage}
                     actions={this.props.actions}
                     info={this.props.info} />;
    } else if (this.state.currentPage === 'Look Up Cursillo') {
      return <LookUpCursillo updateCurrentPage={this.updateCurrentPage}
                             updateModal={this.updateModal}
                             actions={this.props.actions}
                             info={this.props.info} />;
    } else if (this.state.currentPage === 'Look Up Individual') {
      return <LookUpIndividual updateCurrentPage={this.updateCurrentPage}
                               actions={this.props.actions}
                               info={this.props.info} />;
    } else if (this.state.currentPage === 'Look Up Parish') {
      return <LookUpParish updateCurrentPage={this.updateCurrentPage}
                           actions={this.props.actions}
                           info={this.props.info} />;
    }

    return <Main />;
  }

  renderAddIndividual () {
    if (this.state.modal === null) return;

    return <AddIndividual updateModal={this.updateModal}/>
  }

  render () {
    console.log(this.props, "LAYOUT");
    return (
      <div className="Layout">
        <Navbar currentPage={this.state.currentPage} 
                updateCurrentPage={this.updateCurrentPage} />
        {this.renderLayout()}
        {this.renderAddIndividual()}
      </div>
    );
  }
}

export default Layout;

import React, { Component, PropTypes } from 'react';

import Cursillo from '../Cursillo';
import Dropdown from '../Dropdown';
import Individual from '../Individual';
import Login from '../Login';
import Main from '../Main';
import Navbar from '../Navbar';
import Parish from '../Parish';

import LookUpCursillo from '../LookUpCursillo';
import LookUpIndividual from '../LookUpIndividual';
import LookUpParish from '../LookUpParish';

class Layout extends Component {
  constructor () {
    super();

    this.updateCurrentPage = this.updateCurrentPage.bind(this);

    this.state = {
      currentPage: 'Login'
    }
  }

  updateCurrentPage (input) {
    this.setState({ currentPage: input });
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

  render () {
    console.log(this.props, "LAYOUT");
    return (
      <div className="Layout">
        <Navbar currentPage={this.state.currentPage} 
                updateCurrentPage={this.updateCurrentPage} />
        {this.renderLayout()}
      </div>
    );
  }
}

export default Layout;

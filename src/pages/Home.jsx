import React from 'react';
import { Link } from 'react-router';
import Header from '../layouts/Header';
import Menu from '../layouts/Menu';
import Setting from '../layouts/Setting';
import Breadcrumbs from '../layouts/Breadcrumbs';
import Scrollup from '../layouts/Scrollup';
class Home extends React.Component {
  render () {
    return (
      <div>
        <Header></Header>
         <div className="main-container" id="main-container">
                <div className="main-container-inner">
                    <Menu></Menu>
                    <div className="main-content">
                         <Breadcrumbs></Breadcrumbs>
                        <div className="page-content"> {this.props.children}</div>
                    </div>
                    <Setting></Setting>
                </div>
                <Scrollup></Scrollup>
          </div>
      </div>
    );
  }
}

export default Home;
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import {clearAuth} from '../actions/auth';
// import {clearAuthToken} from '../local-storage';
import './navbar.css'; 

export class Navbar extends React.Component{
  render(){
    let logInOut = (<Link to="/login">Login/Signup</Link>);

    if (this.props.loggedIn) {
      logInOut = (
        <a href='' onClick={() => this.logOut()}>Log out</a>
      );

    }
    return (
      <header className='nav-bar'>
        <nav className='row'>
          <Link className='col-6 left' to='/'><strong>Privet!</strong></Link>
          <ul className='nav-ul col-6 right'>
            <li>
              <Link to='' >About</Link>
            </li>
            <li>
              {logInOut}
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Navbar);
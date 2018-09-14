import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import RegistrationForm from './registration-form';
import About from './about';
import './landing.css';

export function LandingPage(props) {
  
  let letsGoBtn = (<Link to="/register"><button >Let's Go!</button></Link>);
  let aboutArea = (
    <div className='col-12'>
      <div className='col-8'>
        <About />
      </div>
      <div className='reg-form col-4'>
        <h2>Register</h2>
        <RegistrationForm />
      </div>
    </div>
  );
  
  if (props.loggedIn) {
    letsGoBtn = (<Link to="/practice"><button >Let's Go!</button></Link>);
    aboutArea = (
    <div className='col-12'>
        <About />
    </div>
    );
  }
  
  return (
    <main className='home'>
      <section className='heading'>
        <div className='row'>
          <div className='col-12'>
            <h1 className='title'>Learning Russian has never been easier</h1>
            <p className='subtitle'>Fast and fun way to memorize new words!</p>
            {letsGoBtn}
          </div>
        </div>
      </section>
      <section className=' row about-section'>
        { aboutArea }
      </section>
    </main>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);

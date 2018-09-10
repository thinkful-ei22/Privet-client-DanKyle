import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import { Link } from 'react-router-dom';
import {registerUser} from '../actions/users';
import {login} from '../actions/auth';
import Input from './input';
import {required, nonEmpty, matches, length, isTrimmed} from '../validators';

import './registration-form.css';

const passwordLength = length({min: 10, max: 72});
const matchesPassword = matches('password');

export class RegistrationForm extends React.Component {
  onSubmit(values) {
    const {username, password, name} = values;
    const user = {username, password, name};
    return this.props
      .dispatch(registerUser(user))
      .then(() => this.props.dispatch(login(username, password)));
  }

  render() {
    return (
      <main role='main' className='registrationForm'>
        <section className='row'>
          <div className="col-12">
            <form
              className="login-form"
              onSubmit={this.props.handleSubmit(values =>
                this.onSubmit(values)
              )}>
              <label htmlFor="name">Name</label>
              <Field 
                component={Input} 
                type="text" 
                name="name" 
                validate={[required, nonEmpty]}
              />
              <label htmlFor="username">Username</label>
              <Field
                component={Input}
                type="text"
                name="username"
                validate={[required, nonEmpty, isTrimmed]}
              />
              <label htmlFor="password">Password</label>
              <Field
                component={Input}
                type="password"
                name="password"
                validate={[required, passwordLength, isTrimmed]}
              />
              <label htmlFor="passwordConfirm">Confirm password</label>
              <Field
                component={Input}
                type="password"
                name="passwordConfirm"
                validate={[required, nonEmpty, matchesPassword]}
              />
              <button className='register-btn'
                type="submit"
                disabled={this.props.pristine || this.props.submitting}>
                    Register
              </button>
            </form>
            <Link to="/login">Already registered? Login!</Link>
          </div>
        </section>
      </main>
    );
  }
}

export default reduxForm({
  form: 'registration',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('registration', Object.keys(errors)[0]))
})(RegistrationForm);

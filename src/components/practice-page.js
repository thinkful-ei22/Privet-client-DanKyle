import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
// import { fetchProtectedData } from '../actions/protected-data';

export class Practice extends React.Component {
  
  // componentDidMount() {
  //   this.props.dispatch(fetchProtectedData());
  // }

  render(){
    return (
      <h1>Welcome, `${this.props.name}`</h1>
    );
  }
}

const mapStateToProps = state => {
  const { currentUser } = state.auth;
  return {
    username: state.auth.currentUser.username,
    name: `${currentUser.name}`,
    protectedData: state.protectedData.data
  };
};

export default requiresLogin()(connect(mapStateToProps)(Practice));
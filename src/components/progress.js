import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import requiresLogin from './requires-login';
import ReactTable from "react-table";
import 'react-table/react-table.css';
import './progress.css';
import { fetchProgress } from '../actions/users';

export class Progress extends React.Component{
  componentDidMount(){
    this.props.dispatch(fetchProgress())
  }
  render(){
    if(!this.props.progress){
      return <p>Loading your progress...</p>
    }

    const data = this.props.progress.map(val => {
      return {
        russian: val.russian,
        translit: val.translit,
        english: val.english,
        score: val.score,
        attempts: val.attempts,
        sessionScore: val.sessionScore,
        sessionAttempts: val.sessionAttempts
      }
    })
    
    const columns = [{
      Header: 'Russian',
      accessor: 'russian' // String-based value accessors!
    }, {
      Header: 'Translit',
      accessor: 'translit'
    },
      {
        Header: 'English',
        accessor: 'english'
      },
      {
        Header: 'Session Score',
        accessor: 'sessionScore',
        Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
      },
      {
        Header: 'Session Attempts',
        accessor: 'sessionAttempts',
        Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
      },
      {
        Header: 'Score',
        accessor: 'score',
        Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
      },
      {
        Header: 'Attempts',
        accessor: 'attempts',
        Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
      }]

    return (
      <div className='row'>
      <header className='center col-12'>
        <h1 id='progress-table'>Progress Table</h1>
      </header>
        <main className=' -striped -highlight col-12'>
          <ReactTable
            data={data}
            columns={columns}
            defaultPageSize={5}
            className={'-striped'}
          />
          <Link to='/practice'><button className='right back-btn'>Practice</button></Link>
      </main>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const progress = state.user.progress;
  return {
    progress
  };
};

export default requiresLogin()(connect(mapStateToProps)(Progress));
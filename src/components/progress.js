import React from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css';
import './progress.css';

export default class Progress extends React.Component{
  render(){
    const data = [{
      russian: 'Привет',
      translit: '(pree-vyEt)',
      english: 'Hello',
      score: 10,
      attempts: 10
    },
      {
        russian: 'Друг',
        translit: '(droog)',
        english: 'Friend',
        score: 4,
        attempts: 7
      },
      {
        russian: 'Семья',
        translit: '(sem-yA)',
        english: 'Family',
        score: 6,
        attempts: 6
      }]

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
        <h1>Progress Table</h1>
      </header>
        <main className=' -striped -highlight col-12'>
          <ReactTable
            data={data}
            columns={columns}
            defaultPageSize={10}
            className={'-striped'}
          />
      </main>
      </div>
    );
  }
}
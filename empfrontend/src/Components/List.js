
import { Link } from 'react-router-dom';

import React, { Component } from 'react'

export default class List extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }
  fetchData() {
    fetch('http://127.0.0.1:8000/employee/')

      .then(response => response.json())
      .then((data) => {
        this.setState({
          data: data

        });


      });


  }
  componentDidMount() {
    this.fetchData();

  }
  // Delete Data
  deleteData(id) {
    console.log(id);
    fetch('http://127.0.0.1:8000/employee/' + id + '/', {
      method: 'DELETE',
    })
      .then(response => response)
      .then((data) => {
        if (data) {
          this.fetchData();
        }
      });
  }
  render() {
    const empData = this.state.data;
    const rows = empData.map((emp) =>
      <tr key={emp.id}>
        <th>{emp.id}</th>
        <td>{emp.FullName}</td>
        <td>{emp.Email}</td>
        <td>{emp.contect}</td>
        <td>{emp.Address}</td>
        <td>
          <Link to="/update/id" className="btn btn-info m-2"> Update</Link>
          <button onClick={() => this.deleteData(emp.id)} className="btn btn-danger">Delete</button>
        </td>
      </tr>
    );
    return (
      <table className="table table-hover table-bordered my-3">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">FullName</th>
            <th scope="col">Email</th>
            <th scope="col">Conteact</th>
            <th scope="col">Address</th>
            <th scope="col">Action</th>

          </tr>
        </thead>
        <tbody>

          {rows}
        </tbody>
      </table>
    );
  }
}



import React, { Component } from 'react'

export default class Add extends Component {
    constructor(){
        super();
        this.state={
            FullName:"",
            Email:"",
            contect:"",
            Address:"",
        }
        this.changeHandler=this.changeHandler.bind(this);
        this.submitForm=this.submitForm.bind(this);
    }

    //input change handler

    changeHandler(event){
        this.setState({
            [event.target.name]:event.target.value
        });
    }
    //submit handler
    submitForm(){
        fetch('http://127.0.0.1:8000/employee/',{
            method:'POST',
            body:JSON.stringify(this.state),
            headers:{
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then(response=>response.json())
        .then((data)=>console.log(data));

        this.setState({
            FullName:"",
            Email:"",
            contect:"",
            Address:"",
        });
    }
  render() {
    return (
        <table className="table table-bordered">
            <tbody>
                <tr>
                    <th>Full Name</th>
                    <td>
                        <input value={this.state.FullName} name="FullName" onChange={this.changeHandler} type="text" className="form-control" />
                    </td>
                </tr>
                <tr>
                    <th>Email</th>
                    <td>
                        <input value={this.state.Email} name="Email" onChange={this.changeHandler} type="text" className="form-control" />
                    </td>
                </tr>
                <tr>
                    <th>Contact</th>
                    <td>
                        <input value={this.state.contect} name="contect" onChange={this.changeHandler} type="text" className="form-control" />
                    </td>
                </tr>
                <tr>
                    <th>Address</th>
                    <td>
                        <input value={this.state.Address} name="Address" onChange={this.changeHandler} type="text" className="form-control" />
                    </td>
                </tr>
                <tr>
                    <td colSpan="2">
                        <input type="submit" onClick={this.submitForm} className="btn btn-dark" />
                    </td>
                </tr>
            </tbody>
        </table>
    )
  }
}

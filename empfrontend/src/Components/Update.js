import React from 'react';
class Add extends React.Component{
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

    fetchData(){
        var id=this.props.match.params.id;
        fetch('http://127.0.0.1:8000/employee/'+id)
        .then(response=>response.json())
        .then((data)=>{
            this.setState({
                FullName:data.FullName,
                Email:data.Email,
                contect:data.contect,
                Address:data.Address
            });
        });
    }

    componentDidMount(){
        this.fetchData();
    }

    // Input Change Handler
    changeHandler(event){
        this.setState({
            [event.target.name]:event.target.value
        });
    }

    // Submit Form
    submitForm(){
        var id=this.props.match.params.id;
        fetch('http://127.0.0.1:8000/employee/'+id+'/',{
            method:'PUT',
            body:JSON.stringify(this.state),
            headers:{
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then(response=>response.json())
        .then((data)=>console.log(data));
    }

    render(){
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
        );
    }
}

export default Add;
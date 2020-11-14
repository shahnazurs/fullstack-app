import React, { Component } from 'react';
import ModalDelete, {ModalAdd, ModalUpdate} from '../modals/models';



class Employee extends Component {
    state = {
        employees: [],
        show: false,
        currentEmp:0,
        showAdd: false,
        showUpdate: false

    }

    componentDidMount() {
        console.log(process.env);
        fetch("http://35.202.222.152:5000/")
        //fetch("http://localhost:5000/")
            .then(res => res.json())
            .then(res => {
                this.setState({
                    employees: res
                })
            })
    }

    addEmployee = () => {
        this.setState({
            showAdd: false
        });
        console.log("Add Employee");
    };

    updateEmployee = () =>{
        this.setState({
            showUpdate: false
        });
        console.log("Update Employee");
    }

    deleteEmployee = (empno) => {
        this.setState({
            show: false
        });
        fetch("http://35.202.222.152:5000/employee/api/delete/" + empno,{
        //fetch("http://localhost:5000/employee/api/delete/" + empno,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(res => {
            this.setState({
                employees: res
            })
        })
        //console.log(empno)
    }
    showModal = (mode, empno) => {
        console.log("Show Modal");
        if(mode === "add"){
            this.setState({
                showAdd: true,
                currentEmp: empno
            });
        }
        else if(mode === "update"){
            this.setState({
                showUpdate: true
            })
        }
        else{
            this.setState({
                show: true,
                currentEmp: empno
            });
        }
       
    };

    hideModal = (mode) => {
        console.log("Hide Modal");
        if(mode === "add"){
            this.setState({
                showAdd: false
            });
        }
        else if(mode === "update"){
            this.setState({
                showUpdate: false
            });
        }
        else{
            this.setState({
                show: false
            });
        }
        
       
    }

    render() {
        return (
            <div>
                <h2 style={{marginBottom: 40}}>Employee Dashboard</h2>

                <ModalDelete handleDelete={() => this.deleteEmployee(this.state.currentEmp)} show={this.state.show} handleClose={() => this.hideModal("delete")}>
                    <p>Modal</p>
                </ModalDelete>

                <ModalAdd handleAdd={() => this.addEmployee()} show={this.state.showAdd} handleClose={() => this.hideModal("add")}>
                    <p>Modal</p>
                </ModalAdd>

                <ModalUpdate handleUpdate={() => this.updateEmployee()} show={this.state.showUpdate} handleClose={() => this.hideModal("update")}>
                    <p>Modal</p>
                </ModalUpdate>
                <div style={{diplay: "none"}}>


                </div>
                <div style={{marginBottom: 20, float: "right", paddingRight: 40}}>
                <button type="button" onClick={() => this.showModal("add", 0)}className="btn btn-secondary">Add</button>
                </div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Employee Number</th><th>Employee Name</th><th>Salary</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.employees.length === 0 && 
                            (<tr >
                                <td colSpan="4">No records</td>
                            </tr>)
                        }
                        {this.state.employees.map(employee => (
                            <tr key={employee.empno}>
                                <td>{employee.empno}</td><td>{employee.ename}</td>
                                <td>{employee.salary}</td>
                                <td>
                                    <button type="button" className="btn btn-secondary" onClick={() => this.showModal("update", employee.empno)}>Modify</button>
                                    &nbsp;&nbsp;
                                    <button type="button" onClick={
                                         () => this.showModal("delete", employee.empno)
                                        } className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Employee;
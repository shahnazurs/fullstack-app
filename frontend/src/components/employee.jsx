import React, { Component } from 'react';

class Employee extends Component {
    state = {
        employees: []
    }

    componentDidMount() {
        fetch("http://localhost:5000/")
            .then(res => res.json())
            .then(res => {
                this.setState({
                    employees: res
                })
            })
    }

    render() {
        return (
            <div>
                <h2>Employee Dashboard</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Employee Number</th><th>Employee Name</th><th>Salary</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.employees.map(employee => (
                            <tr key={employee.empno}>
                                <td>{employee.empno}</td><td>{employee.ename}</td>
                                <td>{employee.salary}</td>
                                <td>
                                    <button type="button" class="btn btn-secondary">Modify</button>
                                    &nbsp;&nbsp;
                                    <button type="button" class="btn btn-danger">Delete</button>
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
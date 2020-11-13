import React, { Component } from 'react';

class Home extends Component {
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
                <h2>Home Page</h2>
                <hr />
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Employee Number</th><th>Employee Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.employees.map(employee => (
                            <tr key={employee.empno}>
                                <td>{employee.empno}</td><td>{employee.ename}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Home;
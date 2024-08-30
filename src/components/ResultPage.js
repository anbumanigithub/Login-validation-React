 // src/ResultPage.js
import React from 'react';
import { useLocation } from 'react-router-dom';

const ResultPage = () => {
    const { state } = useLocation();

    return (
        <div className="container mt-4 p-4 bg-light rounded">
            <h2 className="mb-4" style={{background:"skyblue"}}>Form Data</h2>
            <div className="table-responsive">
                <table className="table table-dark table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>City</th>
                            <th>Address</th>
                            <th>Ph Number</th>
                            <th>Country</th>
                            <th>Zip Code</th>
                            <th>state</th>
                            <th>dob</th>
                          
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{state.name}</td>
                            <td>{state.email}</td>
                            <td>{state.age}</td>
                            <td>{state.city}</td>
                            <td>{state.address}</td>
                            <td>{state.phoneNumber}</td>
                            <td>{state.country}</td>
                            <td>{state.zipCode}</td>
                            <td>{state.state}</td>
                            <td>{state.dob}</td>
                       
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ResultPage;

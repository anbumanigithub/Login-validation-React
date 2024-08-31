import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ResultPage = () => {
    const { state } = useLocation();

    // State to hold the combined data
    const [allData, setAllData] = useState([]);

    // State for the search query
    const [searchQuery, setSearchQuery] = useState('');

    // Load data from localStorage on component mount
    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('formData')) || [];

        // Check if state data already exists in localStorage
        const isDataExists = storedData.some(
            item => JSON.stringify(item) === JSON.stringify(state)
        );

        // If new state data is not already in localStorage, add it
        if (state && !isDataExists) {
            const newData = [...storedData, state];
            setAllData(newData);
            localStorage.setItem('formData', JSON.stringify(newData));
        } else {
            setAllData(storedData);
        }
    }, [state]);

    // Filtered data based on the search query

    const filteredData = allData.filter((item) => {
        
        return (
            item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.age.toString().includes(searchQuery) ||
            item.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.phoneNumber.toString().includes(searchQuery) ||
            item.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.zipCode.toString().includes(searchQuery) ||
            item.state.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.dob.toLowerCase().includes(searchQuery.toLowerCase())
        );
    });

    return (
        <div className="container mt-4 p-4 bg-light rounded">
            <h2 className="mb-4" style={{ background: "skyblue" }}>Form Data</h2>

            {/* Search Box */}
            <div className="mb-4">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>

            {/* Table Section */}
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
                            <th>State</th>
                            <th>DOB</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((item, index) => (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.age}</td>
                                <td>{item.city}</td>
                                <td>{item.address}</td>
                                <td>{item.phoneNumber}</td>
                                <td>{item.country}</td>
                                <td>{item.zipCode}</td>
                                <td>{item.state}</td>
                                <td>{item.dob}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ResultPage;

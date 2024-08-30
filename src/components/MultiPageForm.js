// src/MultiPageForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';

const MultiPageForm = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: '',
        city: '',
        address: '',
        phoneNumber: '',
        country: '',
        zipCode: '',
        state: '',
        dob: '',
       
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleNext = () => {
        if (currentPage < 3) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/result', { state: formData });
    };

    return (
        <div className="container mt-4 p-4 bg-purple text-white rounded">
            <form onSubmit={handleSubmit}>
                {currentPage === 1 && <Page1 formData={formData} handleChange={handleChange} />}
                {currentPage === 2 && <Page2 formData={formData} handleChange={handleChange} />}
                {currentPage === 3 && <Page3 formData={formData} handleChange={handleChange} />}

                <div className="d-flex justify-content-between mt-4">
                    {currentPage > 1 && (
                        <button type="button" className="btn btn-secondary" onClick={handlePrevious}>
                            Previous
                        </button>
                    )}
                    {currentPage < 3 && (
                        <button type="button" className="btn btn-primary ms-auto" onClick={handleNext}>
                            Next
                        </button>
                    )}
                    {currentPage === 3 && (
                        <button type="submit" className="btn btn-success ms-auto">
                            Submit
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
};

export default MultiPageForm;

import React, { useState } from 'react';
 

const Page3 = ({ formData, handleChange, handleNext, handlePrevious }) => {
    const [errors, setErrors] = useState({});
 

    const validate = () => {
        const newErrors = {};
        if (!formData.state) newErrors.state = 'State is required';
        if (!formData.dob) newErrors.dob = 'Date of Birth is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handlePageNext = () => {
        if (validate()) {
            alert('All data is correct! Pls click green color submit button to display All data next page. If You need to edit,  pls! click grey color previous button');
        }
    };

    return (
        <div className="container mt-4 p-4 rounded" style={{backgroundColor:"rgb(31, 150, 150)"}}>
            <h3 className="mb-3 text-white">Personal details :</h3>
            <div className="mb-3">
                <label htmlFor="state" className="form-label text-white">State</label>
                <input
                    type="text"
                    id="state"
                    name="state"
                    value={formData.state || ''}
                    onChange={handleChange}
                    placeholder="Enter state"
                    className="form-control"
                />
                {errors.state && <div className="text-danger">{errors.state}</div>}
            </div>


            <div className="mb-3">
                <label htmlFor="dob" className="form-label text-white">Date of Birth</label>
                <input
                    type="text"
                    id="dob"
                    name="dob"
                    value={formData.dob || ''}
                    onChange={handleChange}
                    placeholder="Enter Date of Birth"
                    className="form-control"
                />
                {errors.dob && <div className="text-danger">{errors.dob}</div>}
            </div>
            <button type="button" className="btn btn-light ms-2" onClick={handlePageNext}>check validation</button>
        </div>
    );
};

export default Page3;

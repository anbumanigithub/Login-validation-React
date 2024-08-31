import React, { useState } from 'react';
 

const Page2 = ({ formData, handleChange }) => {
    const [errors, setErrors] = useState({});
   
    const validate = () => {

        const newErrors = {};

        if (!formData.address) newErrors.address = 'Address is required';
        if (!formData.phoneNumber || !/^\d{10}$/.test(formData.phoneNumber)) newErrors.phoneNumber = 'Valid phone number is required';
        if (!formData.country) newErrors.country = 'Country is required';
        if (!formData.zipCode || !/^\d{6}$/.test(formData.zipCode)) newErrors.zipCode = 'Valid zip code is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleNext = () => {
        if (validate()) {
            alert('All data is correct! Pls click blue color Next button to redirect next page if need to edit click  grey color previous button');
        }
    };

    return (
        <div className="container mt-4 p-4 rounded" style={{backgroundColor:"rgb(31, 150, 150)"}}>
            <h3 className="mb-3 text-white">Personal details :</h3>
            <div className="mb-3">
                <label htmlFor="address" className="form-label text-white">Address</label>
                <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address || ''}
                    onChange={handleChange}
                    placeholder="Enter your address"
                    className="form-control"
                />
                {errors.address && <div className="text-danger">{errors.address}</div>}
            </div>
            <div className="mb-3">
                <label htmlFor="phoneNumber" className="form-label text-white">Phone Number</label>
                <input
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber || ''}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className="form-control"
                />
                {errors.phoneNumber && <div className="text-danger">{errors.phoneNumber}</div>}
            </div>
            <div className="mb-3">
                <label htmlFor="country" className="form-label text-white">Country</label>
                <input
                    type="text"
                    id="country"
                    name="country"
                    value={formData.country || ''}
                    onChange={handleChange}
                    placeholder="Enter your country"
                    className="form-control"
                />
                {errors.country && <div className="text-danger">{errors.country}</div>}
            </div>
            <div className="mb-3">
                <label htmlFor="zipCode" className="form-label text-white">Zip Code</label>
                <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    value={formData.zipCode || ''}
                    onChange={handleChange}
                    placeholder="Enter your zip code"
                    className="form-control"
                />
                {errors.zipCode && <div className="text-danger">{errors.zipCode}</div>}
            </div>
            <div className="d-flex justify-content-between">
                <button type="button" className="btn btn-light" onClick={handleNext}>Check Validation</button>
            </div>
        </div>
    );
};

export default Page2;

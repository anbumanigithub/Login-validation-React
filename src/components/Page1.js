import React, { useState } from 'react'; 
const Page1 = ({ formData, handleChange }) => {
    const [errors, setErrors] = useState({});
    const validate = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid email is required';
        if (!formData.age || formData.age <=-1) newErrors.age = 'Age must be a positive number';
        if (!formData.city) newErrors.city = 'City is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length ===0;
    };
    
    const handleNext = () => {
        if (validate()) {
          
            alert('All data is correct! Pls click blue color next button to redirect next page');
        
        }
    };

    return (
    <div className="container mt-4 p-4 rounded" style={{ backgroundColor:"rgb(31, 150, 150)"}}>
            <h3 className="mb-3 text-white">Personal details :</h3>
            <div className="mb-3">
                <label htmlFor="name" className="form-label text-white">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name || ''}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="form-control"
                />
                {errors.name && <div className="text-danger">{errors.name}</div>}

            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label text-white">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email || ''}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="form-control"
                />
                {errors.email && <div className="text-danger">{errors.email}</div>}
            </div>
            <div className="mb-3">
                <label htmlFor="age" className="form-label text-white">Age</label>
                <input
                    type="number"
                    id="age"
                    name="age"
                    value={formData.age || ''}
                    onChange={handleChange}
                    placeholder="Enter your age"
                    className="form-control"
                />
                {errors.age && <div className="text-danger">{errors.age}</div>}
            </div>
            <div className="mb-3">
                <label htmlFor="city" className="form-label text-white">City</label>
                <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city || ''}
                    onChange={handleChange}
                    placeholder="Enter your city"
                    className="form-control"
                />
                {errors.city && <div className="text-danger">{errors.city}</div>}
            </div>
            <button type="button" className="btn btn-light" onClick={handleNext}>Check validation</button>
        </div>
    );
};

export default Page1;

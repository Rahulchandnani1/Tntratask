import React, { useState, useEffect } from 'react';
import "./App.css";
const EditForm = ({ user, updateUser, onCancel }) => {
    const [editedUser, setEditedUser] = useState({ ...user });

    useEffect(() => {
        setEditedUser({ ...user });
    }, [user]);

    const handleSubmit = (e) => {
        e.preventDefault();
        updateUser(editedUser);
        onCancel();
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedUser({ ...editedUser, [name]: value });
    };

    return (<div className='userlis'>
        <form onSubmit={handleSubmit}>
            <div className='inputfield1'>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={editedUser.name}
                    onChange={handleInputChange}
                />
            </div>

            <div className='inputfield1'>
                <label htmlFor="age">Age:</label>
                <input
                    type="text"
                    id="age"
                    name="age"
                    value={editedUser.age}
                    onChange={handleInputChange}
                />
            </div>

            <div className='inputfield1'>
                <label htmlFor="city">City:</label>
                <input
                    type="text"
                    id="city"
                    name="city"
                    value={editedUser.city}
                    onChange={handleInputChange}
                />
            </div>

            <div className='inputfield1'>
                <label htmlFor="country">Country:</label>
                <input
                    type="text"
                    id="country"
                    name="country"
                    value={editedUser.country}
                    onChange={handleInputChange}
                />
            </div>

            <button type="submit">Update User</button>
            <button type="button" onClick={onCancel}>Cancel</button>
        </form>
    </div>);
};

export default EditForm;

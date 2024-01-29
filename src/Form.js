import React, { useState } from 'react';
import "./App.css";
const Form = ({ addUser }) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

       
        if (!name.trim() || !age.trim() || !city.trim() || !country.trim()) {
            alert('Please fill in all fields.');
            return;
        }

       
        const user = { name, age, city, country, id: new Date().getTime() };
        addUser(user);

        
        setName('');
        setAge('');
        setCity('');
        setCountry('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className='inputfield'>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div className='inputfield'>
                <label htmlFor="age">Age:</label>
                <input
                    type="number"
                    id="age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
            </div>

            <div className='inputfield'>
                <label htmlFor="city">City:</label>
                <select
                    id="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                >
                    <option value="">Select City</option>
                    <option value="New York">New York</option>
                    <option value="Ajmer">Ajmer</option>
                    <option value="Jaipur">Jaipur</option>
                    <option value="London">London</option>
                    <option value="Tokyo">Tokyo</option>
                    {/* Add more cities as needed */}
                </select>
            </div>

            <div className='inputfield'>
                <label htmlFor="country">Country:</label>
                <select
                    id="country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                >
                    <option value="">Select Country</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                    <option value="India">India</option>
                    <option value="Canada">Canada</option>
                    <option value="Japan">Japan</option>
                    {/* Add more countries as needed */}
                </select>
            </div>

            <button type="submit">Add User</button>
        </form>
    );
};

export default Form;

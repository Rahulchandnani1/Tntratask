import React, { useState } from 'react';
import InfiniteScroll from './InfiniteScroll';
const UserList = ({ users, deleteUser, editUser, duplicateUser, insc }) => {

    const [product, setproduct] = useState(false);
    const productpage = () => { setproduct(false); }
    return (<>{product ? <InfiniteScroll prod={productpage} /> : <div className='userlis'>
        <button className='back' onClick={insc}><i class="arrow left"></i>Back to Home Page</button>
        <table className="userlist">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>City</th>
                    <th>Country</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.age}</td>
                        <td>{user.city}</td>
                        <td>{user.country}</td>
                        <td>
                            <button onClick={() => editUser(user.id)}>Edit</button>
                            <button onClick={() => deleteUser(user.id)}>Delete</button>
                            <button onClick={() => duplicateUser(user.id)}>Duplicate</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        <button onClick={() => { setproduct(true) }}>Product List Page</button></div>
    }</>
    );
};

export default UserList;

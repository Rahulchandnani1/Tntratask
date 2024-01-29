import React, { useState } from 'react';
import Form from './Form';
import UserList from './UserList';
import EditForm from './EditForm';


const App = () => {
  const [users, setUsers] = useState([]);
  const [inscroll, setinscroll] = useState(false);
  const [editingUserId, setEditingUserId] = useState(null);

  const addUser = (user) => {
    setUsers([...users, { ...user, id: new Date().getTime() }]);
    setinscroll(true);
  };
  const home = () => {
    setinscroll(false);
  };
  const deleteUser = (userId) => {
    setUsers(users.filter((user) => user.id !== userId));
  };

  const editUser = (userId) => {
    setEditingUserId(userId);
  };

  const updateUser = (editedUser) => {
    setUsers(users.map((user) => (user.id === editingUserId ? editedUser : user)));
    setEditingUserId(null);
  };

  const cancelEdit = () => {
    setEditingUserId(null);
  };

  const duplicateUser = (userId) => {
    const userToDuplicate = users.find((user) => user.id === userId);

    if (userToDuplicate) {
      const duplicatedUser = { ...userToDuplicate, id: new Date().getTime() };
      setUsers([...users, duplicatedUser]);
    }
  };

  return (
    <div className='App'>
      <p className='title'>Second round       Task</p>
      {!inscroll ?
        <Form addUser={addUser} /> : <>
          <UserList users={users} insc={home} deleteUser={deleteUser} editUser={editUser} duplicateUser={duplicateUser} />

          {/* Display edit form when editing */}
          {editingUserId && (
            <div>
              <h2>Edit User</h2>
              <EditForm
                user={users.find((user) => user.id === editingUserId)}
                updateUser={updateUser}
                onCancel={cancelEdit}
              />
            </div>
          )}

        </>}
    </div>
  );
};

export default App;

import React from 'react';

const UsersList = ({ users, deleteUser, selectUser, setIsShowing }) => {

    return (
      <>
      <h1 className='users'>USERS</h1>
      <ul className="users-list">
        {users.map((user) => (
          <div key={user.id}>
            <ul>
              <div className='info-user'>
                <h3>{user.first_name} {user.last_name}</h3>
                <p>
                  <b>Email: </b> {user.email}
                </p>
                <p>
                  <b>Fecha de nacimiento: </b> {user.birthday}
                </p>
              </div>
              <div className='user-buttons'>
                <button onClick={() => {
                  selectUser(user)
                  setIsShowing(true)
                  }}>Editar</button>
                <button onClick={() => deleteUser(user.id)} >Eliminar</button>
              </div>
            </ul>
          </div>
        ))}
      </ul>
      </>
    );
  };
  
export default UsersList;


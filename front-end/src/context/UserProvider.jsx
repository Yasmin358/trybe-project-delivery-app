import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import UserContext from './UserContext';

function UserProvider({ children }) {
  const [user, setUser] = useState('X');

  const getUser = () => {
    const userKey = localStorage.getItem('user');
    // if (!userKey) {
    //   const initialState = 'Cliente Zé Birita';
    //   return initialState;
    // }
    const parseUserKey = JSON.parse(userKey);
    const userName = parseUserKey.name;
    setUser(userName);
    // const initialState = userName;
    // return initialState;
  };

  // const userKey = localStorage.getItem('user');
  // console.log(userKey);
  // const parseUserKey = JSON.parse(userKey);
  // const userName = parseUserKey.name;
  // console.log(userName);
  // const initialState = userName;

  // const [user, setUser] = useState(getUser);

  const context = useMemo(() => ({
    user, setUser, getUser,
  }), [user]);

  return (
    <UserContext.Provider value={ context }>
      { children }
    </UserContext.Provider>
  );
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserProvider;

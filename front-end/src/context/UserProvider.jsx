import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import UserContext from './UserContext';

function UserProvider({ children }) {
  const [user, setUser] = useState('');

  const getUser = () => {
    const userKey = localStorage.getItem('user');
    if (!userKey) {
      setUser('');
    }
    const parseUserKey = JSON.parse(userKey);
    const userName = parseUserKey.name;
    setUser(userName);
  };

  // const userKey = localStorage.getItem('user');
  // console.log(userKey);
  // const parseUserKey = JSON.parse(userKey);
  // const userName = parseUserKey.name;
  // console.log(userName);
  // const initialState = userName;

  const context = useMemo(() => ({
    user, getUser,
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

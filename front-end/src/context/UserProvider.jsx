import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import UserContext from './UserContext';

function UserProvider({ children }) {
  const [user, setUser] = useState('X');

  const getUser = () => {
    const userKey = localStorage.getItem('user');
    const parseUserKey = JSON.parse(userKey);
    const userName = parseUserKey.name;
    setUser(userName);
  };

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

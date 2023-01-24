import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import UserContext from './UserContext';

function UserProvider({ children }) {
  const userKey = localStorage.getItem('user');
  const parseUserKey = JSON.parse(userKey);
  const userName = parseUserKey.name;
  const initialState = userName;

  const [user, setUser] = useState(initialState);

  const context = useMemo(() => ({
    user, setUser,
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

import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import UserContext from './UserContext';

function UserProvider({ children }) {
  const getUser = () => {
    const userKey = localStorage.getItem('user');
    if (!userKey) {
      const initialState = 'John Doe';
      return initialState;
    }
    const parseUserKey = JSON.parse(userKey);
    const userName = parseUserKey.name;
    const initialState = userName;
    return initialState;
  };

  const [user, setUser] = useState(getUser);

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

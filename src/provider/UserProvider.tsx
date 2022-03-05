import React, { FunctionComponent, useState } from 'react';
import UserContext from 'context/user';

const UserProvider: FunctionComponent = (props) => {
  const { children } = props;
  const [mid, setMid] = useState<string>();
  return (
    <UserContext.Provider value={{ mid, setMid }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

import React, { createContext } from 'react';

type User = {
  mid?: string;
  setMid?: React.Dispatch<React.SetStateAction<string | undefined>>;
};
const UserContext = createContext<User>({});

export default UserContext;

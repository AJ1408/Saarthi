import React from 'react'

export const UserDataContext = React.createContext();

const UserContext = ({children}) => {
  const [user , setUser] = React.useState({
    email : '',
    fullname: {
        firstName : '',
        lastName : ''
    }
  });

  return (
    <UserDataContext.Provider value={[user,setUser]}>
      {children}
    </UserDataContext.Provider>
  )
}

export default UserContext

const { createContext, useState, useEffect } = require('react');

export const Context = createContext();

export default function ContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState(null);

  const addToUser = (data) => {
    console.log(data);
  };

  useEffect(() => {
    if (localStorage.getItem('userInfo')) {
      setUser(JSON.parse(localStorage.getItem('userInfo')));
    }
  }, []);

  const authUser = (data) => {
    localStorage.setItem(
      'userInfo',
      JSON.stringify({
        ...data,
      })
    );
    setUser(data);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('userInfo');
  };

  const adminLogin = (data) => {
    if (data.password === '1791') {
      setAdmin({
        name: 'Nikhil Dev',
      });
    }
  };
  return (
    <Context.Provider
      value={{
        addToUser,
        authUser,
        user,
        logout,
        adminLogin,
        admin,
      }}
    >
      {children}
    </Context.Provider>
  );
}

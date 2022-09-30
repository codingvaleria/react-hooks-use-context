import React, { useState } from "react";

// create the context
const UserContext = React.createContext();

// create a provider component
function UserProvider({ children }) {
  // setting up the context value to be stateful
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState("dark");
  return (
    <UserContext.Provider value={{ user, setUser, theme, setTheme }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };

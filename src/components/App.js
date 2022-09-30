// import the useContext hook
import React, { useContext } from "react";
import Header from "./Header";
import Profile from "./Profile";
// import the provider
import { UserContext } from "../context/user";

function App() {
  const { theme } = useContext(UserContext);
  return (
    <React.Fragment>
      {/* wrap components that need access to context data in the provider*/}
      <main className={theme}>
        <Header />
        <Profile />
      </main>
    </React.Fragment>
  );
}

export default App;

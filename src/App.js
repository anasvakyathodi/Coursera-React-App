import React from "react";
import MenuContextProvider from "./context/MenuContext";
import Main from "./components/MainComponent";
import "./App.css";

function App() {
  return (
    <div className="App">
      <MenuContextProvider>
        <Main />
      </MenuContextProvider>
    </div>
  );
}

export default App;

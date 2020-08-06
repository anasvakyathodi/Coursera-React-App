import React from "react";
import MenuContextProvider from "./context/MenuContext";
import { BrowserRouter } from "react-router-dom";
import Main from "./components/MainComponent";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MenuContextProvider>
          <Main />
        </MenuContextProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;

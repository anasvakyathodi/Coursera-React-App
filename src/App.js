import React from "react";
import MenuContextProvider from "./context/MenuContext";
import { BrowserRouter } from "react-router-dom";
import Main from "./components/MainComponent";
import "./App.css";
import { Provider } from "react-redux";
import { ConfigureStore } from "./Redux/configureStore";
const store = ConfigureStore();
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MenuContextProvider>
          <Provider store={store}>
            <Main />
          </Provider>
        </MenuContextProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;

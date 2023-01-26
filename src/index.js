import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
// import cursor context provider
import CursorProvider from "./context/CursorContext";

ReactDOM.createRoot(document.getElementById("root")).render(
 
    <React.StrictMode>
      <CursorProvider>
      <App />
      </CursorProvider>
    
  </React.StrictMode>
  
);

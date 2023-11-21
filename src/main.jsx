import React from "react";
import ReactDOM from "react-dom/client";
//import { FirstApp } from "./FirstApp";
import "./styles.css";
import { CountApp } from "./CountApp";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CountApp  value={10} />
    </React.StrictMode>
)


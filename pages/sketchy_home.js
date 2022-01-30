import React from "react";
import ReactDOM from "react-dom";
import { WiredButton, WiredCard, WiredInput } from "wired-elements-react";

import "../assets/CSS/sketchy_home.css"

function App() {
    return (
        <main>
            <WiredCard elevation={5}>
                <h1>Demo</h1>
            </WiredCard>
        </main>
    )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
import React, { useState } from "react";
import RustCalculator from "./components/RustCalculator";
import TextToShader from "./components/TextToShader";  // Import the new component

function App() {
    const [activeTab, setActiveTab] = useState("calculator");
    console.log("App component rendering");

    return (
        <div>
            <h1>Two-Tab Application</h1>
            <div className="tabs">
                <button
                    className={activeTab === "calculator" ? "active" : ""}
                    onClick={() => setActiveTab("calculator")}
                >
                    Rust Calculator
                </button>
                <button
                    className={activeTab === "shader" ? "active" : ""}
                    onClick={() => setActiveTab("shader")}
                >
                    Text-to-Shader
                </button>
            </div>
            <div className="tab-content">
                {activeTab === "calculator" && <RustCalculator />}
                {activeTab === "shader" && <TextToShader />}  {/* Render the TextToShader component here */}
            </div>
        </div>
    );
}

export default App;

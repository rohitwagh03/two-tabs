import React, { useState } from "react";

const rustWasm = import("../wasm/rust_calculator/pkg");

const RustCalculator = () => {
    
    const [expression, setExpression] = useState("");
    const [result, setResult] = useState("");

    const calculate = async () => {
        try {
            const wasm = await rustWasm;
            if (wasm) {
                console.log("WASM module loaded successfully", wasm);
                const res = wasm.evaluate_expression(expression);
                setResult(res);
            } else {
                console.error("Failed to load WASM module");
                setResult("Error: WASM module not loaded");
            }
        } catch (err) {
            console.error("Error during WASM module loading:", err);
            setResult("Error evaluating expression");
        }
    };


    return (
        <div>
            <h2>Rust Calculator</h2>
            <input
                type="text"
                value={expression}
                onChange={(e) => setExpression(e.target.value)}
                placeholder="Enter expression (e.g., 2+2)"
            />
            <button onClick={calculate}>Calculate</button>
            <p>Result: {result}</p>
        </div>
    );
};

export default RustCalculator;

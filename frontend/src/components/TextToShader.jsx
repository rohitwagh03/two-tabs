import React, { useState } from "react";

const TextToShader = () => {
    const [description, setDescription] = useState("");
    const [shaderCode, setShaderCode] = useState("");
    const [error, setError] = useState("");

    const generateShader = async () => {
        try {
            const response = await fetch("http://localhost:4000/api/generate-shader", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ description }),
            });
            const data = await response.json();

            if (data.shader) {
                setShaderCode(data.shader);
                setError("");
            } else {
                setError("Failed to generate shader");
            }
        } catch (err) {
            setError("Error connecting to the backend");
        }
    };

    return (
        <div>
            <h2>Text-to-Shader</h2>
            <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Describe the shader (e.g., rotating cube)"
            />
            <button onClick={generateShader}>Generate Shader</button>
            <canvas id="shaderCanvas"></canvas>
            <pre>{shaderCode}</pre>
            {error && <p className="error">{error}</p>}
        </div>
    );
};

export default TextToShader;

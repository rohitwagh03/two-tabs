use wasm_bindgen::prelude::*;
use meval::eval_str;

#[wasm_bindgen]
pub fn evaluate_expression(expression: &str) -> String {
    // Log the input expression for debugging;

    eval_str(expression)
        .map(|result| result.to_string()) // Convert f64 result to String
        .unwrap_or_else(|err| {
            // Log the error for debugging
           
            "Error".to_string()
        })
}

#[wasm_bindgen(start)]
pub fn run() -> Result<(), JsValue> {
    // Optional initialization logic
    Ok(())
}

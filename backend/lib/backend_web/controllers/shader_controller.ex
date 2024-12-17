defmodule BackendWeb.ShaderController do
  use BackendWeb, :controller

  def generate(conn, %{"description" => description}) do
    # Simulating LLM communication for now
    shader_code = """
    // GLSL Shader for "#{description}"
    void main() {
      gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0); // Red color
    }
    """

    # Send response back to frontend
    json(conn, %{
      "shader_code" => shader_code
    })
  end
end

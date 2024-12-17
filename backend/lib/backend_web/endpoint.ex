defmodule BackendWeb.Endpoint do
  use Phoenix.Endpoint, otp_app: :backend

  # Enable CORS here
  plug CORSPlug, origin: "http://localhost:3000"

  # You can add other plugs here if needed
  plug Plug.Telemetry, event_prefix: [:phoenix, :endpoint]
  plug Phoenix.LiveDashboard.RequestLogger, param_key: "request_logger", cookie_key: "request_logger"

  plug BackendWeb.Router
end

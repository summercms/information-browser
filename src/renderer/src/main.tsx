import "./styles/main.css"

import { authConfigManager } from "@hono/auth-js/react"
import { ClickToComponent } from "click-to-react-component"
import * as React from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider } from "react-router-dom"

import { RootProviders } from "./providers/root-providers"
import { router } from "./router"

authConfigManager.setConfig({
  baseUrl: import.meta.env.VITE_API_URL,
  basePath: "/auth",
  credentials: "include",
})

ReactDOM.createRoot(document.querySelector("#root") as HTMLElement).render(
  <React.StrictMode>
    <RootProviders>
      <RouterProvider router={router} />
      <ClickToComponent />
    </RootProviders>
  </React.StrictMode>,
)

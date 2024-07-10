import React from "react"
import { createRoot } from "react-dom/client"

import App from "./App"

const root = createRoot(document.getElementById("root") as HTMLElement)

root.render(
	<React.StrictMode>
			<div>
      <h1>React Hooks</h1>
      <p>Open the console to see the logs</p>

      <App />

    </div>
	</React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "./../node_modules/nhsuk-frontend/dist/nhsuk.css"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

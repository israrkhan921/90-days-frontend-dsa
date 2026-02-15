import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import ArrayProvider from "./context/ArrayProvider";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ArrayProvider>
      <App />
    </ArrayProvider>
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Amplify } from 'aws-amplify'
import amplifyConfig from './amplify-config.ts'
import './index.css'
import App from './App.jsx'

// Initialize Amplify with configuration
Amplify.configure(amplifyConfig)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

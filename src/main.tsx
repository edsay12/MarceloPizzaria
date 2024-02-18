import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <h1 className="text-3xl font-bold underline text-red-700">
      Hello world!
    </h1>
    <App />
  </React.StrictMode>,
)

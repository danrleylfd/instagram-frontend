import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Header from './components/Header'
import Routes from './routes'

function App() {
  console.log(process.env.API_URL)
  return (
    <BrowserRouter>
      <Header />
      <Routes />
   </BrowserRouter>
  )
}

export default App

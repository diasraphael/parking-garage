import React from 'react'
import './App.css'
import '@dnb/eufemia/style'
import Header from './components/common/Header'
import Content from './components/common/Content'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <div className="App">
      <div className="flex flex-row flex-wrap w-full">
        <Header></Header>
        <Content></Content>
      </div>
      <ToastContainer />
    </div>
  )
}

export default App

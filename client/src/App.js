import React from 'react'
import Header from './Component/Header'
import Main from './Component/Main'
import Hosts from './Component/Hosts'
import Emogi from './Component/Emogi'
import Hiring from './Component/Hiring'
import FindMaid from './Component/FindMaid'
import Footer from './Component/Footer'

const App = () => {
  return (
    <div className='overflow-hidden'>
      <Header />
      <Main />
      <Hosts />
      <Emogi />
      <Hiring />
      <FindMaid />
      <Footer />
    </div>
  )
}

export default App
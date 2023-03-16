import React from 'react'

import { Header } from 'widgets/index-header'
import MainSection from './sections/main-section'

function Home() {
  return (
    <>
      <Header />
      <main>
        <MainSection />
      </main>
    </>
  )
}

export default Home

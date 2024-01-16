import React from 'react'
import Header from './components/Header'
import { info } from './data'

function SocialInfo(props) {
  return (
    <li>
      <p>
        <strong>sf</strong>ss
      </p>
    </li>
  )
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section>
          <ul>
            <SocialInfo title="111" description="js" />
            <SocialInfo title="222" description="css" />
            <SocialInfo title="333" description="react" />
          </ul>
        </section>
      </main>
    </div>
  )
}

export default App

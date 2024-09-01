import { useState } from 'react'

// import './App.css'
import Signin from "./pages/authentication/Signin"
import Signup from "./pages/authentication/Signup"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Signin />
      {/* <Si gnUp/> */}

    </>
  )
}

export default App

import { useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import { Router } from './routers/router'
function App() {
  const [] = useState(0)

  return (
    <RouterProvider router={Router}/>
  )
}

export default App

import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Home from './Pages/Home/Home'
import QuestionPage from './Pages/QuestionPage/QuestionPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="questions" element={<QuestionPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import LoginScreen from './screens/login'
import SplashScreen from './screens/intro'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/login" element={<LoginScreen />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Profile from './pages/Profile';
import SignUp from './pages/SignUp';
import Signin from './pages/Signin';
import Home from './pages/Home';
import About from './pages/About';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/sign-in" element={<Signin/>} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

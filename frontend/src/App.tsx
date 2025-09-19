import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Header} from './widgets/Header/Header.tsx'
import {LoginPage} from './pages/LoginPage.tsx';
import {TradingPage} from './pages/TradingPage.tsx';


function App() {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" Component={LoginPage} />
            <Route path="/trading" Component={TradingPage} />
        </Routes>
    </BrowserRouter>
  )
}

export default App

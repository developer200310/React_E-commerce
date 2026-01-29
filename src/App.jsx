import Home from './pages/Home.jsx'
import Checkout from './pages/Checkout.jsx'
import Orders from './pages/Orders.jsx'
import Tracking from './pages/Tracking.jsx'
import Header from './components/Header.jsx'
import { CartProvider } from './context/CartContext.jsx'

import { Routes, Route } from 'react-router-dom'
import './styles/shared/general.css'

function App() {
  return (
    <CartProvider>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/tracking" element={<Tracking />} />
        </Routes>
      </>
    </CartProvider>
  )
}

export default App

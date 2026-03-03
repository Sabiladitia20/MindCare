import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HotlineButton from './components/HotlineButton'
import Home from './pages/Home'
import About from './pages/About'
import Artikel from './pages/Artikel'
import Contact from './pages/Contact'
import Kuis from './pages/Kuis'
import Layanan from './pages/Layanan'

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/artikel" element={<Artikel />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/kuis" element={<Kuis />} />
        <Route path="/layanan" element={<Layanan />} />
      </Routes>
    </AnimatePresence>
  )
}

function ScrollToTop() {
  const { pathname } = useLocation()

  if (typeof window !== 'undefined') {
    window.scrollTo(0, 0)
  }

  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <AnimatedRoutes />
        </main>
        <Footer />
        <HotlineButton />
      </div>
    </BrowserRouter>
  )
}

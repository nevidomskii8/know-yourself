import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { ServicesPage } from './pages/ServicesPage'
import { ActivitiesPage } from './pages/ActivitiesPage'
import { ContactPage } from './pages/ContactPage'
import { Layout } from './components/Layout'
import './App.css'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/activities" element={<ActivitiesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<div>

            <h1> Hello World</h1>
            
          </div>} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App

import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Error from './pages/Error'
import Header from './components/Header'
import Sidebar from './components/SideBar'
import SourceProvider from './utils/context'
import './App.css'

function App() {
  return (
    <Router>
      <Header />
      <div className="mainContent">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Navigate to="user/12" />} />
          <Route
            path="user/:userId"
            element={
              <SourceProvider>
                <Dashboard />
              </SourceProvider>
            }
          />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
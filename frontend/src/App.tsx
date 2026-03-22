import { Navigate, Route, Routes } from 'react-router'
import LoginPage from './auth/LoginPage'
import AuthCallbackPage from './auth/AuthCallbackPage'
import ProtectedRoute from './auth/ProtectedRoute'
import DashboardPage from './features/dashboard/DashboardPage'

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/callback" element={<AuthCallbackPage />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        {/* Feature-Routen hier ergänzen */}
      </Route>
    </Routes>
  )
}

export default App

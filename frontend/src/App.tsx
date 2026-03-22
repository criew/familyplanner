import { Navigate, Route, Routes } from 'react-router'
import LoginPage from './auth/LoginPage'
import AuthCallbackPage from './auth/AuthCallbackPage'
import ProtectedRoute from './auth/ProtectedRoute'

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/callback" element={<AuthCallbackPage />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        {/* Feature-Routen hier ergänzen */}
      </Route>
    </Routes>
  )
}

export default App

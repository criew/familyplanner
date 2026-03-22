import { Box, CircularProgress, Typography } from '@mui/material'
import { useAuth } from 'react-oidc-context'
import { Navigate } from 'react-router'

export default function AuthCallbackPage() {
  const auth = useAuth()

  if (auth.isAuthenticated) {
    return <Navigate to="/" replace />
  }

  if (auth.error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <Typography color="error">Anmeldung fehlgeschlagen. Bitte versuche es erneut.</Typography>
      </Box>
    )
  }

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
      <CircularProgress />
    </Box>
  )
}

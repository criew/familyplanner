import { Box, Button, Card, CardContent, Typography } from '@mui/material'
import { useAuth } from 'react-oidc-context'
import { Navigate } from 'react-router'

export default function LoginPage() {
  const auth = useAuth()

  if (auth.isAuthenticated) {
    return <Navigate to="/" replace />
  }

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
      <Card sx={{ minWidth: 320 }}>
        <CardContent
          sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}
        >
          <Typography variant="h5">familyplanner</Typography>
          <Button variant="contained" size="large" onClick={() => auth.signinRedirect()} fullWidth>
            Mit Keycloak anmelden
          </Button>
        </CardContent>
      </Card>
    </Box>
  )
}

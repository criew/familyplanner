import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { ThemeProvider } from '@mui/material'
import { AuthProvider } from 'react-oidc-context'
import { oidcConfig } from './auth/oidcConfig'
import AuthTokenSync from './auth/AuthTokenSync'
import App from './App'
import theme from './theme'

const onSigninCallback = () => {
  window.history.replaceState({}, document.title, window.location.pathname)
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider {...oidcConfig} onSigninCallback={onSigninCallback}>
      <AuthTokenSync />
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>,
)

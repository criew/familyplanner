import { vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router'
import { ThemeProvider } from '@mui/material'
import theme from './theme'
import App from './App'

vi.mock('react-oidc-context', () => ({
  useAuth: () => ({
    isAuthenticated: true,
    isLoading: false,
    user: {
      access_token: 'mock-token',
      profile: { sub: '1', name: 'Test User' },
    },
    signinRedirect: vi.fn(),
    signoutRedirect: vi.fn(),
    error: null,
  }),
  AuthProvider: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}))

describe('App', () => {
  it('renders without crashing', () => {
    render(
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>,
    )
    expect(document.body).toBeTruthy()
  })

  it('redirects authenticated users away from login', () => {
    window.history.pushState({}, '', '/login')
    render(
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>,
    )
    expect(screen.queryByText('Mit Keycloak anmelden')).not.toBeInTheDocument()
  })
})

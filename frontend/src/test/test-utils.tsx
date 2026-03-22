import { vi } from 'vitest'
import { render, RenderOptions } from '@testing-library/react'
import { BrowserRouter } from 'react-router'
import { ThemeProvider } from '@mui/material'
import theme from '../theme'

vi.mock('react-oidc-context', () => ({
  useAuth: () => ({
    isAuthenticated: true,
    isLoading: false,
    user: {
      access_token: 'mock-token',
      profile: { sub: '1', name: 'Test User', preferred_username: 'testuser' },
    },
    signinRedirect: vi.fn(),
    signoutRedirect: vi.fn(),
    error: null,
  }),
  AuthProvider: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}))

function AllProviders({ children }: { children: React.ReactNode }) {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </BrowserRouter>
  )
}

function customRender(ui: React.ReactElement, options?: Omit<RenderOptions, 'wrapper'>) {
  return render(ui, { wrapper: AllProviders, ...options })
}

export * from '@testing-library/react'
export { customRender as render }

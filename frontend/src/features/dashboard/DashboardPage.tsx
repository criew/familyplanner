import { Box, Typography } from '@mui/material'
import NavBar from '../../components/NavBar'

export default function DashboardPage() {
  return (
    <>
      <NavBar />
      <Box sx={{ p: 3 }}>
        <Typography variant="h4">Willkommen im Familienplaner</Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          Hier erscheinen bald eure gemeinsamen Termine und Aufgaben.
        </Typography>
      </Box>
    </>
  )
}

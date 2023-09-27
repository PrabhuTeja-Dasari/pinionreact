import type { ColorScheme } from '@mantine/core'
import { ColorSchemeProvider, MantineProvider } from '@mantine/core'
import { useHotkeys, useLocalStorage } from '@mantine/hooks'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Layout from '@/components/Layout/Layout'
import {
  AddEmployee,
  Dashboard,
  EditEmployee,
  Employee,
  NotFound
} from '@/screens'

function App() {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true
  })

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))

  useHotkeys([['mod+J', () => toggleColorScheme()]])

  return (
    <MantineProvider
      theme={{ colorScheme, primaryColor: 'blue' }}
      withGlobalStyles
      withNormalizeCSS
    >
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <Router>
          <Layout>
            <Routes>
              <Route index element={<Dashboard />} />
              <Route path="/Employee" element={<Employee />} />
              <Route path="/AddEmployee" element={<AddEmployee />} />
              <Route path="/EditEmployee" element={<EditEmployee />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </Router>
      </ColorSchemeProvider>
    </MantineProvider>
  )
}

export default App

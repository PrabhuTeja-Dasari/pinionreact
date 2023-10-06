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
  NotFound,
  Performance,
  TimeOff,
  TimeTracking,
  CompanyDetails,
  Documents,
 
  
} from '@/screens'
import ViewEmployee from "@/screens/Employee/View-Employee";
import DismissEmployee from '@/screens/Employee/DismissEmployee'
import Document from "@/screens/Employee/Document"

function App() {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'Pinion-Color-Scheme',
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
              <Route path="/TeamMembers" element={<Employee />} />
              <Route path="/AddTeamMember" element={<AddEmployee />} />
              <Route path="/EditTeamMember" element={<EditEmployee />} />
              <Route path='/Performance' element={<Performance/>}/>
              <Route path='/TimeOff' element={<TimeOff/>}/>
              <Route path='/TimeTracking' element={<TimeTracking/>}/>
              <Route path='/CompanyDetails' element={<CompanyDetails/>}/>
              <Route path='/Documents' element={<Documents/>}/>
              <Route path='/ViewTeamMember' element ={<ViewEmployee/>}/>
              <Route path ='/Document' element={<Document/>}/>
              <Route path='/DismissTeamMember' element={<DismissEmployee/>}/>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </Router>
      </ColorSchemeProvider>
    </MantineProvider>
  )
}

export default App

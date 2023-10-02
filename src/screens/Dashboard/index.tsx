import { Stack,Card } from '@mantine/core'

import { StatsGrid } from '@/components/common'
import { statCards } from '@/utils/data'
import '/src/assets/css/hover-min.css'
import axios from 'axios'
function Home() {
  return (
    <div className="grid ">
      <Stack ml="xl" mt="xl" >
        <StatsGrid  data={statCards}   />

      </Stack>
    </div>
  )
}

export default Home

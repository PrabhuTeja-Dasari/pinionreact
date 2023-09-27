import { Stack } from '@mantine/core'

import { StatsGrid } from '@/components/common'
import { statCards } from '@/utils/data'

function Home() {
  return (
    <div className="grid">
      <Stack ml="xl" mt="xl">
        <StatsGrid data={statCards} />
      </Stack>
    </div>
  )
}

export default Home

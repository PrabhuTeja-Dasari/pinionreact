import { createStyles, Group, Paper, SimpleGrid, Text } from '@mantine/core'

import type { StatCardType } from '@/types/component.type'
import { icons } from '@/utils/data'

const useStyles = createStyles((theme) => ({
  root: {},

  value: {
    fontSize: 24,
    fontWeight: 700,
    lineHeight: 1
  },

  diff: {
    lineHeight: 1,
    display: 'flex',
    alignItems: 'center'
  },

  icon: {
    color:
      theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[4]
  },

  title: {
    fontWeight: 700,
    textTransform: 'uppercase'
  }
}))

export default function StatsGrid({ data }: { data: StatCardType[] }) {
  const { classes } = useStyles()
  const stats = data.map((stat) => {
    const Icon = icons[stat.icon]

    return (
      <Paper withBorder p="md" radius="md" key={stat.title}>
        <Group position="apart">
          <Text size="xs" color="dimmed" className={classes.title}>
            {stat.title}
          </Text>
          <Icon className={classes.icon} size={22} stroke={1.5} />
        </Group>

        <Group align="flex-end" spacing="xs" mt={25}>
          <Text className={classes.value}>{stat.value}</Text>
          <Text
            color={stat.diff > 0 ? 'teal' : 'red'}
            size="sm"
            weight={500}
            className={classes.diff}
          ></Text>
        </Group>
      </Paper>
    )
  })
  return (
    <div className={classes.root}>
      <SimpleGrid
        cols={4}
        breakpoints={[
          { maxWidth: 'md', cols: 2 },
          { maxWidth: 'xs', cols: 1 }
        ]}
      >
        {stats}
      </SimpleGrid>
    </div>
  )
}

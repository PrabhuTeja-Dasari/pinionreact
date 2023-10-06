import {
  Box,
  Center,
  Group,
  SegmentedControl,
  useMantineColorScheme
} from '@mantine/core'
import { IconMoon, IconSun } from '@tabler/icons'
import { ActionIcon } from '@mantine/core';
import {  IconMoonStars } from '@tabler/icons';


export default function SegmentedToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';
  return (
    // <Group position="center" my="xl">
    //   <SegmentedControl
    //     value={colorScheme}
    //     onChange={(value: 'light' | 'dark') => toggleColorScheme(value)}
    //     data={[
    //       {
    //         value: 'light',
    //         label: (
    //           <Center>
    //             <IconSun size={16} stroke={1.5} />
    //             <Box ml={10}>Light</Box>
    //           </Center>
    //         )
    //       },
    //       {
    //         value: 'dark',
    //         label: (
    //           <Center>
    //             <IconMoon size={16} stroke={1.5} />
    //             <Box ml={10}>Dark</Box>
    //           </Center>
    //         )
    //       }
    //     ]}
    //   />
    // </Group>
    <ActionIcon
      variant="default"
      color={dark ? 'yellow' : 'blue'}
      onClick={() => toggleColorScheme()}
      title="Toggle color scheme"
    >
      {dark ? <IconSun size={18} /> : <IconMoonStars size={18} />}
    </ActionIcon>
  )
  
}

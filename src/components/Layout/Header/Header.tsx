import {
  Burger,
  Header,
  MediaQuery,
  useMantineColorScheme,
  useMantineTheme,
  Avatar    
} from '@mantine/core'
import React from 'react'
import './Header.css'

import Pinion from '@/assets/Pinion.svg'
import { ToggleButton } from '@/components/common'
import { Menu, Button, Text } from '@mantine/core';
import { IconSettings, IconSearch, IconPhoto, IconKey, IconUsers, IconLogout } from '@tabler/icons';


// import NavAction from '../NavAction/NavAction'

type HeaderBarType = {
  opened: boolean
  setOpened: React.Dispatch<React.SetStateAction<boolean>>
}

const HeaderBar: React.FC<HeaderBarType> = ({ opened, setOpened }) => {
  const { colorScheme } = useMantineColorScheme()
  const theme = useMantineTheme()
  return (
    
    <Header
      height={60}
      p="xs"
      display="flex"
      style={{ justifyContent: 'space-between', alignItems: 'center' }}
      className='header-container'
    >
      <img
        style={{
          mixBlendMode: colorScheme === 'light' ? 'darken' : 'exclusion',
          height: '50px',
          marginLeft: '21px'
        }}
        src={Pinion}
      />
      <MediaQuery largerThan="lg" styles={{ display: 'none' }}>
        
        <Burger
          opened={opened}
          onClick={() => setOpened((o) => !o)}
          size="sm"
          color={theme.colors.gray[7]}
     
        />
        
      </MediaQuery>
      
      {/* <div hidden w-full justify-end md:flex">
        <NavAction />
      </div> */}
      <div className="hidden md:block textcontainer" >
        <ToggleButton  />
        <Menu shadow="md" width={200}>
        <Menu.Target>
        <Avatar src={null} alt="no image here" id='avatars' className='text-container' />
        </Menu.Target>
        <Menu.Dropdown>
        <Menu.Item icon={<IconSettings size={14} />}>Settings</Menu.Item>
        <Menu.Item icon={<IconKey size={14} />}>Change Password</Menu.Item>
        <Menu.Item icon={<IconUsers size={14} />}>Profile</Menu.Item>
        <Menu.Item
          icon={<IconLogout size={14} color="red"   />}
        >
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
      </div>
       


    </Header>
  )
}

export default HeaderBar

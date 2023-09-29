import { Footer } from '@mantine/core'
import React from 'react'

const FooterBar = () => {
  return (
    <Footer height={60} p="md">
    <p className='text-right'>&copy; {new Date().getFullYear()} Pinion Services</p>
  </Footer>
  
  )
}

export default FooterBar

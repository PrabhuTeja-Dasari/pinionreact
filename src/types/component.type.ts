/* eslint-disable prettier/prettier */
import type { icons } from '@/utils/data'

export type StatCardType = {
  title: string
  icon: keyof typeof icons
  value: string
  diff: number
}

export type NavLinkItemType = {
  label: string
  link: string
}

export type NavLinkType = {
  label: string
  icon: any
  link?: string
  initiallyOpened?: boolean
  links?: NavLinkItemType[]
}

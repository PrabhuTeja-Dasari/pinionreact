import { IconLayoutDashboard, IconUser,IconBuilding,IconClockHour4 } from '@tabler/icons'

import type { NavLinkType } from '@/types/component.type'

export const navData: NavLinkType[] = [
  { label: 'Dashboard', icon: IconLayoutDashboard, link: '/' },
  {
    label: 'Company',
    icon: IconBuilding,
    links: [
      { label: 'Company Details', link: '/companydetails' },
      { label: 'Documents', link: '/documents' }
    ]
  },
  {
    label: 'People',
    icon: IconUser,
    links: [
      { label: 'Team Members', link: '/TeamMembers' },
      { label: 'Add Team Member', link: '/AddTeamMember' },
      
      { label: 'Performance', link: '/performance' }
    ]
  },
  {
    label: 'Time Tools',
    icon: IconClockHour4,
    links: [
      { label: 'Time Off', link: '/timeoff' },
      { label: 'Time Tracking', link: '/timetracking' }
    ]
  }
  // { label: 'Analytics', icon: IconPresentationAnalytics, link: '/analytics' },
  // { label: 'Orders', icon: IconFileAnalytics, link: '/orders' },
  // { label: 'Payments', icon: IconCurrencyRupee, link: '/payments' },
  // { label: 'Settings', icon: IconAdjustments, link: '/settings' },
]

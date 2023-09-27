import { IconGauge, IconUser } from '@tabler/icons'

import type { NavLinkType } from '@/types/component.type'

export const navData: NavLinkType[] = [
  { label: 'Dashboard', icon: IconGauge, link: '/' },
  {
    label: 'Employees',
    icon: IconUser,
    links: [
      { label: 'Add Employee', link: '/AddEmployee' },
      { label: 'Employee', link: '/Employee' }
    ]
  }
  // { label: 'Analytics', icon: IconPresentationAnalytics, link: '/analytics' },
  // { label: 'Orders', icon: IconFileAnalytics, link: '/orders' },
  // { label: 'Payments', icon: IconCurrencyRupee, link: '/payments' },
  // { label: 'Settings', icon: IconAdjustments, link: '/settings' },
]

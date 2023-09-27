import {
  IconBasket,
  IconCoin,
  IconDiscount2,
  IconReceipt2,
  IconStars,
  IconUserPlus
} from '@tabler/icons'

import type { StatCardType } from '@/types/component.type'

export const icons = {
  user: IconUserPlus,
  discount: IconDiscount2,
  receipt: IconReceipt2,
  coin: IconCoin,
  sales: IconBasket,
  order: IconStars
}

export const statCards: StatCardType[] = [
  {
    diff: 10,
    icon: 'user',
    title: 'Customers',
    value: '10'
  },
  {
    diff: 31,
    icon: 'order',
    title: 'Suppliers',
    value: '1,312'
  },
  {
    diff: 12,
    icon: 'sales',
    title: 'Accountants',
    value: '2,800'
  },
  {
    diff: 7,
    icon: 'sales',
    title: 'Legal Firms',
    value: '400'
  },
  {
    diff: 2,
    icon: 'sales',
    title: 'Employees',
    value: '400'
  },
  {
    diff: 3,
    icon: 'order',
    title: 'Packages',
    value: '500'
  },
  {
    diff: 6,
    icon: 'order',
    title: 'Agreements',
    value: '500'
  },
  {
    diff: 15,
    icon: 'order',
    title: 'Users',
    value: '800'
  }
]

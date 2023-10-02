import {
  IconBoxSeam,
  IconBusinessplan,
  IconCoin,
  IconGavel,
  IconNotes,
  IconReceipt2,
  IconTruckLoading,
  IconUser,
  IconUserPlus,
  IconUsers
} from '@tabler/icons'

import type { StatCardType } from '@/types/component.type';
import {useState,useEffect} from 'react';
import axios from 'axios';
export const icons = {
  user: IconUserPlus,
  discount: IconBusinessplan,
  receipt: IconReceipt2,
  coin: IconCoin,
  sales: IconBoxSeam,
  order: IconTruckLoading,
  legalfirms: IconGavel,
  employee: IconUsers,
  agreements: IconNotes,
  users: IconUser
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
    icon: 'discount',
    title: 'Accountants',
    value: '2,800'
  },
  {
    diff: 7,
    icon: 'legalfirms',
    title: 'Legal Firms',
    value: '400'
  },
  {
    diff: 2,
    icon: 'employee',
    title: 'Employees',
    value: '400'
  },
  {
    diff: 3,
    icon: 'sales',
    title: 'Packages',
    value: '500'
  },
  {
    diff: 6,
    icon: 'agreements',
    title: 'Agreements',
    value: '500'
  },
  {
    diff: 15,
    icon: 'users',
    title: 'Users',
    value: '800'
  }
]

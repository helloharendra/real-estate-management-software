import {
  BarChart3, Building2, CalendarDays, FileSignature, Handshake, Home, KeyRound, LayoutDashboard, Settings, UserCog, Users,
} from 'lucide-react'

export const app = {
  name: 'EstateDesk',
  tagline: 'Real Estate Management',
  logo: Building2,
  user: { name: 'Rajiv Malhotra', role: 'Director · Malhotra Realty' },
  searchPlaceholder: 'Search property, owner, lead…',
}

// Items with `to` are implemented in this demo; others are locked (full version).
export const nav = [
  {
    title: 'Business',
    items: [
      { label: 'Dashboard', to: '/', icon: LayoutDashboard },
      { label: 'Properties', to: '/properties', icon: Home },
      { label: 'Enquiries & Leads', to: '/leads', icon: Handshake, badge: '8' },
    ],
  },
  {
    title: 'Operations',
    items: [
      { label: 'Site Visits', icon: CalendarDays },
      { label: 'Bookings & Payments', icon: FileSignature },
      { label: 'Rentals & Tenants', icon: KeyRound },
      { label: 'Owners', icon: Users },
      { label: 'Agents & Commission', icon: UserCog },
    ],
  },
  {
    title: 'Admin',
    items: [
      { label: 'Reports', icon: BarChart3 },
      { label: 'Settings', icon: Settings },
    ],
  },
]

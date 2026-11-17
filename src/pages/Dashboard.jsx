import { Link } from 'react-router-dom'
import { CalendarDays, Handshake, Home, IndianRupee, Plus } from 'lucide-react'
import { Card, Hero, HeroStat, StatCard } from '../components/ui'
import { BarsChart, DonutChart } from '../components/Charts'
import { useContact } from '../components/ContactModal'
import { leads, properties, salesTrend, sources } from '../data'
import { priceLabel } from './Properties'

export default function Dashboard() {
  const { openContact } = useContact()
  return (
    <>
      <Hero
        eyebrow="Malhotra Realty"
        title="₹14.2 Cr in deals closing this month 🏡"
        subtitle="Manage listings, owners, enquiries, site visits and bookings in one place."
        side={<div className="grid grid-cols-2 gap-3"><HeroStat label="Site visits this week" value="23" /><HeroStat label="Hot leads" value="8" /></div>}
      >
        <button onClick={() => openContact('Add Property Listing')} className="btn bg-white text-brand-700 hover:bg-brand-50"><Plus className="h-4 w-4" /> Add property</button>
      </Hero>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Active listings" value="148" delta="9" icon={Home} />
        <StatCard label="New enquiries (Nov)" value="312" delta="18.4%" icon={Handshake} tone="sky" />
        <StatCard label="Site visits scheduled" value="23" icon={CalendarDays} tone="violet" />
        <StatCard label="Commission earned" value="₹38.6L" delta="24.0%" icon={IndianRupee} tone="emerald" />
      </div>
      <div className="mt-6 grid gap-6 xl:grid-cols-3">
        <Card title="Deals closed" subtitle="Sales vs rentals" className="xl:col-span-2">
          <BarsChart data={salesTrend} series={[{ key: 'sales', name: 'Sales' }, { key: 'rentals', name: 'Rentals' }]} />
        </Card>
        <Card title="Lead sources"><DonutChart data={sources} centerValue="312" centerLabel="Enquiries" /></Card>
      </div>
      <div className="mt-6 grid gap-6 xl:grid-cols-2">
        <Card title="Most viewed listings" action={<Link to="/properties" className="text-sm font-semibold text-brand-600">All properties</Link>}>
          <div className="space-y-3">
            {[...properties].sort((a, b) => b.views - a.views).slice(0, 4).map((p) => (
              <div key={p.id} className="flex items-center gap-4">
                <img src={p.img} alt="" className="h-14 w-20 rounded-xl object-cover" loading="lazy" />
                <div className="flex-1 text-sm"><p className="font-semibold text-slate-800">{p.title}</p><p className="text-xs text-slate-400">{p.location}</p></div>
                <div className="text-right text-sm"><p className="font-bold text-slate-900">{priceLabel(p)}</p><p className="text-xs text-slate-400">{p.views.toLocaleString()} views</p></div>
              </div>
            ))}
          </div>
        </Card>
        <Card title="Upcoming follow-ups" action={<Link to="/leads" className="text-sm font-semibold text-brand-600">Lead board</Link>}>
          <ul className="divide-y divide-slate-100">
            {leads.filter((l) => l.stage !== 'Closed').slice(0, 5).map((l) => (
              <li key={l.id} className="flex items-center justify-between py-3 text-sm">
                <div><p className="font-semibold text-slate-800">{l.name}</p><p className="text-xs text-slate-400">{l.interest}</p></div>
                <span className="rounded-lg bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-700">{l.next}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </>
  )
}

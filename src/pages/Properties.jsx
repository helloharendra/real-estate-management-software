import { useState } from 'react'
import { Bath, BedDouble, Eye, Heart, MapPin, Plus, Ruler } from 'lucide-react'
import { PageHeader, Segmented } from '../components/ui'
import { useContact } from '../components/ContactModal'
import { properties } from '../data'

export const priceLabel = (p) =>
  p.deal === 'Rent' ? `₹${(p.price / 1000).toFixed(0)}K/mo` : p.price >= 1e7 ? `₹${(p.price / 1e7).toFixed(2)} Cr` : `₹${(p.price / 1e5).toFixed(0)} L`

const statusStyle = { Available: 'bg-emerald-500', Negotiation: 'bg-amber-500', Booked: 'bg-slate-700' }

export default function Properties() {
  const { openContact } = useContact()
  const [deal, setDeal] = useState('All')
  const list = properties.filter((p) => deal === 'All' || p.deal === deal)

  return (
    <>
      <PageHeader title="Properties" subtitle={`${list.length} listings`} actions={<>
        <Segmented options={['All', 'Sale', 'Rent']} value={deal} onChange={setDeal} />
        <button onClick={() => openContact('Add Property Listing')} className="btn-primary"><Plus className="h-4 w-4" /> Add property</button>
      </>} />
      <div className="grid gap-6 md:grid-cols-2 2xl:grid-cols-3">
        {list.map((p) => (
          <article key={p.id} onClick={() => openContact(`${p.title} – full details & documents`)} className="card group cursor-pointer overflow-hidden animate-fade-up transition hover:-translate-y-1 hover:shadow-2xl">
            <div className="relative h-56 overflow-hidden">
              <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              <div className="absolute left-4 top-4 flex gap-2">
                <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-slate-800 backdrop-blur">For {p.deal}</span>
                <span className={`rounded-full px-3 py-1 text-xs font-bold text-white ${statusStyle[p.status]}`}>{p.status}</span>
              </div>
              <button onClick={(e) => e.stopPropagation()} className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-slate-500 backdrop-blur hover:text-rose-500"><Heart className="h-4 w-4" /></button>
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
                <p className="text-2xl font-extrabold">{priceLabel(p)}</p>
                <span className="flex items-center gap-1 text-xs opacity-90"><Eye className="h-3.5 w-3.5" />{p.views.toLocaleString()}</span>
              </div>
            </div>
            <div className="p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">{p.type}</p>
              <h3 className="mt-1 text-lg font-bold text-slate-900">{p.title}</h3>
              <p className="mt-1 flex items-center gap-1 text-sm text-slate-500"><MapPin className="h-4 w-4" />{p.location}</p>
              <div className="mt-4 grid grid-cols-3 gap-2 border-t border-slate-100 pt-4 text-sm text-slate-600">
                <span className="flex items-center gap-1.5"><BedDouble className="h-4 w-4 text-slate-400" />{p.beds} Beds</span>
                <span className="flex items-center gap-1.5"><Bath className="h-4 w-4 text-slate-400" />{p.baths} Baths</span>
                <span className="flex items-center gap-1.5"><Ruler className="h-4 w-4 text-slate-400" />{p.area} ft²</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  )
}

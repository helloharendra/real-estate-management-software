import { useState } from 'react'
import { ArrowRight, Phone } from 'lucide-react'
import { Avatar, Badge, PageHeader } from '../components/ui'
import { useContact } from '../components/ContactModal'
import { leads as initial, stages } from '../data'

const stageTone = { New: 'slate', Contacted: 'blue', 'Site visit': 'violet', Negotiation: 'amber', Closed: 'green' }

export default function Leads() {
  const { openContact } = useContact()
  const [leads, setLeads] = useState(initial)
  const advance = (id) => setLeads((ls) => ls.map((l) => (l.id === id ? { ...l, stage: stages[Math.min(stages.length - 1, stages.indexOf(l.stage) + 1)] } : l)))

  return (
    <>
      <PageHeader title="Enquiries & leads" subtitle="Every enquiry from portals, website and walk-ins in one pipeline." />
      <div className="scrollbar-thin -mx-4 flex gap-4 overflow-x-auto px-4 pb-4">
        {stages.map((s) => {
          const list = leads.filter((l) => l.stage === s)
          return (
            <div key={s} className="w-72 shrink-0">
              <div className="mb-3 flex items-center justify-between px-1"><Badge tone={stageTone[s]}>{s}</Badge><span className="text-xs font-semibold text-slate-400">{list.length}</span></div>
              <div className="min-h-[400px] space-y-3 rounded-2xl bg-slate-100/70 p-2.5">
                {list.map((l) => (
                  <div key={l.id} className="card p-4 animate-fade-up">
                    <div className="flex items-center gap-3"><Avatar name={l.name} size="sm" /><div className="min-w-0"><p className="truncate font-semibold text-slate-800">{l.name}</p><p className="text-xs text-slate-400">{l.source}</p></div></div>
                    <p className="mt-3 text-sm font-medium text-slate-700">{l.interest}</p>
                    <p className="text-xs text-slate-500">Budget {l.budget}</p>
                    <p className="mt-3 rounded-lg bg-brand-50 px-2.5 py-1.5 text-xs font-semibold text-brand-700">⏰ {l.next}</p>
                    <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-3">
                      <span className="text-xs text-slate-400">{l.agent}</span>
                      <div className="flex gap-1">
                        <button onClick={() => openContact('Click-to-Call & Call Logs')} className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100"><Phone className="h-4 w-4" /></button>
                        {s !== 'Closed' && <button onClick={() => advance(l.id)} className="rounded-lg p-1.5 text-brand-600 hover:bg-brand-50"><ArrowRight className="h-4 w-4" /></button>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

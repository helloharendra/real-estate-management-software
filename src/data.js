// Sample data for the UI demo. The complete project uses live APIs + database.
const img = (id) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=800&q=70`

export const properties = [
  { id: 1, title: 'Skyline Residency 3BHK', location: 'Sector 150, Noida', type: 'Apartment', deal: 'Sale', price: 12500000, beds: 3, baths: 3, area: 1850, status: 'Available', img: img('1545324418-cc1a3fa10c00'), views: 1240 },
  { id: 2, title: 'Palm Grove Villa', location: 'Golf Course Rd, Gurugram', type: 'Villa', deal: 'Sale', price: 48000000, beds: 5, baths: 6, area: 5200, status: 'Negotiation', img: img('1613490493576-7fde63acd811'), views: 2310 },
  { id: 3, title: 'Lakeview 2BHK', location: 'Powai, Mumbai', type: 'Apartment', deal: 'Rent', price: 85000, beds: 2, baths: 2, area: 1100, status: 'Available', img: img('1522708323590-d24dbb6b0267'), views: 860 },
  { id: 4, title: 'Green Meadows Bungalow', location: 'Whitefield, Bengaluru', type: 'Independent House', deal: 'Sale', price: 32000000, beds: 4, baths: 4, area: 3600, status: 'Booked', img: img('1568605114967-8130f3a36994'), views: 1785 },
  { id: 5, title: 'Studio Loft', location: 'Koregaon Park, Pune', type: 'Studio', deal: 'Rent', price: 32000, beds: 1, baths: 1, area: 620, status: 'Available', img: img('1502672260266-1c1ef2d93688'), views: 540 },
  { id: 6, title: 'The Courtyard Duplex', location: 'Jubilee Hills, Hyderabad', type: 'Duplex', deal: 'Sale', price: 27500000, beds: 4, baths: 5, area: 3100, status: 'Available', img: img('1600596542815-ffad4c1539a9'), views: 1420 },
]

export const stages = ['New', 'Contacted', 'Site visit', 'Negotiation', 'Closed']

export const leads = [
  { id: 1, name: 'Anjali Mehra', phone: '+91 98XXXX 1102', interest: 'Skyline Residency 3BHK', budget: '₹1.1–1.3 Cr', source: '99acres', stage: 'Site visit', agent: 'Sahil Gupta', next: 'Visit · Sat 11 AM' },
  { id: 2, name: 'Rohit Bajaj', phone: '+91 97XXXX 4420', interest: 'Palm Grove Villa', budget: '₹4.5–5 Cr', source: 'Referral', stage: 'Negotiation', agent: 'Priya Nanda', next: 'Offer call · Today' },
  { id: 3, name: 'Divya Krishnan', phone: '+91 99XXXX 7713', interest: 'Lakeview 2BHK (Rent)', budget: '₹80–90K / mo', source: 'Website', stage: 'Contacted', agent: 'Sahil Gupta', next: 'Send photos' },
  { id: 4, name: 'Mohammed Irfan', phone: '+91 90XXXX 2236', interest: '3BHK, Noida Extension', budget: '₹80L–1 Cr', source: 'MagicBricks', stage: 'New', agent: 'Unassigned', next: 'Assign agent' },
  { id: 5, name: 'Sneha & Karan', phone: '+91 88XXXX 6650', interest: 'Green Meadows Bungalow', budget: '₹3.2 Cr', source: 'Walk-in', stage: 'Closed', agent: 'Priya Nanda', next: 'Registry · 28 Nov' },
  { id: 6, name: 'Tarun Bhatia', phone: '+91 96XXXX 3381', interest: 'Courtyard Duplex', budget: '₹2.5–2.8 Cr', source: 'Instagram', stage: 'Site visit', agent: 'Vikram Rao', next: 'Visit · Sun 4 PM' },
]

export const salesTrend = [
  { label: 'Jun', sales: 4, rentals: 9 }, { label: 'Jul', sales: 6, rentals: 11 }, { label: 'Aug', sales: 5, rentals: 14 },
  { label: 'Sep', sales: 8, rentals: 12 }, { label: 'Oct', sales: 11, rentals: 16 }, { label: 'Nov', sales: 9, rentals: 18 },
]

export const sources = [
  { name: 'Portals', value: 41 }, { name: 'Website', value: 22 }, { name: 'Referral', value: 18 }, { name: 'Social', value: 12 }, { name: 'Walk-in', value: 7 },
]

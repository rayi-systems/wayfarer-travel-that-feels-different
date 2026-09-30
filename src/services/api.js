// Wayfarer — Travel That Feels Different - API service layer
const BASE = import.meta.env.VITE_API_URL || 'http://localhost:8000/api/v1'

async function request(path, opts = {}) {
  const res = await fetch(BASE + path, {
    headers: { 'Content-Type': 'application/json' },
    ...opts,
  })
  if (!res.ok) throw new Error(`API ${res.status}: ${path}`)
  return res.json()
}

export const api = {
  getOverview:   ()       => request('/dashboard/overview'),
  getAnalytics:  (period) => request(`/analytics?period=${period ?? '30d'}`),
  getProjects:   ()       => request('/projects'),
  getTeam:       ()       => request('/team'),
  updateProfile: (data)   => request('/settings/profile',  { method: 'PUT', body: JSON.stringify(data) }),
  updateSecurity:(data)   => request('/settings/security', { method: 'PUT', body: JSON.stringify(data) }),
}
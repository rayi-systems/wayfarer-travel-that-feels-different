export default function KPICard({ label, value, trend, trendUp = true }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
      <p className="text-xs font-medium text-gray-500 mb-1">{label}</p>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
      {trend && (
        <p className={`text-xs mt-1.5 font-medium ${trendUp ? 'text-emerald-600' : 'text-red-500'}`}>
          {trendUp ? '↑' : '↓'} {trend}
        </p>
      )}
    </div>
  )
}
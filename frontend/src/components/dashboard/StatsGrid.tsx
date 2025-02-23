import { StatsCard } from './StatsCard'

export function StatsGrid() {
  return (
    <div className="stats-grid">
      <StatsCard title="Total Contracts" value="15" />
      <StatsCard title="Flagged Issues" value="3" />
      <StatsCard title="Pending Reviews" value="2" />
    </div>
  )
} 
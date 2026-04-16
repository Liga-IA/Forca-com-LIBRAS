export const dynamic = "force-dynamic"

import { getSessionsGroupedByCity } from "@/server/db/game-sessions"
import Metrics from "./metrics"

export default async function AnalyticsDashboard() {
  const data = await getSessionsGroupedByCity()

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-8">Dashboard de Análises</h1>
      <Metrics data={data} />
    </main>
  )
}

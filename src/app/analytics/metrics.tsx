import type { RegionStats } from "@/server/db/game-sessions"

interface MetricsProps {
  data: RegionStats[]
}

export default function Metrics({ data }: MetricsProps) {
  const totalGames = data.reduce((sum, r) => sum + r.total, 0)
  const totalWins = data.reduce((sum, r) => sum + r.wins, 0)
  const totalLosses = data.reduce((sum, r) => sum + r.losses, 0)

  return (
    <div className="space-y-8">
      {/* Cards de resumo */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Regiões únicas", value: data.length },
          { label: "Total de partidas", value: totalGames },
          { label: "Vitórias", value: totalWins },
          { label: "Derrotas", value: totalLosses },
        ].map(({ label, value }) => (
          <div
            key={label}
            className="bg-slate-800/40 rounded-xl p-4 text-center border border-slate-600/50"
          >
            <p className="text-slate-400 text-sm mb-1">{label}</p>
            <p className="text-2xl font-bold text-white">{value}</p>
          </div>
        ))}
      </div>

      {/* Tabela por região */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Partidas por região</h2>
        <div className="overflow-x-auto rounded-xl border border-slate-600/50">
          <table className="min-w-full bg-slate-800/40">
            <thead className="bg-slate-700/50">
              <tr>
                {["Cidade", "Estado", "País", "Partidas", "Vitórias", "Derrotas", "Taxa de vitória"].map(
                  (h) => (
                    <th
                      key={h}
                      className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider"
                    >
                      {h}
                    </th>
                  ),
                )}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700/50">
              {data.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-6 py-8 text-center text-slate-400">
                    Nenhuma partida registrada ainda.
                  </td>
                </tr>
              ) : (
                data.map((row) => {
                  const winRate =
                    row.total > 0
                      ? Math.round((row.wins / row.total) * 100)
                      : 0

                  return (
                    <tr
                      key={`${row.city}-${row.state}`}
                      className="hover:bg-slate-700/30 transition-colors"
                    >
                      <td className="px-6 py-4 text-sm font-medium text-white">
                        {row.city}
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-300">
                        {row.state}
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-300">
                        {row.country}
                      </td>
                      <td className="px-6 py-4 text-sm font-bold text-cyan-400">
                        {row.total}
                      </td>
                      <td className="px-6 py-4 text-sm font-bold text-green-400">
                        {row.wins}
                      </td>
                      <td className="px-6 py-4 text-sm font-bold text-red-400">
                        {row.losses}
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <div className="flex items-center gap-2">
                          <div className="w-20 bg-slate-700 rounded-full h-2">
                            <div
                              className="bg-green-400 h-2 rounded-full"
                              style={{ width: `${winRate}%` }}
                            />
                          </div>
                          <span className="text-slate-300">{winRate}%</span>
                        </div>
                      </td>
                    </tr>
                  )
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

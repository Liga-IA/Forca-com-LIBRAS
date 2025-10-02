"use client";
import {
  getMetrics,
  getTodayGamesPlayed,
  getTotalGamesPlayed,
} from "@/lib/metrics";

export default function Metrics() {
  const metrics = getMetrics();
  return (
    <div>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Métricas do Jogo</h2>

        <div className="mb-6">
          <p className="text-lg mb-2">
            Total de jogos jogados:{" "}
            <span className="font-semibold">{getTotalGamesPlayed()}</span>
          </p>
          <p className="text-lg">
            Jogos jogados hoje:{" "}
            <span className="font-semibold">{getTodayGamesPlayed()}</span>
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-transparent border border-gray-300 rounded-lg shadow-md">
            <thead className="bg-transparent">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                  Data e Hora
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                  Jogadas
                </th>
              </tr>
            </thead>
            <tbody className="bg-transparent divide-y divide-gray-600">
              {metrics.length > 0 ? (
                metrics.map((metric, index) => (
                  <tr key={index} className="hover:bg-black">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-purple-500">
                      {metric.data.toLocaleDateString("pt-BR")} às {metric.data.toLocaleTimeString("pt-BR")}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-purple-500">
                      {metric.total_played}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={2}
                    className="px-6 py-4 text-center text-sm text-purple-500"
                  >
                    Nenhum dado disponível
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

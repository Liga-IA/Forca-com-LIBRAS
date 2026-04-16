import { prisma } from "@/lib/prisma"

export type GameResult = "won" | "lost"

export interface CreateGameSessionData {
  result: GameResult
  city: string
  state: string
  country: string
}

export interface RegionStats {
  city: string
  state: string
  country: string
  total: number
  wins: number
  losses: number
}

/**
 * Registra uma partida finalizada no banco.
 */
export async function createGameSession(data: CreateGameSessionData) {
  return prisma.gameSession.create({ data })
}

/**
 * Retorna estatísticas agregadas por cidade, ordenadas por total de partidas.
 * Ex: [{ city: "Araranguá", total: 20, wins: 12, losses: 8 }, ...]
 */
export async function getSessionsGroupedByCity(): Promise<RegionStats[]> {
  const [totals, wins] = await Promise.all([
    prisma.gameSession.groupBy({
      by: ["city", "state", "country"],
      _count: { id: true },
      orderBy: { _count: { id: "desc" } },
    }),
    prisma.gameSession.groupBy({
      by: ["city"],
      where: { result: "won" },
      _count: { id: true },
    }),
  ])

  const winsMap = new Map(wins.map((w) => [w.city, w._count.id]))

  return totals.map((row) => ({
    city: row.city,
    state: row.state,
    country: row.country,
    total: row._count.id,
    wins: winsMap.get(row.city) ?? 0,
    losses: row._count.id - (winsMap.get(row.city) ?? 0),
  }))
}

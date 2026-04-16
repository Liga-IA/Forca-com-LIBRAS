"use server"

import { createGameSession, type GameResult } from "@/server/db/game-sessions"
import { getClientLocation } from "@/server/services/geolocation"

export async function saveGame(result: GameResult) {
  const loc = await getClientLocation()

  await createGameSession({
    result,
    city: loc?.city ?? "unknown",
    state: loc?.state ?? "unknown",
    country: loc?.country ?? "unknown",
  })
}

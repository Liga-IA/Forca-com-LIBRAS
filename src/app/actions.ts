"use server"

import { GeolocationService } from "@/lib/geolocation";
import { prisma } from "@/lib/prisma";

export async function saveGame() {

    const total_games = 1;

    // 1) Verificar a região atual (via IP -> geolocation)
    const cityIp = (await GeolocationService.getCityIP()) || "0.0.0.0"
    const loc = await GeolocationService.getLocationByIP(cityIp)

    // Garantir que existe um registro em Analytics para este IP (chave única cityIp)
    const analytics = await prisma.analytics.findUnique({ where: { region: loc?.city}})

    if (!analytics) {
      return {message: 'Região não encontrada', status: 404}
    }

    // 2) Verificar a data do último registro de métricas deste Analytics
    const latest = await prisma.metrics.findFirst({
      where: { analyticsId: analytics?.analyticsId },
      orderBy: { createdAt: 'desc' },
    })

    const now = new Date()
    const isSameDay = latest ? latest.createdAt.toDateString() === now.toDateString() : false

    if (isSameDay && latest) {
      // 3) Mesmnew_gamear apenas o contador de jogos (total_games)
      const updated = await prisma.metrics.update({
        where: { metricsId: latest.metricsId },
        data: { total_games: { increment: total_games } },
      })
      return { ok: true, mode: 'updated', metricsId: updated.metricsId, total_games: updated.total_games }
    } else {
      // 4) Data diferente: criar novo registro na tabela de métricas
      const created = await prisma.metrics.create({
        data: { analyticsId: analytics?.analyticsId, total_games: total_games },
      })
      return { ok: true, mode: 'created', metricsId: created.metricsId, total_games: created.total_games }
    }
  }
   

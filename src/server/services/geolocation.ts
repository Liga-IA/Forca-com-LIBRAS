import { headers } from "next/headers"

export interface GeoLocation {
  city: string
  state: string
  country: string
}

interface IpApiResponse {
  status: string
  city: string
  regionName: string
  country: string
}

/**
 * Extrai o IP real do cliente a partir dos headers HTTP da requisição.
 * Deve ser chamado apenas dentro de server actions ou server components.
 */
async function getClientIP(): Promise<string | null> {
  const headersList = await headers()

  const forwarded = headersList.get("x-forwarded-for")
  if (forwarded) {
    // x-forwarded-for pode ter múltiplos IPs (cliente, proxies...)
    // o primeiro é sempre o IP original do cliente
    return forwarded.split(",")[0].trim()
  }

  return headersList.get("x-real-ip")
}

/**
 * Retorna cidade, estado e país do usuário com base no IP da requisição.
 * Retorna null em ambiente local (127.0.0.1 / ::1) ou se a API falhar.
 */
export async function getClientLocation(): Promise<GeoLocation | null> {
  const ip = await getClientIP()

  // Em desenvolvimento local não há IP real — ignora silenciosamente
  if (!ip || ip === "127.0.0.1" || ip === "::1") return null

  try {
    const res = await fetch(
      `http://ip-api.com/json/${ip}?fields=status,city,regionName,country`,
      { cache: "no-store" },
    )

    if (!res.ok) return null

    const data: IpApiResponse = await res.json()

    if (data.status !== "success") return null

    return {
      city: data.city,
      state: data.regionName,
      country: data.country,
    }
  } catch {
    return null
  }
}

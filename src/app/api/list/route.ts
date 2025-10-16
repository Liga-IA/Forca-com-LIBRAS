import { prisma } from "@/lib/prisma"

export async function GET() {
  const data = await prisma.analytics.findMany({
    select: {
      cityIp: true,
      country: true,
      state: true,
      region: true,
      metrics: true,
    }
  })
 
  return Response.json(data)
}
export const dynamic = "force-dynamic";
export const revalidate = 0;

import { prisma } from "@/lib/prisma";
import Metrics from "./metrics";

export default async function AnalyticsDashboard() {
  const data = await prisma.analytics.findMany({
    include: {
      metrics: true,
    },
  });
  console.log(data);
  console.log(data[0].metrics);
  return (
    <div>
      <Metrics />
    </div>
  );
}

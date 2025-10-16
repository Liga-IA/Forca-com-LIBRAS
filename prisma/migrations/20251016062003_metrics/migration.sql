-- CreateTable
CREATE TABLE "analytics" (
    "analyticsId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "cityIp" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "region" TEXT NOT NULL,

    CONSTRAINT "analytics_pkey" PRIMARY KEY ("analyticsId")
);

-- CreateTable
CREATE TABLE "metrics" (
    "metricsId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "total_games" INTEGER NOT NULL,
    "analyticsId" TEXT NOT NULL,

    CONSTRAINT "metrics_pkey" PRIMARY KEY ("metricsId")
);

-- CreateIndex
CREATE UNIQUE INDEX "analytics_region_key" ON "analytics"("region");

-- CreateIndex
CREATE INDEX "metrics_analyticsId_idx" ON "metrics"("analyticsId");

-- AddForeignKey
ALTER TABLE "metrics" ADD CONSTRAINT "metrics_analyticsId_fkey" FOREIGN KEY ("analyticsId") REFERENCES "analytics"("analyticsId") ON DELETE CASCADE ON UPDATE CASCADE;

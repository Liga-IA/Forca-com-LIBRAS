/*
  Warnings:

  - You are about to drop the `analytics` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `metrics` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "metrics" DROP CONSTRAINT "metrics_analyticsId_fkey";

-- DropTable
DROP TABLE "analytics";

-- DropTable
DROP TABLE "metrics";

-- CreateTable
CREATE TABLE "game_sessions" (
    "id" TEXT NOT NULL,
    "playedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "result" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "country" TEXT NOT NULL,

    CONSTRAINT "game_sessions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "game_sessions_city_idx" ON "game_sessions"("city");

-- CreateIndex
CREATE INDEX "game_sessions_playedAt_idx" ON "game_sessions"("playedAt");

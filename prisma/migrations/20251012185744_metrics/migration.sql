-- CreateTable
CREATE TABLE "metrics" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "gameId" TEXT NOT NULL,
    "attempts" INTEGER NOT NULL,
    "success" BOOLEAN NOT NULL,

    CONSTRAINT "metrics_pkey" PRIMARY KEY ("id")
);

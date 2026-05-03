import { Suspense } from "react";
import { GamePage } from "./GamePage";

export default function Page() {
  return (
    <Suspense>
      <GamePage />
    </Suspense>
  );
}

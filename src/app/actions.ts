"use server"

import { redirect } from "next/navigation";

export async function saveGame() {

    const total_games = 1;

    const res = await fetch('http://localhost:3000/api/create', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ total_games })
    })

    if (!res.ok) {
      throw new Error('Falha ao criar/atualizar métricas')
    }

    redirect('/game')
  }
   

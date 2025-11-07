
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      city, region, country, // Geolocation
      wasSuccessful, wrongGuesses, // Game Result
      likertAnswers, starRating, // Feedback
    } = body;

    // Basic validation
    if (typeof wasSuccessful !== 'boolean' || !Array.isArray(wrongGuesses) || typeof starRating !== 'number') {
      return NextResponse.json({ error: 'Invalid data format' }, { status: 400 });
    }

    const gameSession = await prisma.gameSession.create({
      data: {
        city,
        region,
        country,
        wasSuccessful,
        wrongGuesses,
        likertAnswers,
        starRating,
      },
    });

    return NextResponse.json(gameSession, { status: 201 });
  } catch (error) {
    console.error('Error creating game session:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

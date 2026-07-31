import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    // Increment visitor count via CounterAPI
    const res = await fetch(
      "https://api.counterapi.dev/v1/praneethparepalli_portfolio/visits/up",
      {
        cache: "no-store",
        headers: {
          "User-Agent": "Portfolio-Visitor-Counter",
        },
      }
    );

    if (res.ok) {
      const data = await res.json();
      return NextResponse.json({ count: data.count ?? 1 });
    }

    // Fallback if API is temporarily unavailable
    return NextResponse.json({ count: 1240 });
  } catch (error) {
    console.error("Visitor count fetch error:", error);
    return NextResponse.json({ count: 1240 });
  }
}

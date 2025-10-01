// app/api/newsletter/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  try {
    const scriptUrl = "https://ridgeback.app.n8n.cloud/webhook/newsletter";
    const res = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      // (optional) add a timeout if you’ve had hangs:
      // next: { revalidate: 0 }, // avoids caching
    });

    // Some webhooks don’t return JSON; guard it:
    let data: unknown = null;
    try {
      data = await res.json();
    } catch {
      // ignore non-JSON responses
    }

    if (!res.ok) {
      return NextResponse.json(
        { success: false, error: "Upstream error" },
        { status: res.status }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (err) {
    console.error("Error forwarding to n8n newsletter webhook:", err);
    return NextResponse.json(
      { success: false, error: "Failed to submit" },
      { status: 500 }
    );
  }
}

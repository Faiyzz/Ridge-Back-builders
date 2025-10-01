// src/app/api/newsletter/route.ts
import { NextResponse } from "next/server";

const N8N_NEWSLETTER_URL =
  process.env.N8N_NEWSLETTER_URL ||
  "https://ridgeback.app.n8n.cloud/webhook/newsletter/subscribe/again";

export async function POST(request: Request) {
  try {
    // Footer sends only { email }, but we also forward firstname/lastname if present
    const body = await request.json().catch(() => ({}));
    const { email, firstname, lastname } = body ?? {};

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { success: false, message: "Email is required" },
        { status: 400 }
      );
    }

    const upstream = await fetch(N8N_NEWSLETTER_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, firstname, lastname }),
    });

    const text = await upstream.text();

    if (!upstream.ok) {
      return NextResponse.json(
        { success: false, message: "n8n webhook error", details: text },
        { status: upstream.status }
      );
    }

    return NextResponse.json(
      { success: true, message: "Subscribed" },
      { status: 200 }
    );
  } catch (err) {
    console.error("Newsletter subscribe error:", err);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

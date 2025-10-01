import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { email } = body;
    const response = await fetch(
      "https://ridgeback.app.n8n.cloud/webhook/newsletter/subscribe/again",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      }
    );

    const data = await response.json();

    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error("Error forwarding request to n8n:", error);
    return NextResponse.json(
      { error: "Failed to forward request" },
      { status: 500 }
    );
  }
}

import { NextRequest, NextResponse } from "next/server";

const MAKE_WEBHOOK = "https://hook.eu2.make.com/h9dwsa51qixiyfewde0rfuy1opktwaar";

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, location, message } = await req.json();

    if (!name || !email || !location || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const res = await fetch(MAKE_WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, phone, location, message }),
    });

    if (!res.ok) {
      throw new Error(`Make.com webhook returned ${res.status}`);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}

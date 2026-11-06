import { NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";

const TYPES = ["guest", "member", "newsletter"];

export async function POST(req: Request) {
  try {
    const body = await req.json();
    if (!TYPES.includes(body?.type)) {
      return NextResponse.json({ ok: false }, { status: 400 });
    }
    const { error } = await getSupabase().from("submissions").insert({
      type: body.type,
      name: body.name ?? null,
      contact: body.contact ?? null,
      email: body.email ?? null,
      age: body.age ? Number(body.age) : null,
      lga: body.lga ?? null,
      build: body.build ?? null,
      why: body.why ?? null,
    });
    if (error) {
      console.error("[commons:supabase]", error.message);
      return NextResponse.json({ ok: false }, { status: 500 });
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}

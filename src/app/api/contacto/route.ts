import { NextResponse } from "next/server";

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as
    | {
        name?: unknown;
        email?: unknown;
        phone?: unknown;
        message?: unknown;
      }
    | null;

  if (!body) {
    return NextResponse.json(
      { ok: false, error: "JSON inválido." },
      { status: 400 },
    );
  }

  const name = body.name;
  const email = body.email;
  const phone = body.phone;
  const message = body.message;

  if (!isNonEmptyString(name) || !isNonEmptyString(email) || !isNonEmptyString(message)) {
    return NextResponse.json(
      { ok: false, error: "Campos requeridos: nombre, email y mensaje." },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { ok: false, error: "Email inválido." },
      { status: 400 },
    );
  }

  if (phone !== undefined && phone !== null && typeof phone !== "string") {
    return NextResponse.json(
      { ok: false, error: "Teléfono inválido." },
      { status: 400 },
    );
  }

  // TODO: Integrar envío real (email/CRM) y protección anti-spam (rate limit/captcha).
  return NextResponse.json({ ok: true });
}


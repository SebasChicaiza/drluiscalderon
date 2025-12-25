"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const validate = (payload: {
    name: string;
    email: string;
    phone: string;
    message: string;
  }) => {
    const errors: Record<string, string> = {};
    if (!payload.name.trim()) errors.name = "Ingresa tu nombre.";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(payload.email))
      errors.email = "Ingresa un email válido.";
    if (payload.phone && !/^\+?[0-9\s-]{7,}$/.test(payload.phone))
      errors.phone = "Ingresa un teléfono válido (mín. 7 dígitos).";
    if (payload.message.trim().length < 10)
      errors.message = "Cuéntame un poco más (mínimo 10 caracteres).";
    return errors;
  };

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setError(null);

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    const validationErrors = validate(payload);
    if (Object.keys(validationErrors).length > 0) {
      setFieldErrors(validationErrors);
      setStatus("idle");
      return;
    }

    setFieldErrors({});

    try {
      const response = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const json = (await response.json().catch(() => null)) as
        | { ok?: boolean; error?: string }
        | null;

      if (!response.ok) {
        throw new Error(json?.error || "No se pudo enviar el mensaje.");
      }

      setStatus("success");
      event.currentTarget.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Error inesperado.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid gap-2">
        <div className="flex items-center justify-between">
          <label htmlFor="name" className="text-sm font-semibold text-foreground">
            Nombre
          </label>
          {fieldErrors.name ? (
            <span className="text-xs text-red-600">{fieldErrors.name}</span>
          ) : null}
        </div>
        <input
          id="name"
          name="name"
          autoComplete="name"
          required
          className="h-11 rounded-xl border border-black/10 bg-white/50 px-3 text-sm outline-none ring-brand/30 transition focus:border-brand/50 focus:ring-2"
        />
      </div>

      <div className="grid gap-2">
        <div className="flex items-center justify-between">
          <label htmlFor="email" className="text-sm font-semibold text-foreground">
            Email
          </label>
          {fieldErrors.email ? (
            <span className="text-xs text-red-600">{fieldErrors.email}</span>
          ) : null}
        </div>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="h-11 rounded-xl border border-black/10 bg-white/50 px-3 text-sm outline-none ring-brand/30 transition focus:border-brand/50 focus:ring-2"
        />
      </div>

      <div className="grid gap-2">
        <div className="flex items-center justify-between">
          <label htmlFor="phone" className="text-sm font-semibold text-foreground">
            Teléfono (opcional)
          </label>
          {fieldErrors.phone ? (
            <span className="text-xs text-red-600">{fieldErrors.phone}</span>
          ) : null}
        </div>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          className="h-11 rounded-xl border border-black/10 bg-white/50 px-3 text-sm outline-none ring-brand/30 transition focus:border-brand/50 focus:ring-2"
        />
      </div>

      <div className="grid gap-2">
        <div className="flex items-center justify-between">
          <label htmlFor="message" className="text-sm font-semibold text-foreground">
            Mensaje
          </label>
          {fieldErrors.message ? (
            <span className="text-xs text-red-600">{fieldErrors.message}</span>
          ) : null}
        </div>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="resize-none rounded-xl border border-black/10 bg-white/50 px-3 py-2 text-sm outline-none ring-brand/30 transition focus:border-brand/50 focus:ring-2"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex h-11 items-center justify-center rounded-full bg-brand px-6 text-sm font-semibold text-white shadow-lg shadow-black/20 transition hover:translate-y-[-1px] hover:shadow-black/30 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? "Enviando..." : "Enviar"}
      </button>

      {status === "success" ? (
        <p className="text-sm text-green-600">
          Mensaje enviado. Te contactaremos pronto.
        </p>
      ) : null}

      {status === "error" ? (
        <p className="text-sm text-red-600">{error}</p>
      ) : null}
    </form>
  );
}

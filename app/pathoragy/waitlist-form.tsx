"use client";

import { useState } from "react";

export default function PathoragyWaitlistForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        className="flex items-center justify-center gap-3 px-6 py-4 rounded-2xl"
        style={{ backgroundColor: "rgba(79,142,247,0.1)", border: "1px solid rgba(79,142,247,0.25)" }}
      >
        <span style={{ color: "#4F8EF7", fontSize: "1.2rem" }}>✓</span>
        <p className="text-sm font-medium" style={{ color: "#4F8EF7" }}>
          You&apos;re on the list. We&apos;ll reach out when Beta access opens.
        </p>
      </div>
    );
  }

  return (
    <form
      className="flex flex-col sm:flex-row gap-3"
      onSubmit={handleSubmit}
      aria-label="Beta waitlist signup"
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        className="flex-1 px-5 py-3.5 rounded-full text-sm outline-none transition-all"
        style={{
          backgroundColor: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.12)",
          color: "#fff",
        }}
        aria-label="Email address"
      />
      <button
        type="submit"
        className="px-6 py-3.5 rounded-full text-sm font-semibold transition-all hover:opacity-90 hover:scale-105 whitespace-nowrap"
        style={{ background: "linear-gradient(135deg, #4F8EF7, #7C3AED)", color: "#fff" }}
      >
        Request Beta Access
      </button>
    </form>
  );
}

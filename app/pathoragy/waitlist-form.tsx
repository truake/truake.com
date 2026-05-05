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
        style={{ backgroundColor: "rgba(232,84,53,0.08)", border: "1px solid rgba(232,84,53,0.20)" }}
      >
        <span style={{ color: "#E85435", fontSize: "1.2rem" }}>✓</span>
        <p className="text-sm font-medium" style={{ color: "#E85435" }}>
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
          backgroundColor: "#FFFFFF",
          border: "1px solid rgba(42,38,32,0.18)",
          color: "#2A2620",
        }}
        aria-label="Email address"
      />
      <button
        type="submit"
        className="px-6 py-3.5 rounded-full text-sm font-semibold transition-all hover:opacity-90 hover:scale-105 whitespace-nowrap"
        style={{ background: "#E85435", color: "#fff" }}
      >
        Request Beta Access
      </button>
    </form>
  );
}

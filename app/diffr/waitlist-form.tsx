"use client";

export default function WaitlistForm() {
  return (
    <form
      className="flex flex-col sm:flex-row gap-3"
      onSubmit={(e) => e.preventDefault()}
      aria-label="Waitlist signup"
    >
      <input
        type="email"
        required
        placeholder="your@email.com"
        className="flex-1 px-5 py-3.5 rounded-full text-sm outline-none transition-all"
        style={{
          backgroundColor: "var(--d-input-bg)",
          border: "1px solid var(--d-input-border)",
          color: "var(--d-text)",
        }}
        aria-label="Email address"
      />
      <button
        type="submit"
        className="px-6 py-3.5 rounded-full text-sm font-semibold transition-all hover:opacity-90 hover:scale-105 whitespace-nowrap"
        style={{ backgroundColor: "#F0522C", color: "#fff" }}
      >
        Get Early Access
      </button>
    </form>
  );
}

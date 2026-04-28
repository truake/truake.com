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
          backgroundColor: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.12)",
          color: "#fff",
        }}
        aria-label="Email address"
      />
      <button
        type="submit"
        className="px-6 py-3.5 rounded-full text-sm font-semibold transition-all hover:opacity-90 hover:scale-105 whitespace-nowrap"
        style={{ background: "linear-gradient(135deg, #1B8BF5, #F0522C)", color: "#fff" }}
      >
        Get Early Access
      </button>
    </form>
  );
}

"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { DATA } from "@/data/resume";

type SubmitState = "idle" | "submitting" | "success" | "error";

export default function ContactSection() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (!email || !message) {
      setSubmitState("error");
      setFeedback("Please enter your email and message.");
      return;
    }

    try {
      setSubmitState("submitting");
      setFeedback("");

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, message }),
      });

      const result = await response.json();

      if (!response.ok) {
        setSubmitState("error");
        setFeedback(result?.error ?? "Could not send message.");
        return;
      }

      setSubmitState("success");
      setFeedback(result?.message ?? "Message sent successfully.");
      form.reset();
    } catch {
      setSubmitState("error");
      setFeedback("Network error. Please try again.");
    }
  };

  return (
    <div className="border rounded-xl p-12 relative">
      <div className="absolute -top-4 border bg-primary z-10 rounded-xl px-5 py-1.5 left-1/2 -translate-x-1/2">
        <span className="text-background text-base font-medium">Contact</span>
      </div>
      <div className="absolute inset-0 top-0 left-0 right-0 h-1/2 rounded-xl overflow-hidden">
        <FlickeringGrid
          className="h-full w-full"
          squareSize={3}
          gridGap={3}
          style={{
            maskImage: "linear-gradient(to bottom, black, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
          }}
        />
      </div>
      <div className="relative flex flex-col items-center gap-8 text-center">
        <h2 className="text-4xl font-bold tracking-tighter sm:text-6xl">
          Let&apos;s Connect
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-balance">
          Have a project in mind? Let&apos;s discuss how we can work together.
        </p>
        <form className="w-full max-w-2xl grid gap-4 text-left" onSubmit={handleSubmit}>
          <label className="grid gap-2 text-base">
            <span className="text-muted-foreground text-base">Your Email</span>
            <input
              name="email"
              type="email"
              required
              placeholder={DATA.contact.email}
              className="h-12 rounded-md border border-input bg-background px-4 text-base outline-none focus-visible:ring-2 focus-visible:ring-ring"
            />
          </label>
          <label className="grid gap-2 text-base">
            <span className="text-muted-foreground text-base">Message</span>
            <textarea
              name="message"
              rows={5}
              required
              placeholder="Your message..."
              className="rounded-md border border-input bg-background px-4 py-3 text-base outline-none resize-none focus-visible:ring-2 focus-visible:ring-ring"
            />
          </label>
          <button
            type="submit"
            disabled={submitState === "submitting"}
            className="h-12 rounded-md bg-primary text-primary-foreground text-base font-medium hover:opacity-90 transition-opacity disabled:cursor-not-allowed disabled:opacity-70"
          >
            {submitState === "submitting" ? "Sending..." : "Send Message"}
          </button>
          {feedback ? (
            <p
              className={`text-base ${submitState === "error" ? "text-red-500" : "text-green-600"}`}
              role="status"
            >
              {feedback}
            </p>
          ) : null}
        </form>
        <Link
          href={DATA.contact.social.X.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted-foreground hover:underline underline-offset-4"
        >
          Also reachable on X
        </Link>
      </div>
    </div>
  );
}

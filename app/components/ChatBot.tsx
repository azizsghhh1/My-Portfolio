"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useLanguage } from "./LanguageContext";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const { language } = useLanguage();
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content:
        "Hi! I’m Mohamed Aziz’s assistant. Ask me about his profile, skills, experience, or projects.",
    },
  ]);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 800);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading, open]);

  const greeting =
    language === "fr"
      ? "Bonjour ! Je suis l’assistant de Mohamed Aziz. Posez-moi une question sur son profil, ses compétences, son expérience ou ses projets."
      : "Hi! I’m Mohamed Aziz’s assistant. Ask me about his profile, skills, experience, or projects.";

  useEffect(() => {
    setMessages((prev) => {
      if (prev.length === 1 && prev[0].role === "assistant") {
        if (prev[0].content !== greeting) {
          return [{ role: "assistant", content: greeting }];
        }
      }
      return prev;
    });
  }, [greeting]);

  const quickPrompts = useMemo(() => {
    if (language === "fr") {
      return [
        "Résume l’expérience DevSecOps de Mohamed.",
        "Quelles sont ses compétences clés en sécurité ?",
        "Liste ses projets les plus impactants.",
        "Est‑il ouvert aux postes SecOps/AI‑Security ?",
      ];
    }

    return [
      "Summarize Mohamed’s DevSecOps experience.",
      "What are his core security skills?",
      "List his most impactful projects.",
      "Is he open to SecOps/AI-Security roles?",
    ];
  }, [language]);

  const lastUserMessage = useMemo(() => {
    for (let i = messages.length - 1; i >= 0; i -= 1) {
      if (messages[i].role === "user") return messages[i].content;
    }
    return "";
  }, [messages]);

  async function sendMessage(content: string) {
    const trimmed = content.trim();
    if (!trimmed || loading) return;

    const nextMessages: ChatMessage[] = [
      ...messages,
      { role: "user", content: trimmed },
    ];

    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages, language }),
      });

      const data = await response.json();
      const assistantMessage = data?.content ||
        "Sorry, I couldn't generate a response right now.";

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: assistantMessage },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry, I couldn't reach the assistant service.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="bg-green-500 text-black p-4 rounded-full shadow-lg"
        >
          💬
        </button>
      )}

      {open && (
        <div className="bg-zinc-900 text-white w-[420px] md:w-[520px] p-5 rounded-2xl shadow-2xl">
          <div className="flex items-center justify-between mb-3">
            <p className="font-bold">
              {language === "fr" ? "Assistant de Mohamed Aziz" : "Mohamed Aziz Assistant"}
            </p>
            <button
              onClick={() => setOpen(false)}
              className="text-red-400 text-sm"
            >
              {language === "fr" ? "Fermer" : "Close"}
            </button>
          </div>

          <div className="h-[360px] overflow-y-auto space-y-3 pr-1">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={
                  msg.role === "user"
                    ? "bg-green-500/20 text-green-100 p-2 rounded-lg"
                    : "bg-white/10 text-white p-2 rounded-lg"
                }
              >
                {msg.content}
              </div>
            ))}
            {loading && (
              <div className="bg-white/10 text-white p-2 rounded-lg">
                Thinking...
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {loading && lastUserMessage && (
            <div className="mt-3 text-xs text-green-200/80">
              {language === "fr" ? "Dernier message" : "Last message"}: “{lastUserMessage}”
            </div>
          )}

          <div className="mt-4 flex flex-wrap gap-2">
            {quickPrompts.map((prompt) => (
              <button
                key={prompt}
                onClick={() => sendMessage(prompt)}
                className="text-xs bg-white/10 hover:bg-white/20 px-2 py-1 rounded"
              >
                {prompt}
              </button>
            ))}
          </div>

          <div className="mt-4 flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") sendMessage(input);
              }}
              placeholder={
                language === "fr"
                  ? "Posez une question sur le profil de Mohamed..."
                  : "Ask about Mohamed’s profile..."
              }
              className="flex-1 bg-black/40 border border-white/10 rounded px-3 py-2 text-sm outline-none"
            />
            <button
              onClick={() => sendMessage(input)}
              className="bg-green-500 text-black px-4 py-2 rounded text-sm font-semibold"
              disabled={loading}
            >
              {language === "fr" ? "Envoyer" : "Send"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
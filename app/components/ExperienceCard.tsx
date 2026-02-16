"use client";

import Image from "next/image";
import VideoProject from "./VideoProject";
import { useLanguage } from "./LanguageContext";

interface ExperienceCardProps {
  title: string;
  description: string;
  videoSrc?: string;
  imageSrc?: string;
  link?: string;
}

export default function ExperienceCard({
  title,
  description,
  videoSrc,
  imageSrc,
  link,
}: ExperienceCardProps) {
  const { language } = useLanguage();
  const badgeLabel = language === "fr" ? "À la une" : "Highlight";

  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 via-white/0 to-white/5 p-6 shadow-xl transition-transform duration-300 hover:-translate-y-1 hover:border-white/20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(165,201,255,0.18),transparent_55%)]" />
      <div className="relative">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-wide text-[#a5c9ff]">
          {badgeLabel}
        </div>
        <h3 className="mt-3 text-2xl font-semibold text-white leading-snug">{title}</h3>

        {/* Show video or image when provided */}
        {videoSrc && <VideoProject src={videoSrc} />}
        {imageSrc && (
          <Image
            src={imageSrc}
            alt={title}
            width={500}
            height={300}
            className="mt-4 rounded-xl w-full h-auto object-cover border border-white/10"
          />
        )}

        <p className="mt-4 text-zinc-300 leading-relaxed whitespace-pre-line">
          {description}
        </p>

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#a5c9ff] hover:text-white transition"
          >
            See more →
          </a>
        )}
      </div>
    </div>
  );
}

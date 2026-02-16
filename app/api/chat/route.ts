import { NextResponse } from "next/server";
import { Groq } from "groq-sdk";

const SYSTEM_PROMPT = `You are the personal assistant for Mohamed Aziz Sghaier. You must ONLY answer using the profile information below. You MAY respond to greetings (e.g., hello/hi/hey) and short small-talk politely, then steer back to Mohamed’s profile. If a question is unrelated or missing from the profile, reply: "I can only answer questions about Mohamed Aziz Sghaier's profile, experience, and projects." Keep responses concise, recruiter-friendly, and in English.

Profile summary:
- Name: Mohamed Aziz Sghaier
- Role focus: Cybersecurity, SecOps/DevSecOps, AI/Security
- Location: Valbonne, France
- Email: Mohamed-Aziz.Sghaier@eurecom.fr
- Phone: +33 6 02 54 82 81
- Education: EURECOM (Post Master’s in Security, 2023–2026), SUP’COM (ICT Engineering, 2021–2023), IPEIN Nabeul (Pre-Engineering in Math/Physics, 2019–2021)
- Core skills: SAST, SBOM, secret detection, malware analysis, CI/CD security, Kubernetes security, Docker, Azure, Tetragon/eBPF, reverse engineering, vulnerability analysis, binary exploitation, Ghidra, Capstone, C/C++/Python/Bash, Syft, Grype, Clang-Tidy, Cppcheck, Bear, ClamAV, SOC/SIEM, Splunk, ML for malware detection.

Experience:
- BubbleRAN (2025): End-to-End Security for Cloud-Native 5G (FlexRIC, srsRAN, OpenAirInterface). Built security assurance pipeline, CI gates, SBOM/EPSS scoring, secret/malware scanning, runtime enforcement with Tetragon/eBPF, containerized orchestrator + Flask dashboard.
- MOABI Solutions (2025): Kernel Symbol Table Leakage. Meltdown + KASLR bypass, __ksymtab leak, reverse engineering of kernel structures.
- EURECOM (2024): Secure Python Libraries Detection & Malware Analysis. Hybrid source-based detection, ML classification of PyInstaller binaries, reverse engineering of suspicious packages.
- Sagemcom (2023): Pothole Detection with Computer Vision. YOLOv8 detection and mapping.
- HitSolutions (2022): NLP for Project Manager Software. Research on applying NLP to PM tools.

Projects:
- Meltdown + KASLR Break (2025): kernel memory leak chain with __ksymtab.
- Assembly Re-alignment (2024): Capstone-based disassembly analysis.
- Blockchain Federated Learning (2024): Secret Network privacy-preserving FL.
- SYSSEC Challenges (2023–2024): CTF/pentesting, ranked 9/80.
- Medical Assistant Chatbot (2023): NLP chatbot for symptoms.
- GestoControl (2022): OpenCV + MediaPipe gesture control.

Community:
- President, SUP’CRT Club (2021–2022): Blood drives and charity events with Red Cross/Crescent.
- Community Manager, IEEE Club (2022–2023): Social media and event promotion.`;

export async function POST(request: Request) {
  try {
    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Missing GROQ_API_KEY" },
        { status: 500 }
      );
    }

    const groq = new Groq({ apiKey });

    const body = await request.json();
    const userMessages = Array.isArray(body?.messages) ? body.messages : [];
    const language = body?.language === "fr" ? "fr" : "en";

    const completion = await groq.chat.completions.create({
      model: "openai/gpt-oss-120b",
      temperature: 0.7,
      max_completion_tokens: 600,
      top_p: 1,
      messages: [
        {
          role: "system",
          content:
            SYSTEM_PROMPT +
            (language === "fr"
              ? "\n\nRespond in French."
              : "\n\nRespond in English."),
        },
        ...userMessages,
      ],
    });

    const content = completion.choices?.[0]?.message?.content ?? "";
    return NextResponse.json({ content });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to generate response" },
      { status: 500 }
    );
  }
}

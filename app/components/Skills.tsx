"use client";

// CORE SKILLS
import {
  Shield,
  Cloud,
  Bug,
  Code,
  Wrench,
  Terminal,
  Network,
  Brain,
  Globe,
} from 'lucide-react';
import { useLanguage } from "./LanguageContext";

const Skills = () => {
  const { language } = useLanguage();

  const tools = [
    {
      name: language === "fr" ? "Cybersécurité & DevSecOps" : "Cybersecurity & DevSecOps",
      icon: <Shield size={24} />,
      level: 90,
      description:
        language === "fr"
          ? "SAST, SBOM, détection de secrets, analyse de malware, sécurité CI/CD, supply chain, SOC/SIEM, Splunk, fuzzing"
          : "SAST, SBOM, secret detection, malware analysis, CI/CD security, supply chain, SOC/SIEM, Splunk, fuzzing",
    },
    {
      name: language === "fr" ? "Sécurité Cloud & Conteneurs" : "Cloud & Container Security",
      icon: <Cloud size={24} />,
      level: 85,
      description:
        language === "fr"
          ? "Docker, Azure, sécurité Kubernetes, enforcement de politiques, Tetragon/eBPF, scan d’images"
          : "Docker, Azure, Kubernetes security, policy enforcement, Tetragon/eBPF, container image scanning",
    },
    {
      name: language === "fr" ? "Analyse Statique & Binaire" : "Static & Binary Analysis",
      icon: <Bug size={24} />,
      level: 80,
      description:
        language === "fr"
          ? "Reverse engineering, analyse de vulnérabilités, exploitation binaire, Ghidra, Capstone, ASan/TSan"
          : "Reverse engineering, vulnerability analysis, binary exploitation, Ghidra, Capstone, ASan/TSan",
    },
    {
      name: language === "fr" ? "Programmation" : "Programming",
      icon: <Code size={24} />,
      level: 80,
      description: "C, C++, Python, Bash, MATLAB",
    },
    {
      name: language === "fr" ? "Outils de sécurité" : "Security Tooling",
      icon: <Wrench size={24} />,
      level: 75,
      description: "Syft, Grype, Clang-Tidy, Cppcheck, Bear, ClamAV, Git",
    },
    {
      name: language === "fr" ? "Systèmes d’exploitation" : "Operating Systems",
      icon: <Terminal size={24} />,
      level: 75,
      description:
        language === "fr"
          ? "Linux (Ubuntu), internals du kernel, sécurité des systèmes"
          : "Linux (Ubuntu), kernel internals, system security",
    },
    {
      name: language === "fr" ? "Réseaux & Télécom" : "Networking & Telecom",
      icon: <Network size={24} />,
      level: 70,
      description:
        language === "fr"
          ? "CCNA1, TCP/IP, architecture 5G, OpenAirInterface, GSM/LTE/UMTS"
          : "CCNA1, TCP/IP, 5G architecture, OpenAirInterface, GSM/LTE/UMTS",
    },
    {
      name: language === "fr" ? "IA & Data Science" : "AI & Data Science",
      icon: <Brain size={24} />,
      level: 70,
      description:
        language === "fr"
          ? "Machine learning, détection de malware, feature engineering, computer vision"
          : "Machine learning, malware detection, feature engineering, computer vision",
    },
    {
      name: language === "fr" ? "Langues" : "Languages",
      icon: <Globe size={24} />,
      level: 85,
      description:
        language === "fr"
          ? "Anglais (TOEIC 920/980), Français (courant)"
          : "English (TOEIC 920/980), French (Fluent)",
    },
  ];
  return (
    <section id="skills" className="py-24 border-t border-white/10">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-semibold text-white">
          {language === "fr" ? "Compétences & Outils" : "Skills & Tools"}
        </h2>
        <p className="text-gray-400 mt-2">
          {language === "fr"
            ? "Expérience pratique en sécurité, cloud-native, analyse statique/dynamique et automatisation."
            : "Hands-on experience in security, cloud-native, static/dynamic analysis, and automation."}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="bg-[#151515] p-6 rounded-2xl flex flex-col gap-4 hover:scale-[1.03] transition-transform duration-300"
          >
            <div className="flex items-center gap-3">
              <div className="text-[#a5c9ff]">{tool.icon}</div>
              <h3 className="text-xl font-semibold text-white">{tool.name}</h3>
            </div>
            <p className="text-gray-400 text-sm">{tool.description}</p>

            {/* Proficiency bar */}
            <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden mt-2">
              <div
                className="h-2 bg-[#a5c9ff] rounded-full transition-all duration-1000"
                style={{ width: `${tool.level}%` }}
              />
            </div>
            <span className="text-gray-400 text-xs mt-1">{tool.level}%</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

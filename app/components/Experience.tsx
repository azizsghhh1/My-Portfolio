"use client";

// EXPERIENCE, PROJECTS & COMMUNITY
import ExperienceCard from "./ExperienceCard";
import { useLanguage } from "./LanguageContext";

export default function Experience() {
  const { language } = useLanguage();
  const t = (en: string, fr: string) => (language === "fr" ? fr : en);

  const experiences = [
    {
      title: t(
        "BubbleRAN (2025) — End-to-End Security for Cloud-Native 5G",
        "BubbleRAN (2025) — Sécurité de bout en bout pour 5G cloud-native"
      ),
      description: t(
        "SAST | SBOM | CI Security | Kubernetes | SecOps — Sophia Antipolis, France\nA full-spectrum DevSecOps security pipeline was designed for cloud-native 5G workloads, combining automated static analysis, supply-chain risk assessment, and real-time runtime enforcement. The solution leverages containerized CI/CD pipelines and kernel-level observability to detect vulnerabilities early and actively protect running systems. An integrated AI-driven interpretation layer translates security metrics into actionable insights, highlighting risks, weaknesses, and priorities for remediation, providing end-to-end visibility and intelligence across the software lifecycle.",
        "SAST | SBOM | Sécurité CI | Kubernetes | SecOps — Sophia Antipolis, France\nConception et mise en œuvre d’un pipeline DevSecOps complet dédié à des environnements 5G cloud-native, combinant analyse statique automatisée, évaluation des risques liés à la supply chain et protection runtime en temps réel. La solution s’appuie sur des pipelines CI/CD conteneurisés et une observabilité au niveau kernel pour détecter les vulnérabilités dès les premières phases du développement et sécuriser activement les charges de travail en production. Une couche d’interprétation assistée par IA transforme les métriques de sécurité en recommandations claires et priorisées, offrant une vision intelligente et continue de la posture de sécurité tout au long du cycle de vie logiciel."
      ),
    },
    {
      title: t(
        "MOABI Solutions (2 Months) — Sophia Antipolis (2025)",
        "MOABI Solutions (2 mois) — Sophia Antipolis (2025)"
      ),
      description: t(
        "Kernel Symbol Table Leakage: Meltdown | KASLR | Kernel Reverse Engineering — France\nThis project explores the practical exploitation of speculative execution vulnerabilities by leveraging Meltdown to extract privileged kernel information from user space. Through low-level systems programming and microarchitectural side-channel analysis, kernel memory was transiently accessed to reconstruct sensitive internal structures, effectively bypassing address space randomization defenses. The work highlights how hardware-level behaviors can undermine traditional software mitigations, demonstrating hands-on expertise in CPU internals, kernel memory layout, and real-world exploitation techniques, while emphasizing the critical importance of modern isolation mechanisms.",
        "Fuite de la table des symboles du noyau : Meltdown | KASLR | Reverse engineering kernel — France\nCe projet explore l’exploitation concrète des vulnérabilités liées à l’exécution spéculative, en s’appuyant sur Meltdown pour extraire des informations privilégiées du noyau depuis l’espace utilisateur. À travers de la programmation bas niveau et l’analyse de canaux auxiliaires microarchitecturaux, des données sensibles du noyau ont été récupérées de manière transitoire, permettant de contourner les mécanismes de randomisation de l’espace mémoire. Ce travail met en évidence les limites des protections logicielles face aux comportements matériels des processeurs et démontre une maîtrise approfondie des architectures CPU, du fonctionnement interne du noyau et des techniques d’exploitation avancées."
      ),
    },
    {
      title: t(
        "EURECOM (2024) — Secure Python Libraries Detection & Malware Analysis",
        "EURECOM (2024) — Détection de bibliothèques Python malveillantes"
      ),
      description: t(
        "Python | AI detection | Reverse Engineering | PyInstaller — Sophia Antipolis, France\nDeveloped a hybrid source-based strategy to detect malware, built datasets and applied ML to classify malicious PyInstaller binaries, created a prototype to analyze suspicious Python packages/libraries, reverse engineered PyInstaller binaries and source code to identify suspicious behavior, and applied ML techniques to identify obfuscated patterns in AI-related code dependencies.",
        "Python | Détection IA | Reverse Engineering | PyInstaller — Sophia Antipolis, France\nStratégie hybride basée sur le code source pour détecter les malwares, création de datasets et ML pour classer les binaires PyInstaller malveillants, prototype d’analyse de packages Python suspects, reverse des binaires et du code pour détecter des comportements anormaux, identification de patterns obfusqués dans des dépendances IA."
      ),
    },
    {
      title: t(
        "Sagemcom (2023) — Pothole Detection with Computer Vision",
        "Sagemcom (2023) — Détection de nids‑de‑poule"
      ),
      description: t(
        "Computer Vision | YOLOv8 | Object Detection | Pothole Mapping — Tunis, Tunisia\nApplied YOLOv8 to detect potholes and map their locations.",
        "Computer Vision | YOLOv8 | Détection d’objets | Cartographie — Tunis, Tunisie\nApplication de YOLOv8 pour détecter les nids‑de‑poule et cartographier leur localisation."
      ),
    },
    {
      title: t(
        "HitSolutions (2022) — NLP for Project Manager Software",
        "HitSolutions (2022) — NLP pour logiciel de gestion de projets"
      ),
      description: t(
        "NLP | Project Management | Software Development — Tunis, Tunisia\nResearch on enhancing project management software using NLP.",
        "NLP | Gestion de projet | Développement logiciel — Tunis, Tunisie\nRecherche sur l’amélioration des logiciels de gestion de projet avec le NLP."
      ),
    },
  ];

  const projects = [
    {
      title: t(
        "Meltdown + KASLR Break (2025) — Kernel Symbol Table Leakage",
        "Meltdown + KASLR Break (2025) — Fuite de la table des symboles"
      ),
      description: t(
        "Meltdown Attack | KASLR Bypass | Kernel Reverse Engineering — Sophia Antipolis, France. Exploited Meltdown to read protected kernel memory, combined KASLR prefetch side-channel techniques to locate and leak __ksymtab, analyzed leaked data to understand runtime kernel structure, and demonstrated a complete attack chain bypassing KASLR.",
        "Attaque Meltdown | Contournement KASLR | Reverse Engineering kernel — Sophia Antipolis, France. Exploitation de Meltdown pour lire la mémoire protégée, combinaison avec un side‑channel prefetch KASLR pour extraire __ksymtab, analyse des données pour comprendre la structure runtime du noyau."
      ),
    },
    {
      title: t(
        "Assembly Re-alignment Analysis (2024) — Disassembler Instruction Re-alignment",
        "Assembly Re-alignment (2024) — Réalignement d’instructions"
      ),
      description: t(
        "Capstone | Assembly | Reverse Engineering — Sophia Antipolis, France. Automated disassembly of 100+ executables using Capstone to analyze invalid instructions from random offsets and measured instruction re-alignment in 32-bit and 64-bit code.",
        "Capstone | Assembly | Reverse Engineering — Sophia Antipolis, France. Automatisation du désassemblage de 100+ exécutables pour analyser des instructions invalides à des offsets aléatoires et mesurer le réalignement en 32/64 bits."
      ),
    },
    {
      title: t(
        "Blockchain Federated Learning (2024) — Privacy-focused Federated Learning",
        "Blockchain Federated Learning (2024) — Federated Learning privé"
      ),
      description: t(
        "Blockchain | AI | Privacy | Federated Learning | Secret Network — Sophia Antipolis, France. Implemented privacy-preserving federated learning on Secret Network.",
        "Blockchain | IA | Confidentialité | Federated Learning | Secret Network — Sophia Antipolis, France. Implémentation d’un apprentissage fédéré privacy‑preserving sur Secret Network."
      ),
    },
    {
      title: t("SYSSEC Challenges (2023–2024) — Pentesting", "SYSSEC Challenges (2023–2024) — Pentesting"),
      description: t(
        "Pentesting | CTF | Exploits | Binary exploitation | Cryptography | Networking | Web exploitation — EURECOM, France. Ranked 9/80 in CTF challenges at EURECOM.",
        "Pentest | CTF | Exploits | Exploitation binaire | Crypto | Réseaux | Web — EURECOM, France. Classé 9/80 aux challenges CTF."
      ),
    },
    {
      title: t(
        "Medical Assistant Chatbot (2023) — NLP Medical Chatbot",
        "Medical Assistant Chatbot (2023) — Chatbot médical NLP"
      ),
      description: t(
        "NLP | Chatbot | Medical | AI — Tunis, Tunisia. Built a chatbot that provides disease information and precautions from symptoms using NLP.",
        "NLP | Chatbot | Médical | IA — Tunis, Tunisie. Création d’un chatbot fournissant des informations et précautions à partir de symptômes."
      ),
    },
    {
      title: t(
        "GestoControl (2022) — Gesture-based CV Mouse/Keyboard",
        "GestoControl (2022) — Souris/clavier par gestes"
      ),
      description: t(
        "Computer Vision | OpenCV | Gesture Recognition | MediaPipe — Tunis, Tunisia. Built a gesture-controlled system using OpenCV and MediaPipe. Video link available upon request.",
        "Computer Vision | OpenCV | Reconnaissance de gestes | MediaPipe — Tunis, Tunisie. Système de contrôle par gestes avec OpenCV et MediaPipe."
      ),
    },
  ];

  const socialLife = [
    {
      title: t(
        "President, SUP’CRT Club (2021–2022)",
        "Président, SUP’CRT Club (2021–2022)"
      ),
      description: t(
        "Leadership | Event Organization | Charity | Red Cross — SUP’COM, Tunis, Tunisia. Led initiatives for blood drives and charity events in collaboration with Red Cross/Crescent.",
        "Leadership | Organisation d’événements | Caritatif | Croix‑Rouge — SUP’COM, Tunis, Tunisie. Pilotage d’initiatives pour les dons de sang et événements caritatifs."
      ),
    },
    {
      title: t(
        "Community Manager, IEEE Club (2022–2023)",
        "Community Manager, IEEE Club (2022–2023)"
      ),
      description: t(
        "Community Management | Social Media | Event Promotion | IEEE — SUP’COM, Tunis, Tunisia. Managed social media presence, event promotion, and community engagement for the IEEE student branch.",
        "Community management | Réseaux sociaux | Promotion d’événements | IEEE — SUP’COM, Tunis, Tunisie. Gestion de la présence digitale et de l’engagement de la communauté."
      ),
    },
  ];
  return (
    <div id="experience" className="space-y-12">
      <section>
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          {t("Experience", "Expérience")}
        </h2>
        <div className="grid grid-cols-1 gap-6">
          {experiences.map((proj, index) => (
            <ExperienceCard key={index} title={proj.title} description={proj.description} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          {t("Projects", "Projets")}
        </h2>
        <div className="grid grid-cols-1 gap-6">
          {projects.map((proj, index) => (
            <ExperienceCard key={index} title={proj.title} description={proj.description} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          {t("Social Life", "Vie associative")}
        </h2>
        <div className="grid grid-cols-1 gap-6">
          {socialLife.map((proj, index) => (
            <ExperienceCard key={index} title={proj.title} description={proj.description} />
          ))}
        </div>
      </section>
    </div>
  
  );
}

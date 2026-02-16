"use client";

/* ABOUT ME */

import Image from "next/image";
import { useLanguage } from "./LanguageContext";

const About = () => {
  const { language } = useLanguage();
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  const title = language === "fr" ? "À propos" : "About Me";
  const paragraphOne =
    language === "fr"
      ? "Professionnel de la sécurité spécialisé en cloud-native et DevSecOps. Expérience pratique dans la définition et l’application de politiques de sécurité Kubernetes, l’intégration SAST, SBOM, détection de secrets et analyse de malware dans les pipelines CI/CD."
      : "Security professional focused on cloud-native and DevSecOps. Hands-on experience defining and enforcing Kubernetes security policies, integrating SAST, SBOM, secret detection, and malware analysis into CI/CD pipelines.";
  const paragraphTwo =
    language === "fr"
      ? "Mon parcours inclut la sécurité des systèmes, l’ingénierie reverse et l’analyse de vulnérabilités, avec des projets qui démontrent l’automatisation, l’adaptabilité et la prise de décision basée sur les données."
      : "Background includes system security, reverse engineering, and vulnerability analysis, with projects that showcase automation, adaptability, and data-driven decision-making.";
  const availability =
    language === "fr"
      ? "Ouvert aux postes SecOps/DevSecOps ou AI/Security."
      : "Open to SecOps/DevSecOps or AI/Security positions.";
  const educationTitle = language === "fr" ? "Éducation" : "Education";
  return (
    <section className="py-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

        {/* Left column: larger photo */}
        <div className="lg:col-span-4 flex justify-center">
        <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden hidden lg:block">
          <Image
            src={`${basePath}/images/aziz.jpg`}
            alt="Mohamed Aziz Sghaier"
            fill
            className="object-cover"
          />
        </div>

        </div>

        {/* Right column: Introduction text */}
        <div className="lg:col-span-8 space-y-6">
          <h2 className="text-4xl font-semibold leading-tight">{title}</h2>
          <p className="text-gray-400">
            {paragraphOne}
            <span className="block mt-2">{availability}</span>
          </p>
          <p className="text-gray-400">
            {paragraphTwo}
          </p>
          <div className="space-y-3 pt-2">
            <h3 className="text-2xl font-semibold">{educationTitle}</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <span className="text-white font-medium">EURECOM</span> — Post Master&apos;s in Security (2023–2026) ·
                Sophia Antipolis, France
              </li>
              <li>
                <span className="text-white font-medium">SUP&apos;COM</span> — ICT Engineering (2021–2023) · Tunis,
                Tunisia (rank 19/140)
              </li>
              <li>
                <span className="text-white font-medium">IPEIN, Nabeul</span> — Pre-Engineering in Math/Physics
                (2019–2021) · Nabeul, Tunisia (rank 74/1789)
              </li>
            </ul>
          </div>
</div>


      </div>
    </section>
  );
};

export default About;

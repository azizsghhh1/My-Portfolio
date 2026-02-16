"use client";

/* Home page */


import Navbar from "./Navbar"; // Always relative to this folder
import { useLanguage } from "./LanguageContext";
import Image from "next/image";
import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const { language } = useLanguage();

  const description =
    language === "fr"
      ? "Ingénieur en cybersécurité & conseiller sécurité, spécialisé en cloud-native et DevSecOps. Expérience pratique avec les politiques de sécurité Kubernetes, SAST, SBOM, détection de secrets et analyse de malware en CI/CD."
      : "Cybersecurity Engineer & Security Advisor focused on cloud-native and DevSecOps. Hands-on experience with Kubernetes security policies, SAST, SBOM, secret detection, and malware scanning in CI/CD.";

  const seekingText =
    language === "fr"
      ? "Actuellement ouvert aux postes SecOps/DevSecOps ou AI/Security."
      : "Currently seeking SecOps/DevSecOps or AI/Security roles.";

  return (
    <section id="me" className="py-16 md:py-24 relative">
  <Navbar /> {/* Transparent navbar with hamburger menu */}

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-10">
    {/* Left side: Text */}
    <div className="space-y-8">
      <h1 className="text-4xl md:text-8xl font-bold leading-[1.05] tracking-tight hover:text-[#a5c9ff]">
        Mohamed Aziz <br />
        <span className="text-[#a5c9ff]">Sghaier</span>
      </h1>

      <p className="text-gray-400 text-xl max-w-md leading-relaxed transition-colors hover:text-white">
        {description}
      </p>
      <p className="text-gray-400 text-base max-w-md">{seekingText}</p>
       {/* Social icons */}
      <div className="flex items-center gap-5">
        <a href="https://github.com/azizsghaier111" target="_blank" className="text-gray-400 hover:text-white transition">
          <Github size={22} />
        </a>
        <a
          href="https://www.linkedin.com/in/mohamed-aziz-sghaier-757b681a8/"
          target="_blank"
          className="text-gray-400 hover:text-[#0077b5] transition"
        >
          <Linkedin size={22} />
        </a>
        <a
          href="mailto:Mohamed-Aziz.Sghaier@eurecom.fr"
          className="text-gray-400 hover:text-white transition"
        >
          <Mail size={22} />
        </a>
      </div>
    </div>

    {/* Right side: Photo */}
    <div className="flex justify-center -mt-12">
      <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-[#a5c9ff] hover:border-white transition-colors duration-300">
        <Image src="/images/aziz.jpg" alt="Mohamed Aziz Sghaier" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
      </div>
    </div>
  </div>
  
</section>



  );
};

export default Hero;

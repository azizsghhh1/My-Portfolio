"use client";

import { useLanguage } from "./LanguageContext";

export default function Contact() {
  const { language } = useLanguage();
  return (
    <section className="py-20 border-t border-yellow-500/20">
      <h2 className="text-4xl font-bold mb-6">
        {language === "fr" ? "Contact" : "Contact"}
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        <div className="space-y-3 text-left">
          <p>Email: Mohamed-Aziz.Sghaier@eurecom.fr</p>
          <p>
            {language === "fr" ? "Téléphone" : "Phone"}: +33 6 02 54 82 81
          </p>
          <p>
            {language === "fr" ? "Localisation" : "Location"}: 3 rue Soutrane,
            06560 Valbonne, France
          </p>
        </div>

        <form
          action="https://formspree.io/f/xeelkoyd"
          method="POST"
          className="space-y-4"
        >
          <div>
            <label className="block text-sm mb-1">
              {language === "fr" ? "Nom" : "Name"}
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">
              {language === "fr" ? "Numéro" : "Phone"}
            </label>
            <input
              type="tel"
              name="phone"
              className="w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">
              {language === "fr" ? "Message" : "Message"}
            </label>
            <textarea
              name="message"
              rows={5}
              required
              className="w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 outline-none"
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 text-black px-6 py-2 rounded font-semibold"
          >
            {language === "fr" ? "Envoyer" : "Send"}
          </button>
          <p className="text-xs text-white/50">
            {language === "fr"
              ? "Formulaire propulsé par Formspree. Remplacez l’URL par votre identifiant."
              : "Form powered by Formspree. Replace the URL with your form ID."}
          </p>
        </form>
      </div>
    </section>
  );
}

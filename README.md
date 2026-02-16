# Mohamed Aziz Sghaier — Portfolio

Modern portfolio built with Next.js, Tailwind CSS, and an LLM-powered assistant. It showcases my experience in SecOps/DevSecOps and AI/Security, including cloud-native 5G security work, runtime protection, and applied research projects.

## Live
- GitHub Pages: https://azizsghhh1.github.io/My-Portfolio/

## Tech Stack
- Next.js 16
- Tailwind CSS
- Groq API (LLM assistant)
- Formspree (contact form)

## Features
- Bilingual UI (English/French) via global language toggle
- Recruiter-friendly experience/projects layout
- LLM assistant limited to profile knowledge
- Contact form (Formspree)
### 1) Install
```
npm install
```

### 2) Environment
Create a `.env` file with:
```
GROQ_API_KEY=your_key_here
```

### 3) Run
```
npm run dev
```

### 4) Build
```
npm run build
```

## Contact Form
Update the Formspree endpoint in [app/components/Contact.tsx](app/components/Contact.tsx):
```
https://formspree.io/f/xeelkoyd
```

## GitHub Pages
This project is configured for static export. The GitHub Pages workflow publishes the `out/` folder.

Note: API routes (LLM chatbot) won’t run on GitHub Pages. If you need the chatbot, deploy to a platform that supports Next.js server functions (e.g., Vercel or Render).

## License
All rights reserved.
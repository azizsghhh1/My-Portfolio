import './globals.css'
import { Inter } from 'next/font/google'
import AnimatedBackground from './components/AnimatedBackground'
import ChatBot from "./components/ChatBot";
import { LanguageProvider } from "./components/LanguageContext";

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full bg-[#0a0a0a] text-[#00ff7f]`}>
        <LanguageProvider>
          <AnimatedBackground />
          {children}
          <ChatBot />
        </LanguageProvider>
      </body>
    </html>
  )
}

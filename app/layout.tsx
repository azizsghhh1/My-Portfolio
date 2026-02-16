import './globals.css'
import { Inter } from 'next/font/google'
import AnimatedBackground from './components/AnimatedBackground'
import ChatBot from "./components/ChatBot";
import { LanguageProvider } from "./components/LanguageContext";
import Script from "next/script";

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <head>
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);} 
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
              `}
            </Script>
          </>
        )}
      </head>
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

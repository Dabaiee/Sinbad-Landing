import { Package2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Ship } from 'lucide-react';
export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 flex h-16 items-center gap-4 border-0 justify-between bg-background px-4 md:px-6">
        <Link href="#" className='flex flex-row'>
          <Ship className='mt-1'/>
          <h1 className="text-foreground font-bold text-2xl transition-colors hover:text-foreground ml-4">
              Sinbad
          </h1>
        </Link>

        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 lg:gap-6">
          <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Markets
          </Link>
          <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Docs
          </Link>
          <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Votes
          </Link>
        </nav>
        <Button variant="outline" size="lg" className='text-xl'>App</Button>

      </header>
      <main className="flex min-h-screen flex-col items-center text-white relative">
      
        <div className="relative w-full h-[60vh]">
          <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover object-position-left">
            <source src="/background.mp4" type="video/mp4" />
          </video>
          <div className="animated-text absolute inset-0 flex items-center justify-center">
            <p className="text-6xl font-semibold z-10">Exchange with confidence</p>
          </div>
        </div>

        <div className="w-full max-w-4xl mx-auto p-8 mt-44">
          <div className="text-center">
            <p className="text-5xl mb-4">Follow us on social for updates.</p>
            <div className="flex justify-center space-x-4">
              <a href="https://twitter.com/Sinbad_RWA" className="bg-white text-black rounded-full p-2">
                <img className="h-6 w-6" src="/x-twitter.svg" alt="Logo" />
              </a>
              <a href="https://t.me/sinbadrwa" className="bg-white text-black rounded-full p-2">
                <img className="h-6 w-6" src="/telegram.png" alt="Logo" />
              </a>
              <a href="#" className="bg-white text-black rounded-full p-2">
                <img className="h-6 w-6" src="/discord.png" alt="Logo" />
              </a>
            </div>
          </div>

          <div className="text-center my-64">
            <h2 className="text-5xl font-semibold mb-4">Subscribe</h2>
            <p className="mb-4">Sign up to be the first to get updates.</p>
            <form className="flex max-w-md mx-auto">
              <input type="email" placeholder="Email" className="flex-grow p-2 text-black" />
              <Button className="ml-2 px-4 py-2">SIGN UP</Button>
            </form>
          </div>
        </div>

        <footer className="w-full p-4 border-t border-gray-700 flex justify-end items-center mt-auto">
          <nav>
            <a className="ml-4">PRIVACY POLICY</a>
            <a className="ml-4">TERMS AND CONDITIONS</a>
          </nav>
        </footer>
      </main>
    </div>
    
  )
}
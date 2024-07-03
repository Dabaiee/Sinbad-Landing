import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-black text-white relative">
      <header className="w-full bg-black bg-opacity-50 p-4">
        <h1 className="text-4xl font-bold text-center">SINBADEX</h1>
      </header>

      <div className="relative w-full h-[60vh]">
        <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
          <source src="/background.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-6xl font-semibold z-10">Exchange with confidence</p>
        </div>
      </div>

      <div className="w-full max-w-4xl mx-auto p-8 space-y-12">
        <div className="text-center">
          <p className="text-5xl mb-4">Follow us on social for updates.</p>
          <div className="flex justify-center space-x-4">
            <a href="https://twitter.com/Sinbad_RWA" className="bg-white text-black rounded-full p-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            {/* Add more social media buttons here */}
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-5xl font-semibold mb-4">Subscribe</h2>
          <p className="mb-4">Sign up to be the first to get updates.</p>
          <form className="flex max-w-md mx-auto">
            <input type="email" placeholder="Email" className="flex-grow p-2 text-black" />
            <button type="submit" className="bg-white text-black px-4 py-2 ml-2">SIGN UP</button>
          </form>
        </div>
      </div>

      <footer className="w-full p-4 border-t border-gray-700 flex justify-between items-center mt-auto">
        <div className="text-center">
          <p>Copyright © 2024 Sinbadex - All Rights Reserved.</p>
        </div>
        
        <nav>
          <a href="#" className="ml-4">PRIVACY POLICY</a>
          <a href="#" className="ml-4">TERMS AND CONDITIONS</a>
        </nav>
      </footer>
    </main>
  )
}
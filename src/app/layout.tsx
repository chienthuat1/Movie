import {Search} from 'lucide-react';
import { HomeIcon } from '@heroicons/react/24/solid';
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
    <html lang="en">
      <body>
      <header className="relative">
          <nav className="sticky top-0 z-50 bg-amber-300 shadow">
              <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4 py-4">
                  <div className="flex-1">
                      <span className="font-bold text-lg">MySite</span>
                  </div>

                  <div className="flex items-center border border-gray-400 rounded px-3 py-2 w-96">
                      <button>
                          <Search className="w-5 h-5 mr-2 text-gray-600 hover:text-gray-900" />
                      </button>
                      <input
                          type="text"
                          placeholder="Tìm kiếm..."
                          className="outline-none flex-1 bg-amber-300"
                      />
                  </div>

                  <div className="flex-1 flex justify-end gap-4">
                      <a href="#" className="hover:underline text-blue-600">
                          <HomeIcon className="h-6 w-6 text-blue-500" />
                      </a>
                      <a href="#" className="hover:underline text-blue-600">About</a>
                      <a href="#" className="hover:underline text-blue-600">Sign In</a>
                      <a href="#" className="hover:underline text-blue-600">Sign Up</a>
                  </div>
              </div>
              <div className="relative">
                  <nav className="sticky top-0 z-50 bg-blue-100 shadow">
                      <div className="flex-1 flex justify-center gap-8">
                          <a href="#" className="hover:underline text-blue-600">
                              <HomeIcon className="h-6 w-6 text-blue-500" />
                          </a>
                          <a href="#" className="hover:underline text-blue-600">About</a>
                          <a href="#" className="hover:underline text-blue-600">Sign In</a>
                          <a href="#" className="hover:underline text-blue-600">Sign Up</a>
                      </div>
                  </nav>
              </div>
          </nav>
      </header>
        {children}
      <footer>
          <h1>ab</h1>
          <h1>ab</h1>
          <h1>ab</h1>

          <h1>ab</h1>
          <h1>ab</h1>

          <h1>ab</h1>
          v
          <h1>ab</h1>

          v

          <h1>ab</h1>

      </footer>
      </body>
    </html>
  );
}

'use client'

import { Menu } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="w-full h-16 bg-gray-900 text-white flex items-center justify-between px-4 md:px-6 border-b border-gray-800 fixed top-0 left-0 z-40 md:ml-64">
      <div className="flex items-center gap-3">
        <Menu className="md:hidden" size={24} />
      </div>
      <div>
        {/* Contoh Avatar / User */}
        <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-sm font-bold">
          U
        </div>
      </div>
    </header>
  )
}

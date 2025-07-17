'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, User } from 'lucide-react'

const navItems = [
  { name: 'Dashboard', href: '/employee', icon: Home },
  { name: 'Add Employee', href: '/employee/addEmployee', icon: User  },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="h-screen w-64 bg-gray-900 text-white fixed top-0 left-0 p-5 hidden md:block">
      <h1 className="text-xl font-bold mb-10">Employee</h1>
      <nav className="space-y-3">
        {navItems.map(({ name, href, icon: Icon }) => (
          <Link
            key={name}
            href={href}
            className={`flex items-center gap-3 px-4 py-2 rounded-md transition 
              ${pathname === href ? 'bg-blue-600' : 'hover:bg-gray-700'}`}
          >
            <Icon size={18} />
            <span>{name}</span>
          </Link>
        ))}
      </nav>
      
    </aside>
  )
}

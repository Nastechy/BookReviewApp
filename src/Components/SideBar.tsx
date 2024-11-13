'use client'

import { BookOpen } from 'lucide-react'
import React, { useState } from "react"

interface SidebarItem {
  name: string
  href: string
}

export default function Component() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0)

  const sidebarItems: SidebarItem[] = [
    { name: "Dashboard", href: "/home" },
    { name: "Profile", href: "/Profile" },
    { name: "Settings", href: "#" },
    { name: "Logout", href: "#" }
  ]

  const handleClick = (index: number) => {
    setActiveIndex(index)
  }

  return (
    <aside className="bg-gradient-to-br from-[#004d33] to-[#006341] text-white w-64 min-h-screen p-4">
      <div className="flex items-center mt-1">
        <BookOpen className="inline-block w-10 h-8 mr-2 text-[#00ff9d]" />
        <div className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-[#00ff9d] to-[#00a86b]">
          REVIEW
        </div>
      </div>
      <ul className="space-y-4 mt-12">
        {sidebarItems.map((item, index) => (
          <li key={index}>
            <a
              href={item.href}
              onClick={() => handleClick(index)}
              className={`block p-3 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg
                ${
                  activeIndex === index
                    ? "bg-gradient-to-r from-[#00a86b] to-[#00ff9d] text-[#004d33] font-semibold"
                    : "text-[#a3e0c5] hover:text-[#004d33]"
                }
                hover:bg-gradient-to-r hover:from-[#00c17d] hover:to-[#00ffa1]
                active:bg-gradient-to-r active:from-[#00a86b] active:to-[#00ff9d] active:text-[#004d33]
              `}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  )
}
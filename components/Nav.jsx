"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"

const links = [
  { path: "/", name: "home" },
  { path: "/projects", name: "my projects" },
  { path: "/contact", name: "contact" },
]

export default function Nav({
  containerStyles,
  linkStyles,
  underlineStyles,
  onNavigate, // 🔥 Use this
}) {
  const pathname = usePathname()

  return (
    <nav className={containerStyles}>
      {links.map((link) => {
        const isActive = pathname === link.path

        return (
          <Link
            key={link.path}
            href={link.path}
            onClick={() => onNavigate?.()} // 👈 Call parent callback
            className={`${linkStyles} relative capitalize  `}
          >
            {/* Underline */}
            {isActive && (
              <motion.span
                layoutId="underline"
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                transition={{ type: "tween" }}
                className={underlineStyles}
              />
            )}

            {link.name}
          </Link>
        )
      })}
    </nav>
  )
}

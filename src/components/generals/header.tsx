'use client'

import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { usePathname } from 'next/navigation'
import { NAV_ITEMS } from '@/constants/(translate)/navbar'
import { ModeToggle } from './(theme)/theme-toggle'
import LanguageSwitcher from './(navbar)/language-switcher'
import { isUrduTypedLanguage } from '@/constants/language'
import ThemeToggleButton from './theme-switcher'
import BrandLogoTitle from './brand-logo'

interface HeaderProps {
  locale: string
}

const Header = ({ locale }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathName = usePathname()
  const { resolvedTheme } = useTheme()

  // Check if current locale is RTL / Urdu-typed
  const isRtl = isUrduTypedLanguage(locale)

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur transition-all"
    >
      <div
        className={`mx-auto flex items-center justify-between ${
          isScrolled ? 'max-w-4xl border-2 rounded-full p-5 mt-10' : 'max-w-6xl'
        } transition-all duration-300 py-4 md:px-4 px-6`}
        style={{
          direction: isRtl ? 'rtl' : 'ltr'
        }}
      >
        {/* Logo */}
      <BrandLogoTitle locale={locale}/>

        {/* Center nav items for desktop */}
        <div
          className={`hidden md:flex flex-row gap-6 items-center justify-center flex-1 text-sm ${
            isRtl ? 'rtl' : ''
          }`}
        >
          {NAV_ITEMS.map((item: any) => (
            <Link
              key={item.key}
              href={`${locale}/${item.key}`}
              className="hover:text-orange-600"
            >
              {item.label[locale as keyof typeof item.label] || item.label.en}
            </Link>
          ))}
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-3 ">
                    <ThemeToggleButton/>
          
          {/* <ModeToggle /> */}
          <LanguageSwitcher />
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="md:hidden bg-white dark:bg-black shadow-md border-t border-gray-200 dark:border-gray-800"
          style={{
            direction: isRtl ? 'rtl' : 'ltr'
          }}
        >
          <div className="flex flex-col px-6 py-4 space-y-3 text-sm">
            {NAV_ITEMS.map((item: any) => (
              <Link
                key={item.key}
                href={`/${item.key}`}
                className="hover:text-orange-600"
                onClick={() => setMenuOpen(false)}
              >
                {item.label[locale as keyof typeof item.label] || item.label.en}
              </Link>
            ))}
            <Button size="sm" className="w-full">
              Try for free
            </Button>
          </div>
        </div>
      )}
    </motion.header>
  )
}

export default Header

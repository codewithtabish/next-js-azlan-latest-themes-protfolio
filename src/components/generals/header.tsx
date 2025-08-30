'use client'

import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { usePathname } from 'next/navigation'
import { NAV_ITEMS } from '@/constants/(translate)/navbar'
import { isUrduTypedLanguage } from '@/constants/language'
import ThemeToggleButton from './theme-switcher'
import BrandLogoTitle from './brand-logo'
import LanguageSwitcher from './(navbar)/language-switcher'
import { Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetClose } from '@/components/ui/sheet'

interface HeaderProps {
  locale: string
}

const Header = ({ locale }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathName = usePathname()
  const { resolvedTheme } = useTheme()
  const isRtl = isUrduTypedLanguage(locale)

  // Scroll effect (optional, for shadow)
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
      className={`fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur transition-all border-b border-border shadow-sm`}
      style={{
        direction: isRtl ? 'rtl' : 'ltr'
      }}
    >
      <div
        className={`mx-auto flex items-center justify-between max-w-7xl w-full px-4 sm:px-6 py-3 md:py-4`}
      >
        {/* Logo */}
        <BrandLogoTitle locale={locale} />

        {/* Desktop nav */}
        <nav className="hidden md:flex flex-row gap-6 items-center flex-1 justify-center text-sm font-medium">
          {NAV_ITEMS.map((item: any) => (
            <Link
              key={item.key}
              href={`/${locale}/${item.key}`}
              className="hover:text-orange-600 transition-colors"
            >
              {item.label[locale as keyof typeof item.label] || item.label.en}
            </Link>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          {/* Show language switcher always, but theme toggle only on md+ */}
          <LanguageSwitcher />
          <div className="hidden md:block">
            <ThemeToggleButton />
          </div>
          {/* Mobile menu button */}
          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label="Open menu"
              onClick={() => setMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </Button>
            <SheetContent
              side={isRtl ? 'right' : 'left'}
              className="w-[90vw] max-w-xs p-0"
            >
              <SheetHeader className="px-6 py-4 border-b border-border flex items-center justify-between">
                <SheetTitle>
                  <BrandLogoTitle locale={locale} />
                </SheetTitle>
                {/* Only one close button here */}
                <SheetClose asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full"
                    aria-label="Close menu"
                  >
                    <span className="sr-only">Close</span>
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                  </Button>
                </SheetClose>
              </SheetHeader>
              <nav className="flex flex-col gap-4 px-6 mt-4 text-lg font-medium">
                {NAV_ITEMS.map((item: any) => (
                  <SheetClose asChild key={item.key}>
                    <Link
                      href={`/${locale}/${item.key}`}
                      className="hover:text-orange-600 transition-colors"
                    >
                      {item.label[locale as keyof typeof item.label] || item.label.en}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
              {/* Only show theme toggle in sheet on mobile */}
              <div className="flex gap-3 px-6 mt-8 mb-4">
                <ThemeToggleButton />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  )
}

export default Header

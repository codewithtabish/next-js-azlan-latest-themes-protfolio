import EducationSection from '@/components/generals/(home)/(eductaion)/education-section'
import HeroAboutSection from '@/components/generals/(home)/hero-about'
import HeroSection from '@/components/generals/(home)/hero-section'
import HoverBackgroundDark from '@/components/generals/(home)/hover-bg'
import HomeLogoCloud from '@/components/generals/(home)/logo-clouds'
import CardStackExample from '@/components/generals/(home)/stack-card'
import FeedbackSection from '@/components/generals/(home)/feedback-section'
import { ModeToggle } from '@/components/generals/(theme)/theme-toggle'
import { CardDemo } from '@/components/generals/check-card'
import { Button } from '@/components/ui/button'
import { HoverBackground } from '@/components/ui/hover-background'
import React from 'react'
import CallToActionSection from '@/components/generals/(home)/cta-section'
import SkillSection from '@/components/generals/(home)/skill-section'
import NotificationCenter from '@/components/generals/glass'
import CtaParentSection from '@/components/generals/(home)/cta-parent-section'

export default async function LocalePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <>
<main className="w-full min-h-screen flex justify-center bg-background">
      <div
        className="
          w-full
          max-w-[100vw]
          sm:max-w-screen-sm
          md:max-w-screen-md
          lg:max-w-screen-lg
          xl:max-w-screen-xl
          2xl:max-w-screen-2xl
          mx-auto
          px-2
          sm:px-4
          md:px-8
          flex flex-col
          space-y-10
          sm:space-y-14
          md:space-y-16
          lg:space-y-24
          items-center
          
        "
      >  
      <HoverBackground
        colors={{
          background: '',
          objects: [
    
  // Greens / Blues
  'bg-primary',
  'bg-primary',
  'bg-primary',
  'bg-primary',
  'bg-primary',
  'bg-primary',
  'bg-primary',
  'bg-primary',
  'bg-teal-500/30',
  'bg-green-500/30',
  'bg-lime-500/30',
  'bg-cyan-500/30',
  'bg-blue-500/30',

  // Purples / Pinks
  'bg-indigo-500/30',
  'bg-violet-500/30',
  'bg-purple-500/30',
  'bg-fuchsia-500/30',
  'bg-pink-500/30',
  'bg-rose-500/30',

  // Warm Tones
  'bg-red-500/30',
  'bg-orange-500/30',
  'bg-amber-500/30',
  'bg-yellow-500/30',

  // Cool Neutrals
  'bg-slate-500/30',
  'bg-gray-500/30',
  'bg-zinc-500/30',
  'bg-neutral-500/30',
  'bg-stone-500/30',

  // Darker / Subtle Variants
  'bg-emerald-700/20',
  'bg-indigo-700/20',
  'bg-rose-700/20',
  'bg-slate-700/20',
  'bg-purple-700/20',
  'bg-cyan-700/20',
]
,
          
          glow: 'shadow-emerald-400/70',
        }}
        objectCount={12}
      >
       
       
    <HeroSection locale={locale}/>
      <HeroAboutSection locale={locale}/>
      <div className=' flex justify-center items-center'>
              <EducationSection locale={locale}/>

      </div>
      <SkillSection locale={locale}/>

      <HomeLogoCloud locale={locale}/>
      <FeedbackSection locale={locale} />
      {/* <CallToActionSection locale={locale} /> */}
  
      {/* <NotificationCenter/> */}
      
    
      
          </HoverBackground>
    </div>

    

    
    </main>
        <div className='min-w-screen'>
      <CtaParentSection/>

      </div>
    </>
  )
}

// export default HomePage

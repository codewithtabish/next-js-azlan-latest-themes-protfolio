import { ThemeProvider } from "@/components/generals/(theme)/theme-provider";
import "../globals.css";
import { getDirection } from "@/lib/localDirection";
import Header from "@/components/generals/header";
import { allowedLocales, avalible_languages } from "@/constants/language";
import Footer from "@/components/generals/footer";
import FooterBG from "@/components/generals/footer-bg";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SocialBar } from "@/components/generals/social-bar";


// import LanguageSwitcher from "@/components/custom/language-switcher";
// import Navbar from "@/components/custom/(home)/navbar";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { SocialBar } from "@/components/custom/(home)/social-bar";
// import Footer from "@/components/mvpblocks/footer-4col";
// import { ThemeProvider } from "@/components/ui/theme-provider";
// import { getSiteMetadata } from "@/lib/seo/seo-data";

type LocaleType = typeof allowedLocales[number];

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const safeLocale = allowedLocales.includes(locale as LocaleType) ? locale : "en";
  const dir = getDirection(safeLocale);

  return (
    <html lang={safeLocale} dir={dir} suppressHydrationWarning>
      
       <body className="antialiased  min-h-screen overflow-x-hidden">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <TooltipProvider delayDuration={0}>
            {/* <LanguageSwitcher /> */}
            {/* <LogoNavbar /> */}
            <SocialBar />
            <main
              className="
                flex flex-col
                min-h-screen
                w-full
                container
                mx-auto
                px-2
                sm:px-4
                md:px-6
                lg:px-8
                xl:px-10
                2xl:px-12
                py-4
                items-center
                justify-start
                transition-all
              "
            >
            <Header locale={locale} />
              {children}
              <Footer locale={locale} />
              {/* <FooterBG/> */}
            </main>
            {/* @ts-ignore */}
            {/* <Footer locale={safeLocale} /> */}
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

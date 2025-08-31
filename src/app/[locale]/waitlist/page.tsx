// import BackButtonComp from '@/components/custom/(general)/back-comp';
// import { getWaitlistMetadata } from '@/lib/seo/waitlist-seo';
// 

import WaitlistComp from "@/components/generals/(waitlist)/wait-list-comp";
import { HoverBackground } from "@/components/ui/hover-background";
import BackButton from "@/constants/(translate)/back-comp";

// --- Allowed locales and type ---
const allowedLocales = [
  "en", "ur", "ar", "fr", "zh", "de", "ja", "es"
] as const;
type LocaleType = typeof allowedLocales[number];

const WAITLIST_HEADING = {
  en: "Join the Waitlist",
  ur: "ویٹ لسٹ میں شامل ہوں",
  ar: "انضم إلى قائمة الانتظار",
  zh: "加入候补名单",
  fr: "Rejoindre la liste d'attente",
  de: "Zur Warteliste",
  ja: "ウェイトリストに参加",
  es: "Únete a la lista de espera",
};

// Dynamic SEO metadata for Waitlist page (Next.js 15: params is a Promise)
// export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
//   const { locale } = await params;
//   const safeLocale = (allowedLocales.includes(locale as LocaleType) ? locale : "en") as LocaleType;
//   return getWaitlistMetadata(safeLocale);
// }

export default async function WaitListPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const safeLocale = (allowedLocales.includes(locale as LocaleType) ? locale : "en") as LocaleType;
  const heading = WAITLIST_HEADING[safeLocale] || WAITLIST_HEADING.en;
  const isRtl = ["ar", "ur", "fa", "he"].includes(safeLocale);

  return (
    <>
    <div className=" absolute left-10 w-full top-6">
        

        <BackButton/>

    </div>
    <main className="w-full min-h-screen bg-background flex items-center justify-center ">
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

            {/* <BackButtonComp locale={locale}/> */}
      
      <section
        aria-labelledby="waitlist-heading"
        className="
          w-full
          max-w-[100vw]
          sm:max-w-screen-sm
          md:max-w-screen-md
          lg:max-w-screen-lg
          xl:max-w-screen-xl
          2xl:max-w-screen-2xl
          mx-auto
          py-8 px-2
          sm:py-12 sm:px-4
          md:py-16 md:px-6
          lg:py-20 lg:px-8
          xl:py-24 xl:px-10
          2xl:py-32 2xl:px-12
        "
        dir={isRtl ? "rtl" : "ltr"}
      >
        <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto">
          <h1
            id="waitlist-heading"
            className={`
              text-2xl
              sm:text-3xl
              md:text-4xl
              lg:text-5xl
              font-bold
              mb-6
              text-center
              ${isRtl ? "text-right" : ""}
            `}
          >
            {/* {heading} */}
          </h1>

          {/* @ts-ignore */}
          <WaitlistComp locale={safeLocale} />
        </div>
      </section>
                    </HoverBackground>

    </main>
    </>
  );
}

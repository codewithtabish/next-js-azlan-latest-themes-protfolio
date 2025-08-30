'use client'

import { usePathname, useRouter } from "next/navigation";
import { Globe, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { avalible_languages, isUrduTypedLanguage } from "@/constants/language";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1] || "en"; // default to 'en'
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const isRtl = isUrduTypedLanguage(currentLocale);

  const handleLocaleChange = (newLocale: string) => {
    if (newLocale === currentLocale) return;
    setLoading(true);
    setOpen(false);

    const segments = pathname.split("/");
    segments[1] = newLocale;
    const newPath = segments.join("/") || `/${newLocale}`;

    router.push(newPath);
  };

  // Filter languages by search query
  const filteredLanguages = avalible_languages.filter((lang) =>
    lang.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {/* Loading Overlay */}
      {loading && (
        <div className="flex items-center justify-center backdrop-blur-sm transition-all">
          <Loader2 className="animate-spin text-primary" size={48} />
        </div>
      )}

      <div
        className="cursor-pointer"
        style={{
          userSelect: "none",
          direction: isRtl ? "rtl" : "ltr" // apply RTL for Urdu-typed languages
        }}
      >
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              size="icon"
              variant="ghost"
              className={cn(
                "rounded-full border border-muted bg-background shadow-sm hover:bg-muted/50 transition-colors p-2",
                open && "ring-2 ring-primary"
              )}
              aria-label="Change language"
              disabled={loading}
            >
              <Globe size={20} className="text-primary" />
            </Button>
          </PopoverTrigger>

          <PopoverContent
            align="end"
            className="w-56 p-2 rounded-xl border bg-background shadow-xl animate-fade-in"
            sideOffset={8}
          >
            <CommandDialog open={open} onOpenChange={setOpen}>
              <Command>
                <CommandInput
                  placeholder="Search language..."
                  value={search}
                  onValueChange={setSearch}
                  className="border-b pb-1 mb-2"
                />
                <CommandList>
                  <CommandEmpty>No languages found.</CommandEmpty>
                  <CommandGroup>
                    {filteredLanguages.map((lang) => (
                      <CommandItem
                        key={lang.code}
                        onSelect={() => handleLocaleChange(lang.code)}
                        className={cn(
                          "justify-start w-full text-sm px-3 py-2 rounded-lg transition-all",
                          lang.code === currentLocale &&
                            "pointer-events-none font-semibold bg-primary/90 text-white"
                        )}
                        aria-current={lang.code === currentLocale}
                      >
                        {lang.name}
                        {loading && lang.code !== currentLocale && (
                          <Loader2 className="ml-2 animate-spin" size={16} />
                        )}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </CommandDialog>
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
}

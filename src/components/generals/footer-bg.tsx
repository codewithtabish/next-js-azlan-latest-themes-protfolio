import { GridBackground } from '@/components/ui/grid-background';
import Link from 'next/link';

export default function FooterBG() {
  return (
    <div className="relative h-26 bg-none w-full rounded-xl overflow-hidden">
      <GridBackground gridSize="6:6"
      beams={{
        count:2220,
        colors:["bg-cyan-400", "bg-purple-400", "bg-fuchsia-400", "bg-violet-400", "bg-blue-400", "bg-indigo-400", "bg-green-400", "bg-yellow-400", "bg-orange-400", "bg-red-400", "bg-pink-400", "bg-rose-400"]
      }}
      colors={{
        borderColor:"rgba(0,0,0,0.01)",
        borderStyle:'dashed'
        // borderSize:''
      }}
      className='bg-background/10 flex justify-center flex-col items-center'

      >
        <div className="flex items-center gap-3 justify-center h-full">
          <h1 className="font-bold text-3xl text-primary opacity-[.5] italic">CODEWITHAZLAN</h1>
        </div>
      </GridBackground>
    </div>
  );
}

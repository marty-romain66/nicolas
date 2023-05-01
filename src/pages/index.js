import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Presentation from '@/components/Presentation'
import Soin from '@/components/Soin'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Toggle from '@/components/Toggle'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
<>
<div className="h-full relative">
  <Toggle/>
<Header/>
<Presentation/>
<Soin/>
<Contact/>
<Footer/>
</div>
</>
  )
}

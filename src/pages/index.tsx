import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Footer, Hero, Navbar } from '@/components'


export default function Home() {
  return (
    <>
     <Navbar />

     <div >
      <Hero />

     </div>
     <Footer />
   
    </>
   
  )
}

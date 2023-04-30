import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '@/components/common/Layout';
import { Hero } from '@/components';


export default function Home() {
  return (
    <Layout>
      <Hero />
    </Layout>
  )
}

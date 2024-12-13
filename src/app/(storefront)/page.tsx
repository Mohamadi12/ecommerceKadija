import { CategorySelection } from '@/components/global/storefront/CategorySelection'
import { Hero } from '@/components/global/storefront/Hero'
import Link from 'next/link'
import React from 'react'

const IndexPage = () => {
  return (
   <>
    <Hero/>
    <CategorySelection/>
   </>
  )
}

export default IndexPage
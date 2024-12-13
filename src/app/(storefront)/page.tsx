import { CategorySelection } from '@/components/global/storefront/CategorySelection'
import { FeaturedProducts } from '@/components/global/storefront/FeaturedProducts'
import { Hero } from '@/components/global/storefront/Hero'
import React from 'react'

const IndexPage = () => {
  return (
   <>
    <Hero/>
    <CategorySelection/>
    <FeaturedProducts/>
   </>
  )
}

export default IndexPage
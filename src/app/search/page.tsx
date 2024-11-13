'use client'

import SearchContent from '@/Components/searchContent'
import { Suspense } from 'react'

export default function Page() {
  return (
    <Suspense fallback={<div className="p-4">Loading search page...</div>}>
      <SearchContent />
    </Suspense>
  )
}
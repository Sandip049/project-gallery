import React from 'react'
// import getPagination from '@/lib/getpagination'
import Link from 'next/link'


type FooterProps = {
    search: string | undefined;
    // page: string | undefined;
    nextPage: string | null;
    prevPage: string | null;
}

export default function footer({search,nextPage, prevPage }: FooterProps) {
  return (
    <footer className='flex justify-center gap-4 bg-gray-800'>
        {prevPage && <Link href={`/results/${search}/${prevPage}`} className='text-white py-4 flex justify-center'>
        Prev &lt;&lt;
        </Link>}


        {nextPage && <Link href={`/results/${search}/${nextPage}`} className='text-white py-4 flex justify-center'>
        Next &gt;&gt;
        </Link>}
    </footer>
  )
}


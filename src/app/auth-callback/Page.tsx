import React from 'react'
import { useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation';
const Page = () => {
    const Router = useRouter();
    const searchParams = useSearchParams();
    searchParams.get('origin');
  return (
    <div>page</div>
  )
}

export default Page
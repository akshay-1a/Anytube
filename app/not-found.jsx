import Link from 'next/link'
 
export const dynamic="force-dynamic"

export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/" className='text-blue-500 font-bold'>Return Home</Link>
    </div>
  )
}
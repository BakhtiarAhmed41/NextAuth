import { Poppins } from 'next/font/google'
import {Button} from '@/components/ui/button'
import{cn} from  '@/lib/utils'
import { LoginButton } from '@/components/auth/login_button'

const font = Poppins({
    subsets: ["latin"],
    weight: ["600"]
})
export default function Home() {
  return (
   
   <main className='flex h-full flex-col items-center justify-center bg-sky-600'>
    <div className='space-y-6 text-center'>
      <h1 className={cn('text-6xl font-bold text-white drop-shadow-md', font.className,) }>
          🔐 Auth
      </h1>
      <p className='text-white text-lg'>
        A simple authentication service
      </p>
      <LoginButton>
      <Button variant="secondary" size="lg" className='mt-5'>
        Sign in 
      </Button>
      </LoginButton>
    </div>

   </main>
    )
}

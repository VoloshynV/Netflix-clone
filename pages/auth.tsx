import Input from '@/components/Input'
import { useCallback, useState } from 'react'

enum Variant {
  LOGIN,
  SIGNUP,
}

const Auth = () => {
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [variant, setVariant] = useState<Variant>(Variant.LOGIN)

  const toggleVariant = useCallback(() => {
    setVariant((prev) => (prev === Variant.LOGIN ? Variant.SIGNUP : Variant.LOGIN))
  }, [])

  const isLogin = variant === Variant.LOGIN

  return (
    <div className='relative h-full w-full bg-[url("/images/hero.jpeg")] bg-no-repeat bg-center bg-cover'>
      <div className='bg-black w-full h-full lg:bg-opacity-50'>
        <nav className='px-12 py-5'>
          <img src='/images/logo.png' alt='logo' className='h-12' />
        </nav>
        <div className='flex justify-center'>
          <div className='bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full'>
            <h2 className='text-white text-4xl mb-8 font-semibold'>
              {isLogin ? 'Sign in' : 'Sign up'}
            </h2>
            <div className='flex flex-col gap-4'>
              {!isLogin && (
                <Input
                  label='Username'
                  onChange={(e) => setUserName(e.target.value)}
                  id='username'
                  value={userName}
                />
              )}
              <Input
                label='Email'
                onChange={(e) => setEmail(e.target.value)}
                id='email'
                type='email'
                value={email}
              />
              <Input
                label='Password'
                onChange={(e) => setPassword(e.target.value)}
                id='password'
                type='password'
                value={password}
              />
            </div>
            <button className='bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition'>
              {isLogin ? 'Login' : 'Sign up'}
            </button>
            <p className='text-neutral-500 mt-12'>
              {isLogin ? "Don't have an account?" : 'Already have an account?'}
              <span className='text-white ml-1 hover:underline' onClick={toggleVariant}>
                {isLogin ? 'Sign up' : 'Login'}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth

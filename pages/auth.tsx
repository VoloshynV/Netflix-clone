import Input from '@/components/Input'
import axios from 'axios'
import { signIn } from 'next-auth/react'
import { useCallback, useState } from 'react'
import { FaGithub } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

enum Variant {
  LOGIN,
  SIGNUP,
}

const Auth = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [variant, setVariant] = useState<Variant>(Variant.LOGIN)

  const toggleVariant = useCallback(() => {
    setVariant((prev) => (prev === Variant.LOGIN ? Variant.SIGNUP : Variant.LOGIN))
  }, [])

  const isLogin = variant === Variant.LOGIN

  const login = useCallback(async () => {
    try {
      await signIn('credentials', {
        email,
        password,
        redirect: false,
        callbackUrl: '/profiles',
      })
    } catch (error) {
      console.log(error)
    }
  }, [email, password])

  const register = useCallback(async () => {
    try {
      await axios.post('/api/register', {
        email,
        name,
        password,
      })

      login()
    } catch (error) {
      console.log(error)
    }
  }, [email, name, password, login])

  const handleOnButtonClick = () => {
    isLogin ? login() : register()
  }

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
                  onChange={(e) => setName(e.target.value)}
                  id='username'
                  value={name}
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
            <button
              onClick={handleOnButtonClick}
              className='bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition'>
              {isLogin ? 'Login' : 'Sign up'}
            </button>
            <div className='flex flex-row items-center gap-4 mt-8  justify-center'>
              <div
                onClick={() => signIn('google', { callbackUrl: '/profiles' })}
                className='w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition'>
                <FcGoogle size={30} />
              </div>
              <div
                onClick={() => signIn('github', { callbackUrl: '/profiles' })}
                className='w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition'>
                <FaGithub size={30} />
              </div>
              <FaGithub size={30} />
            </div>
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

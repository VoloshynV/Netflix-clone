import NavbarItem from './NavbarItem'

import cn from 'classnames'
import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import { BsBell, BsChevronDown, BsSearch } from 'react-icons/bs'
import AccountMenu from './AccountMenu'
import MobileMenu from './MobileMenu'

const routes = [
  {
    label: 'Home',
  },
  {
    label: 'Series',
  },
  {
    label: 'Films',
  },
  {
    label: 'New & Popular',
  },
  {
    label: 'My List',
  },
  {
    label: 'Browse by languages',
  },
]

const TOP_OFFSET = 66

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [showAccountMenu, setShowAccountMenu] = useState(false)
  const [showBackground, setShowBackground] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > TOP_OFFSET) {
        setShowBackground(true)
      } else {
        setShowBackground(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu((prev) => !prev)
  }, [])

  const toggleAccountMenu = useCallback(() => {
    setShowAccountMenu((prev) => !prev)
  }, [])

  return (
    <nav className='w-full fixed z-40'>
      <div
        className={cn('px-4 md:px-16 py-6 flex items-center transition duration-500', {
          'bg-zinc-900': showBackground,
          'bg-opacity-90': showBackground,
        })}>
        <Image className='h-4 lg:h-7' src='/images/logo.png' alt='Logo' width={104} height={28} />
        <div className='ml-8 gap-7 hidden lg:flex'>
          {routes.map(({ label }) => (
            <NavbarItem key={label} label={label} />
          ))}
        </div>
        <div
          onClick={toggleMobileMenu}
          className='lg:hidden flex items-center gap-2 ml-8 cursor-pointer relative'>
          <p className='text-white text-sm'>Browse</p>
          <BsChevronDown
            className={cn('text-white transition', { 'rotate-180': showMobileMenu })}
          />
          <MobileMenu visible={showMobileMenu} menuItems={routes} />
        </div>
        <div className='flex ml-auto gap-7 items-center'>
          <div className='text-gray-200 hover:text-gray-300 cursor-pointer transition'>
            <BsSearch />
          </div>
          <div className='text-gray-200 hover:text-gray-300 cursor-pointer transition'>
            <BsBell />
          </div>
          <div
            onClick={toggleAccountMenu}
            className='flex items-center gap-2 cursor-pointer relative'>
            <div className='w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden'>
              <Image src='/images/default-blue.png' alt='Logo' width={40} height={40} />
            </div>
            <BsChevronDown
              className={cn('text-white transition', { 'rotate-180': showAccountMenu })}
            />
            <AccountMenu visible={showAccountMenu} />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

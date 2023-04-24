import { signOut } from 'next-auth/react'
import { FC } from 'react'

import useCurrentUser from '@/hooks/useCurrentUser'

interface AccountMenuProps {
  visible: boolean
}

const AccountMenu: FC<AccountMenuProps> = ({ visible }) => {
  const { data } = useCurrentUser()

  if (!visible) {
    return null
  }
  return (
    <div className='absolute top-14 right-0 flex w-56 flex-col border-2 border-gray-800 bg-black py-5'>
      <div className='flex flex-col'>
        <div className='group/item flex w-full items-center gap-x-3 px-3'>
          <img className='w-8 rounded-md' src='/images/default-blue.png' alt='' />
          <p className='text-sm text-white group-hover/item:underline'>{data?.name}</p>
        </div>
        <hr className='my-4 h-px border-0 bg-gray-600' />
        <div
          onClick={() => signOut()}
          className='px-3 text-center text-sm text-white hover:underline'>
          SignOut
        </div>
      </div>
    </div>
  )
}

export default AccountMenu

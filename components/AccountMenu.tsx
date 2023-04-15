import { signOut } from 'next-auth/react'
import { FC } from 'react'

interface AccountMenuProps {
  visible: boolean
}

const AccountMenu: FC<AccountMenuProps> = ({ visible }) => {
  if (!visible) {
    return null
  }
  return (
    <div className='bg-black w-56 absolute top-14 right-0 py-5 flex-col border-2 border-gray-800 flex'>
      <div className='flex flex-col'>
        <div className='px-3 group/item flex items-center w-full gap-x-3'>
          <img className='w-8 rounded-md' src='/images/default-blue.png' alt='' />
          <p className='text-white text-sm group-hover/item:underline'>Username</p>
        </div>
        <hr className='bg-gray-600 border-0 h-px my-4' />
        <div
          onClick={() => signOut()}
          className='px-3 text-center text-white text-sm hover:underline'>
          SignOut
        </div>
      </div>
    </div>
  )
}

export default AccountMenu

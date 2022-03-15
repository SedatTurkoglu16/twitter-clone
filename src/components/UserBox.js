import React from 'react'

const UserBox = () => {
  return (
    <div className='flex justify-content items-center mb-6 hover:bg-primary-light cursor-pointer rounded-full py-2 px-4 transform transition-colors duration-700'>
        <img className='w-11 h-11 rounded-full' alt='profile' src='https://pbs.twimg.com/profile_images/1487136184337842178/vknMZ6Zx_400x400.jpg' />
        <div className='flex flex-col ml-3'>
            <span className='font-bold text-md text-black'>Sedoş Türkoğlu</span>
            <span className='text-sm text-gray-dark'>@SedatTurkoglu16</span>
        </div>
    </div>
  )
}

export default UserBox
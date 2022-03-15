import React from 'react'
import { SparklesIcon } from '../icons/Icon'
import Input from '../Input'

const Feed = () => {
  return (
    <div className="flex-grow border-l border-r border-gray-100">
      <div className="text-black flex items-center sm:justify-between py-2 px-3 sticky top-0 z-50 border-b border-gray-100">
        <h2 className="text-lg sm:text-xl font-bold">Home</h2>
        <div className="hoverAnimation w-9 h-9 flex items-center justify-center xl:px-0 ml-auto">
          <SparklesIcon className="h-4 text-white" />
        </div>
      </div>
      <Input />
    </div>
  )
}

export default Feed
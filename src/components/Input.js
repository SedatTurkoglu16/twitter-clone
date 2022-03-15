import React from 'react'
import { EmojiIcon, GifIcon, ImageIcon, LocationIcon, PollIcon, ScheduleIcon } from './icons/Icon'

const Input = () => {
  return (
    <div
      className="border-b border-gray-700 p-3 flex space-x-3 overflow-y-scroll scrollbar-hide" 
    >
      <img
        src="https://pbs.twimg.com/profile_images/1487136184337842178/vknMZ6Zx_400x400.jpg"
        alt=""
        className="h-11 w-11 rounded-full cursor-pointer"
      />
      <div className="divide-y divide-gray-700 w-full">
        <div className="pb-7 space-y-2.5" >
          <textarea
            //value={input}
            //onChange={(e) => setInput(e.target.value)}
            placeholder="What's happening?"
            rows="2"
            className="bg-transparent outline-none text-[#d9d9d9] text-lg placeholder-gray-500 tracking-wide w-full min-h-[50px]"
          />

          {/* {selectedFile && ( */}
            <div className="relative">
              <img
                //src={selectedFile}
                alt=""
                className="rounded-2xl max-h-80 object-contain"
              />
            </div>
          {/* )} */}
        </div>
        {/* {!loading && ( */}
          <div className="flex items-center justify-between pt-2.5">
            <div className="flex items-center">
              <div
                className="icon"
                //onClick={() => filePickerRef.current.click()}
              >
                <ImageIcon className="text-[#1d9bf0] h-[22px]" />
                <input
                  type="file"
                  //ref={filePickerRef}
                  hidden
                  //onChange={addImageToPost}
                />
              </div>

              <div className="flex flex-grow">
                <GifIcon className="text-[#1d9bf0] mx-3 h-[22px]" />
              
                <PollIcon className="text-[#1d9bf0] h-[22px]" />
              
                <EmojiIcon className="text-[#1d9bf0] mx-3 h-[22px]" />
              
                <ScheduleIcon className="text-[#1d9bf0] h-[22px]" />
              
                <LocationIcon className="text-[#1d9bf0] ml-3 h-[22px] opacity-60"/>
              </div>
    
            </div>
            <button
              className="bg-[#1d9bf0] text-white rounded-full px-4 py-1.5 font-bold shadow-md hover:bg-[#1a8cd8] disabled:hover:bg-[#1d9bf0] disabled:opacity-50 disabled:cursor-default"
              //disabled={!input && !selectedFile}
              //onClick={sendPost}
            >
              Tweet
            </button>
          </div>
        {/* )} */}
      </div>
    </div>
  )
}

export default Input
import React, { useState } from 'react'
import { BookmarksIcon, ExploreIcon, HomeIcon, ListsIcon, MessagesIcon, MoreIcon, NotificationsIcon, ProfileIcon } from '../icons/Icon'
import logo from '../images/logo.svg'
import UserBox from '../UserBox'
import SideLinks from './SideLinks'

const sideLinks = [
  {
    name: 'Home',
    icon: HomeIcon,
  },
  {
    name: 'Explore',
    icon: ExploreIcon,
  },
  {
    name: 'Notifications',
    icon: NotificationsIcon,
  },
  {
    name: 'Messages',
    icon: MessagesIcon,
  },
  {
    name: 'Bookmarks',
    icon: BookmarksIcon,
  },
  {
    name: 'Lists',
    icon: ListsIcon,
  },
  {
    name: 'Profile',
    icon: ProfileIcon,
  },
  {
    name: 'More',
    icon: MoreIcon,
  },
]

const Sidebar = () => {

  const [active, setActive] = useState('Home');

  return (
    <div className="flex flex-col justify-between w-72 bg-white px-2">
      <div>
        <img src={logo} alt='logo' className='m-4 h-6'/>
        <nav className='mb-3 ml-[-13px] pt-1'> 
          <ul>
            {sideLinks.map(({ name, icon }) => {
              return(
                <SideLinks key={name} name={name} Icon={icon} active={active} setActive={setActive} />
              )
            })}
          </ul>
        </nav>
        <button className='bg-primary-base hover:bg-primary-dark font-bold text-white shadow-lg rounded-full py-3 px-8 w-10/12 transform transition-colors duration-200'>
          Tweet
        </button>
      </div>
      <UserBox />
    </div>
  )
}

export default Sidebar
import React from 'react'

const SideLinks = ({ name, Icon, setActive, active }) => {

  const isActive = (active === name);
  console.log(isActive);
  return (
    <li onClick={() => {setActive(name)}} className='group'>
      <a href="#">
        <div className='inline-block'>
            <div className={`flex pointer-events-none items-center group-hover:bg-primary-light h-[50px] hover:text-primary-base rounded-full pr-8 ${isActive ? "text-primary-base" : ""} `}>
                <Icon />
                <span className='text-xl ml-[-10px]'>{name}</span>        
            </div>   
        </div>   
      </a>
    </li>
  )
}

export default SideLinks
import Link from 'next/link'
import Image from 'next/image'

import ThemeSwitch from '../utils/ThemeSwitch'


import Logo from "/public/assets/company/Logomark.svg"

const Header = () => {
  return (
    <header className="flex fixed lg:static top-0 left-0 right-0 z-50 bg-header-background h-24 shadow-md">
                                               {/* MOBILE VIEW */}
      <div className="lg:hidden container mx-auto grid grid-cols-[auto_1fr] gap-x-2 items-center px-2 py-3">  
        {/* Logo Section */}
        <div className="pl-2">
          <Link href="/" className="flex items-center">
            <div className="w-10 h-10">
              <Image
                src={Logo.src}
                alt="Logo"
                width={40}
                height={40}
              />
            </div>
          </Link>
        </div>
        <div className="justify-self-end">
          <div className='flex gap-4'>
          <ThemeSwitch />
          <div>test</div>
          </div>
        </div>
      </div>
                                                     {/* DESKTOP VIEW */}
      <div className="px-16 py-8 hidden lg:flex justify-between absolute items-center w-full z-50 top-0">
        {/* Logo Section */}
        <div className="pl-2">
          <Link href="/" className="flex items-center">
            <div className="w-10 h-10">
              <Image
                src={Logo.src}
                alt="Logo"
                width={40}
                height={40}
              />
            </div>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="justify-self-center">
          {/* Add your navigation links here */}
          <Link href="/link1" className="w-fit hover:text-neutral-600 px-2 ease-in-out duration-300 cursor-pointer">Link 1</Link>
          <Link href="/link2" className="px-3 py-2">Link 2</Link>
          <Link href="/link3" className="px-3 py-2">Link 3</Link>
        </nav>

        {/* Special Buttons */}
        <div className="flex gap-4 pr-2">
          {/* Add your special buttons here */}
          <ThemeSwitch />
          <button className="px-4 py-2 hover">Button 1</button>
          <button className="px-4 py-2 bg-green-500 text-white rounded">Button 2</button>
        </div>
      </div>
    </header>
  )
}

export default Header
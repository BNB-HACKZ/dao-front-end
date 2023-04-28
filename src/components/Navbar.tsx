import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image';
import Link from 'next/link';


// import { TWLogoBlack } from '../assets'
const TWLogoBlack = 'https://www.rainbowkit.com/rainbow.svg'




export const Navbar = () => {
    return (
        
        <Popover className="relative bg-white">
        <div className="mx-auto box-border w-1728px h-105px backdrop-blur-[32px]  border-b-[9px] border-solid border-[#181D33] px-4 bg-[#0C0F1A] sm:px-6">
            <div className="flex items-center justify-between py-6  md:space-x-10">
                <div className="flex ">
                <Link href="/" className='w-157px h-41px font-[Space_Grotesk] text-[29px] opacity-0.72 flex-none order-1 leading-[2.3rem] text-white absolute inset-x-16 ml-28 inset-y-5 '>
                                    DAOVATION
                </Link>
                </div>
               
                <div className='flex  gap-x-4 items-center'>
                <Popover.Group as="nav" className="hidden mx-20 space-x-10 md:flex">
                    <Link href="/" className="w-57 h-18 inset-x-16 inset-y-5 leading-[115%] flex  item-center tracking-[.08em] mx-16 text-[#8E8F94]">
                        ABOUT
                    </Link>
                    <Link href="/" className="w-57 h-18 inset-x-16 inset-y-5 leading-[115%] flex  item-center tracking-[.08em] mx-16 text-[#8E8F94]">
                        LOGIN
                    </Link>
                  
                </Popover.Group>
               <button className='flex flex-row justify-center item-center w-170px h-38px bg-[#89D472] gap-[10] p-[5px] px-5 mx-9 rounded-md order-1'>LAUNCH APP</button>
                <div className="-my-2 -mr-2 md:hidden">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black">
                        <span className="sr-only">Open menu</span>
                        <Bars3Icon className="h-8 w-8 text-black" aria-hidden="true" />
                    </Popover.Button>
                </div>
                </div>
            </div>
        </div>

        <Transition
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
        >
            <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
                <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="px-5 pt-5 pb-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <Link href="/">
                                    DAOVATION
                                </Link>
                            </div>
                            <div className="-mr-2">
                                <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black">
                                    <span className="sr-only">Close menu</span>
                                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                </Popover.Button>
                            </div>
                        </div>
                        <div className="mt-6">
                        </div>
                    </div>
                    <div className="space-y-6 py-6 px-5">
                        <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                            <Link href="/" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                Pricing
                            </Link>

                            <Link href="/" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                Docs
                            </Link>
                            <Link href="/" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                Company
                            </Link>
                            <Link href="/" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                Blog
                            </Link>
                            <Link href="/" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                Profile
                            </Link>
                        </div>
                        <div>
                            <Link
                                href="/"
                                className="flex w-full items-center justify-center rounded-md border border-transparent bg-gray-800 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-gray-900"
                            >
                                Sign up
                            </Link>
                            <p className="mt-6 text-center text-base font-medium text-gray-500">
                                Existing customer?{' '}
                                <Link href="/" className="text-gray-700 hover:text-gray-800">
                                    Sign in
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </Popover.Panel>
        </Transition>
    </Popover>
    )
    
}
export default Navbar;
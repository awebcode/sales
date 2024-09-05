'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import { Button, Img } from "..";

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Case Studies', href: '#case-studies' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Reviews', href: '#reviews' }
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const handleScroll = (id: string) => {
    const section = document.getElementById(id.replace('#', ''));
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };


  return (
    <div className="">
      <div className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <Link href="#" className="-m-1.5 p-1.5">
              <Image
                height={100}
                width={100}

                alt=""
                src="/images/img_header_logo.png"
                className="h-8 w-auto"
              />
            </Link>
          </div>
          <div className="hidden sm:flex">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="flex gap-x-12 sm:hidden">
            {navigation.map((item) => (
              <span onClick={() => handleScroll(item.href)} key={item.name}  className="text-md font-semibold leading-6  text-gray-200 hover:text-primary cool-anim">
                {item.name}
              </span>
            ))}
          </div>
          <div className="flex  justify-end sm:hidden">
            <Button
              shape="round"
              rightIcon={
                <Img
                  src="img_cilarrowright.svg"
                  width={24}
                  height={24}
                  alt="Cil:arrow-right"
                  className="h-[1.50rem] w-[1.50rem]"
                />
              }
              className="min-w-[11.75rem]  gap-[0.63rem] font-semibold mt-4 md:mt-0"
            >
              Contact us
            </Button>

          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="bg-gray-900/90 fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black px-6 py-6 md:max-w-md md:ring-1 md:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="#" className="-m-1.5 p-1.5">
                <Image
                  height={100}
                  width={100}

                  alt=""
                  src="/images/img_header_logo.png"
                  className="h-8 w-auto"
                />
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-200"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root ">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <span
                      key={item.name}
                      onClick={() =>{ setMobileMenuOpen(false); handleScroll(item.href)} }
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-200 hover:text-primary"
                    >
                      {item.name}
                    </span>
                  ))}
                </div>
                <div className="py-6">
                  <Button
                    shape="round"
                    rightIcon={
                      <Img
                        src="img_cilarrowright.svg"
                        width={24}
                        height={24}
                        alt="Cil:arrow-right"
                        className="h-[1.50rem] w-[1.50rem]"
                      />
                    }
                    className="min-w-[11.75rem] gap-[0.63rem] font-semibold mt-4 md:mt-0"
                  >
                    Contact us
                  </Button>

                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </div>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl md:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 md:left-[calc(50%-30rem)] md:w-[72.1875rem]"
          />
        </div>
      </div>
    </div>
  )
}

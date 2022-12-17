import { useState, useEffect } from 'react';
import Link from 'next/link';

import { logo, menu, close } from '../public/assets';
import { navLinks } from '../helper';
import Image from 'next/image';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const Navbar = () => {
  const [active, setActive] = useState('Home');
  const [toggle, setToggle] = useState(false);

  const [mounted, setMounted] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    // setMounted(true);
  });

  return (
    <nav className="w-full flex py-6 justify-between px-4 sm:px-10 items-center ">
      <Link href="/" className="ml-5" passHref>
        <a>
          <Image
            src={logo}
            alt="picardy"
            className=" h-[32px] cursor-pointer"
          />
        </a>
      </Link>

      <ul className="list-none ml-12 gap-14 text-white cursor-pointer sm:flex hidden justify-center items-center flex-1 ">
        {navLinks.map((nav) => (
          <Link
            key={nav.name}
            href={nav.href}
            className={`font-poppins font-normal cursor-pointer text-[16px] mr-10 hover:opacity-80 ${
              active === nav.name ? 'text-white' : 'text-dimWhite'
            } `}
          >
            <span className="truncate">{nav.name}</span>
          </Link>
        ))}
      </ul>

      <div className="hidden sm:block">
        <ConnectButton
          showBalance={false}
          chainStatus="name"
          accountStatus="address"
        />
      </div>

      {/* mobile menu */}
      <div className="flex sm:hidden text-end justify-end  w-[80%]">
        <ConnectButton />
      </div>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <Image
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? 'hidden' : 'flex'
          } p-6 feature-bal absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 text-gray-300 flex-col">
            {navLinks.map((nav) => (
              <Link
                key={nav.name}
                href={nav.href}
                className={`font-poppins font-normal cursor-pointer text-[16px]  hover:opacity-80 ${
                  active === nav.name ? 'text-white' : 'text-gray-300'
                } `}
              >
                <span className="truncate mt-4">{nav.name}</span>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

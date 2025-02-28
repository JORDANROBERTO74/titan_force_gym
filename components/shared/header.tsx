"use client";

import { useState } from "react";
import Container from "./container";
import MainMenu from "./main-menu";

import { RiMenu3Line } from "react-icons/ri";
import MenuMobile from "./menu-mobile";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <header className="fixed left-0 top-0 w-full p-5 z-40 bg-black">
        <Container className="flex items-center justify-between">
          <section>
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="logo"
                width={120}
                height={100}
              />
            </Link>
          </section>
          <section className="hidden lg:block">
            <MainMenu />
          </section>
          <section className="lg:hidden">
            <button
              type="button"
              onClick={() => setShowMenu(true)}
              className="text-white"
            >
              <RiMenu3Line size={24} />
            </button>
          </section>
        </Container>
      </header>
      <MenuMobile isOpen={showMenu} onClose={() => setShowMenu(false)} />
    </>
  );
};

export default Header;

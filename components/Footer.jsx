import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/", name: "Home" },
  { href: "#explore", name: "Explore" },
  { href: "#about", name: "About" },
  { href: "#menu", name: "Menu" },
];

import { FaYoutube, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-footer bg-cover bg-no-repeat relative">
      <div className="w-full h-full absolute top-0 bg-black/[0.90] z-10"></div>
      <div className="containers mx-auto z-20 relative">
        <div className="flex flex-col items-center justify-center gap-14">
          <Link href="/" className="relative w-[150px] h-[100px] mx-auto">
            <Image
              src="/assets/logo.png"
              fill
              alt=""
              className="object-contain"
            />
          </Link>
          {/* nav */}
          <nav className="flex flex-col xl:flex-row gap-8 xl:gap-12 justify-center items-center">
            {links.map((link, index) => {
              return (
                <Link
                  className="uppercase text-white tracking-widest hover:text-accent transition-all"
                  href={link.href}
                  key={index}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
          {/* social */}
          <ul className="flex  text-white text-xl gap-4">
            <Link
              href="/"
              className="w-[54px] h-[54px] border border-white/[0.15] rounded-full flex items-center justify-center hover:text-accent transition-all"
            >
              <FaYoutube />
            </Link>
            <Link
              href="/"
              className="w-[54px] h-[54px] border border-white/[0.15] rounded-full flex items-center justify-center hover:text-accent transition-all"
            >
              <FaFacebookF />
            </Link>
            <Link
              href="/"
              className="w-[54px] h-[54px] border border-white/[0.15] rounded-full flex items-center justify-center hover:text-accent transition-all"
            >
              <FaTwitter />
            </Link>
            <Link
              href="/"
              className="w-[54px] h-[54px] border border-white/[0.15] rounded-full flex items-center justify-center hover:text-accent transition-all"
            >
              <FaInstagram />
            </Link>
          </ul>
          {/* copyright */}
          <div
            className="border-t border-white/10 text-[15px] text-white/70 font-light w-full flex items-center
                         justify-center py-6"
          >
            <p>&copy; 2024 Deebrew. All rights reserved..</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import Link from "next/link";
import { motion } from "framer-motion";

const links = [
  { href: "/", name: "Home" },
  { href: "#explore", name: "Explore" },
  { href: "#about", name: "About" },
  { href: "#menu", name: "Menu" },
];

const letterAnim = {
  initial: {
    y: "100%",
    opacity:0
  },
  enter: (i)=> ({
    y: 0,
    opacity: 1,
    transition: {duartion: 1, ease: [0.6, 0, 0.2, 1], delay: i[0] },
}),
  exit: (i)=> ({
    y: "100%",
    opacity: 0,
    transition: {duartion: 0.8, ease: [0.6, 0, 0.2, 1], delay: i[1] },
}),
}

const getLetter = (name) => {
  let letters = [];
  name.split("").forEach((letter, index)=> {
    letters.push(
      <motion.span variants={letterAnim} initial="initial" animate="enter" exit="exit" custom={[index * 0.04, (name.length - index) * 0.01]} key={index}>{letter}</motion.span>
    )
  })
  return letters
}

const NavList = () => {
  return (
    <ul className="flex flex-col gap-8 font-primary text-2xl xl:text-4xl font-semibold text-accent items-center uppercase">
      {links.map((link, index) => {
        return (
          <Link href={link.href} key={index} className="flex overflow-hidden hover:text-white transition-all">
            {getLetter(link.name)}
          </Link>
        );
      })}
    </ul>
  );
};

export default NavList;

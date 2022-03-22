import cx from "classnames";
import { useState } from "react";
import css from "./index.module.css";
type LinksList = Array<{ href: string; name: string }>;

const links: LinksList = [
  {
    href: "#welcome",
    name: "Welcome",
  },
  {
    href: "#aboutMe",
    name: "About Me",
  },
  {
    href: "#projects",
    name: "Projects",
  },
  {
    href: "#contactMe",
    name: "Contact Me",
  },
];
export default function Navbar() {
  const [hash, setHash] = useState("");
  window.onhashchange = () => {
    setHash(window.location.hash);
  };

  return (
    <header className={css.header}>
      <div className={css.nav}>
        {links.map((link) => (
          <a
            href={link.href}
            className={cx(css.link, {
              [css.activeLink]: hash === link.href,
            })}
            key={link.name}
          >
            {link.name}
          </a>
        ))}
      </div>
    </header>
  );
}

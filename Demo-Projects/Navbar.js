import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import { FaBehance, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
export const links = [
  {
    id: 1,
    url: "/",
    text: "random"
  },
  {
    id: 2,
    url: "/about",
    text: "about"
  },
  {
    id: 3,
    url: "/projects",
    text: "projects"
  },
  {
    id: 4,
    url: "/contact",
    text: "contact"
  },
  {
    id: 5,
    url: "/profile",
    text: "profile"
  }
];

export const social = [
  {
    id: 1,
    url: "https://www.twitter.com",
    icon: <FaFacebook />
  },
  {
    id: 2,
    url: "https://www.twitter.com",
    icon: <FaTwitter />
  },
  {
    id: 3,
    url: "https://www.twitter.com",
    icon: <FaLinkedin />
  },
  {
    id: 4,
    url: "https://www.twitter.com",
    icon: <FaBehance />
  }
];

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect();
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);

  return (
    <div className="nav-center">
      <div className="nav-header">
        <img src="logo" alt="logo" />
        <button className="nav-toggle" onClick={() => setShowLinks(!showLinks)}>
          <FaBars />
        </button>
      </div>
      {showLinks && (
        <div className="links-container" ref={linksContainerRef}>
          <ul ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
      <ul className="social-icons">
        {social.map((socialIcon) => {
          const { id, url, icon } = socialIcon;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;

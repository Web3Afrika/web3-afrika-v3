import React, { useState } from "react";
import { useTheme } from "./ThemeToggle";
import Logo from "../assets/Web3-Africa-Logo.png";
import LogoDark from "../assets/Web3-Africa-Logo-Dark.png";

const Footer = () => {
  const [email, setEmail] = useState("");
  const { darkMode } = useTheme();

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log("Subscribed with email:", email);
    setEmail("");
  };

  return (
    <div className="bg-[#FAFAFA] dark:bg-black">
      <footer className="container mx-auto px-6 py-16 font-archivo">
        <div className="grid grid-cols-2 gap-12">
          <div className="space-y-6">
            <img
              src={darkMode ? LogoDark : Logo}
              alt="Web3 Africa Logo"
              className="transition-opacity duration-200"
            />
            <p className="text-[#666666] max-w-md">
              Empowering mobility entrepreneurs worldwide with accessible,
              flexible financing to unlock vehicle ownership and accelerate
              growth.
            </p>

            <form
              onSubmit={handleSubscribe}
              className="relative w-full max-w-md"
            >
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="px-4 py-4 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-[#EE3C22] pr-[100px] dark:bg-[#0A0A0A]"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-[#0C6E5F] border border-[#0C6E5F] rounded-3xl px-4 py-2 hover:bg-[#D03321] transition duration-300"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>

          <div className="grid grid-cols-3 gap-8 mt-14">
            <div>
              <h4 className="font-bold text-[#333333] dark:text-[#5D5D5D] mb-4">
                Quick Links{" "}
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/about"
                    className="text-[#666666] hover:text-[#EE3C22]"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/blog"
                    className="text-[#666666] hover:text-[#EE3C22]"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="/event"
                    className="text-[#666666] hover:text-[#EE3C22]"
                  >
                    Event
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-[#666666] hover:text-[#EE3C22]"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-[#333333] dark:text-[#5D5D5D] mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2">
                <li>
                  <a href="/#" className="text-[#666666] hover:text-[#EE3C22]">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="/#" className="text-[#666666] hover:text-[#EE3C22]">
                    Cookies Settings
                  </a>
                </li>
                <li>
                  <a href="/#" className="text-[#666666] hover:text-[#EE3C22]">
                    Affilate Policy
                  </a>
                </li>
                <li>
                  <a href="/#" className="text-[#666666] hover:text-[#EE3C22]">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-[#333333] dark:text-[#5D5D5D] mb-4">
                Social Media
              </h4>
              <ul className="space-y-2">
                <li>
                  <a href="/#" className="text-[#666666] hover:text-[#EE3C22]">
                    Linkedin
                  </a>
                </li>
                <li>
                  <a href="/#" className="text-[#666666] hover:text-[#EE3C22]">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="/#" className="text-[#666666] hover:text-[#EE3C22]">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="/#" className="text-[#666666] hover:text-[#EE3C22]">
                    X (formerly twitter)
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 text-left text-[#9E9E9E] font-archivo">
          Copyright @2024 Web3 Afrika. All right reserved
        </div>
      </footer>
    </div>
  );
};

export default Footer;

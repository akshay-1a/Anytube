"use client";

import React from "react";
import {
  FaQuoteLeft,
  FaQuoteRight,
  FaInstagram,
  FaFacebookSquare,
  FaLinkedin,
  FaTelegram,
  FaPhoneSquareAlt,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdMail } from "react-icons/md";
import { motion } from 'framer-motion';




const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.2, delay: 1, ease: "linear" }}
      className="relative bg-white/20 overflow-hidden"
    >
      <div className="md:flex md:gap-20 bg-black/50 text-gray-400 text-lg md:px-20 p-10 space-y-5">
        {/* for paragraph content */}
        <div className="flex-col flex-1 mx-auto mb-8 md:mb-0 space-y-4">
          <h2 className="font-bold text-2xl text-white">
            <FaQuoteLeft />
          </h2>
          <p className="flex  text-white justify-center md:text-xl font-semibold text-justify">
            Dive into a world of endless entertainment with us, where every
            series is a saga and each movie is a journey to a new universe.
          </p>
          <h2 className="font-bold text-2xl text-white flex justify-end">
            <FaQuoteRight />
          </h2>
        </div>

        {/* for links */}
        <div className="flex-1 flex items-top justify-between ">
          {/* Quick links */}
          <div className="text-left text-sm md:text-lg space-y-2">
            <h2 className="font-bold md:text-xl text-white ">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <a href="imperfectors.com">Imperfectors.com</a>
              </li>
              <li>
                <a href="/movies">Movies</a>
              </li>
              <li>
                <a href="/tv-shows">Tv Shows</a>
              </li>
            </ul>
          </div>
          {/* Social links */}
          <div className="text-center text-sm md:text-lg space-y-2">
            <h2 className="font-bold md:text-xl text-white">Follow Us</h2>
            <ul className="grid grid-cols-2 gap-4 text-[42px] ">
              <li>
                <a href="/">
                  <FaInstagram className="" />
                </a>
              </li>
              <li>
                <a href="/">
                  <FaFacebookSquare />
                </a>
              </li>
              <li>
                <a href="/">
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a href="/">
                  <FaTelegram />
                </a>
              </li>
            </ul>
          </div>
          {/* Contact */}
          <div className="text-right text-sm md:text-lg space-y-2">
            <h2 className="font-bold md:text-xl text-white">Contact</h2>
            <ul className="space-y-2">
              <li className="flex gap-2 justify-end items-center">
                <FaPhoneSquareAlt />: <a href="/">+91 981 063 8359</a>
              </li>
              <li className="flex gap-2 justify-end items-center">
                <MdMail />:{" "}
                <a href="mailto:anytube@imperfectors.com">
                  anytube@imperfectors.com
                </a>
              </li>
              <li className="flex gap-2 justify-end items-center">
                <FaLocationDot />: <a href="/">New Delhi, INDIA</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-black/50 text-white">
        <div className="p-2 text-xs md:text-base font-semibold border-t-2 text-center md:flex md:justify-between mx-6 md:mx-20">
          <p>
            Website Developed by
            <span className="hover:text-orange-500 text-purple-400 ">
              &nbsp;Akshay Arora [
              <a href="https://akshay.imperfectors.com">Imperfectors.com</a>]
            </span>
          </p>
          <p>&copy; 2023 AnyTube. All Rights Reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;

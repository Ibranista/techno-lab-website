"use client";

import { nav_content } from "@/content/nav.content";
import Image from "next/image";
import { useState } from "react";
import logo from "@/assets/Technolab-Logo.svg";
import { Container } from "@/components/container";
import { font_accent } from "@/fonts/fonts";
import { CloseIcon, HumIcon } from "@/assets/icons";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 2 }}
      className={`${font_accent.className} flex items-center justify-between py-7 px-0 lg:px-0`}
    >
      {/* Logo */}
      <section className="flex items-center">
        <Image
          src={logo.src}
          alt="TECHNOLAB"
          width={157}
          height={33}
          className="h-[33px] max-w-[172.5px] w-full"
        />
      </section>

      {/* Desktop Navigation */}
      <article className="hidden md:flex space-x-[30px]">
        {nav_content.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className="hover:text-gray-300  text-white font-medium text-[14px]"
          >
            {item.label}
          </Link>
        ))}
      </article>

      {/* Mobile Hamburger Button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-500 focus:outline-none cursor-pointer"
        >
          <HumIcon />
        </button>
      </div>

      {/* Mobile Sidebar */}
      <section
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-xl transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50 md:hidden`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <CloseIcon />
          </button>
        </div>
        <article className="flex flex-col p-6 space-y-6">
          {nav_content.map((item, index) => (
            <a
              key={index}
              href={item.link}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-gray-800 hover:text-gray-500 transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </article>
      </section>

      {/* Overlay when sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-900 opacity-30 bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </Container>
  );
}

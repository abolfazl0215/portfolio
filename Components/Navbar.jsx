"use client";

import React, {
  useEffect,
  useState,
  useCallback,
  useMemo,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Briefcase,
  FolderGit2,
  User,
  Mail,
  X,
  Menu,
  Sparkles,
  Code2,
} from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = useMemo(
    () => [
      { id: "home", label: "Home", icon: Home, href: "/" },
      {
        id: "services",
        label: "Services",
        icon: Briefcase,
        href: "/services",
      },
      {
        id: "projects",
        label: "Projects",
        icon: FolderGit2,
        href: "/projects",
      },
      { id: "about", label: "About", icon: User, href: "/about" },
    ],
    [],
  );

  const activeSection = useMemo(() => {
    const currentItem = navItems.find(
      (item) => item.href === pathname,
    );
    return currentItem ? currentItem.id : "home";
  }, [pathname, navItems]);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "unset";
  }, [menuOpen]);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  const menuVariants = useMemo(
    () => ({
      closed: {
        x: "-100%",
        transition: {
          type: "tween",
          duration: 0.2,
          ease: "easeInOut",
        },
      },
      open: {
        x: 0,
        transition: {
          type: "tween",
          duration: 0.2,
          ease: "easeInOut",
        },
      },
    }),
    [],
  );

  const menuItemVariants = useMemo(
    () => ({
      closed: { opacity: 0 },
      open: (i) => ({
        opacity: 1,
        transition: {
          delay: i * 0.03,
          duration: 0.15,
        },
      }),
    }),
    [],
  );

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={`
          fixed top-0 left-0 w-full z-50
          flex justify-between items-center
          px-6 md:px-[10vw]
          transition-all duration-200 ease-in-out
          ${
            scrolled
              ? "py-4 bg-[#0A0F1C]/95 border-b border-blue-500/20 shadow-lg shadow-blue-500/5"
              : "py-6 bg-transparent border-b border-transparent"
          }
        `}
        style={scrolled ? { backdropFilter: "blur(12px)" } : {}}>
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-3 cursor-pointer group hover:scale-105 active:scale-95 transition-transform will-change-transform">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-2 rounded-lg">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <div className="hidden md:block">
              <span className="text-xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                Abi
              </span>
              <span className="text-xl font-bold text-blue-400">
                Dev
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <li
                  key={item.id}
                  className="hover:-translate-y-0.5 transition-transform will-change-transform">
                  <Link href={item.href}>
                    <div
                      className={`
                        group flex items-center gap-2 cursor-pointer relative
                        transition-colors duration-150
                        ${
                          isActive
                            ? "text-blue-400"
                            : "text-gray-300 hover:text-white"
                        }
                      `}>
                      <Icon className="w-4 h-4" />
                      <span className="font-medium">
                        {item.label}
                      </span>
                      {isActive && (
                        <motion.div
                          layoutId="activeIndicator"
                          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                          transition={{
                            duration: 0.25,
                            ease: "easeInOut",
                          }}
                        />
                      )}
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Contact Button */}
          <Link href="/contact">
            <button className="group relative flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold overflow-hidden cursor-pointer hover:shadow-lg hover:shadow-blue-500/20 transition-shadow active:scale-95 will-change-transform">
              <Mail className="w-4 h-4 relative z-10" />
              <span className="relative z-10">Contact Me</span>
              <Sparkles className="w-4 h-4 relative z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-150" />
            </button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center rounded-lg bg-gray-800/50 border border-gray-700 hover:border-blue-500/50 transition-colors active:scale-90 will-change-transform"
          aria-label="Toggle menu">
          <AnimatePresence mode="wait" initial={false}>
            {menuOpen ? (
              <motion.div
                key="close"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.15 }}>
                <X className="w-6 h-6 text-blue-400" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.15 }}>
                <Menu className="w-6 h-6 text-blue-400" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </motion.header>

      {/* Mobile Menu Overlay - کاهش blur */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={closeMenu}
            className="fixed inset-0 z-40 md:hidden bg-black/60"
            style={{ backdropFilter: "blur(4px)" }}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu Sidebar - کاهش blur */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed top-0 left-0 h-full w-[85vw] max-w-sm z-50 md:hidden bg-[#0D1B2A]/98 border-r border-blue-500/20 shadow-2xl"
            style={{ backdropFilter: "blur(16px)" }}>
            <nav className="relative flex flex-col h-full pt-24 px-6">
              {/* Logo in Sidebar */}
              <div className="flex items-center gap-3 mb-12 pb-6 border-b border-gray-800">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-2.5 rounded-lg">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                    Abi
                  </span>
                  <span className="text-xl font-bold text-blue-400">
                    Dev
                  </span>
                </div>
              </div>

              {/* Menu Items */}
              <ul className="flex flex-col gap-2 flex-1">
                {navItems.map((item, i) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.id;
                  return (
                    <motion.li
                      key={item.id}
                      custom={i}
                      variants={menuItemVariants}
                      initial="closed"
                      animate="open">
                      <Link href={item.href}>
                        <div
                          onClick={closeMenu}
                          className={`
                            flex items-center gap-4 px-4 py-3.5 rounded-xl
                            cursor-pointer transition-all active:scale-95 will-change-transform
                            ${
                              isActive
                                ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30"
                                : "hover:bg-gray-800/50 border border-transparent hover:border-gray-700"
                            }
                          `}>
                          <div
                            className={`
                            w-10 h-10 rounded-lg flex items-center justify-center
                            ${
                              isActive
                                ? "bg-gradient-to-br from-blue-500 to-purple-600"
                                : "bg-gray-800"
                            }
                          `}>
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <span className="font-medium text-white text-lg">
                            {item.label}
                          </span>
                        </div>
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>

              {/* Contact Button in Sidebar */}
              <div className="mt-auto mb-8">
                <Link href="/contact">
                  <button
                    onClick={closeMenu}
                    className="w-full flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl font-semibold shadow-lg shadow-blue-500/30 cursor-pointer active:scale-98 transition-transform will-change-transform">
                    <Mail className="w-5 h-5" />
                    Contact Me
                    <Sparkles className="w-5 h-5" />
                  </button>
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

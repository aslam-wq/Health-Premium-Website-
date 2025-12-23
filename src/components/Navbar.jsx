import React, { useState, useEffect } from 'react';
import { Button } from './ui/Button';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { scrollY } = useScroll();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-6'
                    }`}
            >
                <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <a href="#" className="text-2xl font-bold tracking-tighter text-white relative z-50">
                            health
                        </a>
                        <div className="h-2 w-2 bg-primary rounded-full relative z-50"></div>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {['Optimize', 'Testing', 'Training', 'Memberships'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-sm font-medium text-gray-300 hover:text-white transition-colors uppercase tracking-wide"
                            >
                                {item}
                            </a>
                        ))}
                    </div>

                    <div className="hidden md:block">
                        <Button variant="secondary">
                            Get Started
                        </Button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-white relative z-50 p-2"
                        onClick={toggleMenu}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: '-100%' }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: '-100%' }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center pt-20"
                    >
                        <div className="flex flex-col items-center space-y-8">
                            {['Optimize', 'Testing', 'Training', 'Memberships'].map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    onClick={toggleMenu}
                                    className="text-3xl font-bold text-white uppercase tracking-wider hover:text-primary transition-colors"
                                >
                                    {item}
                                </a>
                            ))}
                            <div className="pt-8">
                                <Button variant="primary" className="w-64" onClick={toggleMenu}>
                                    Get Started
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;

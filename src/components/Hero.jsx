import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { ArrowRight, X as CloseIcon, ArrowDown } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen w-full overflow-hidden flex flex-col justify-center">
            {/* Background Layer */}
            <div className="absolute inset-0 z-0">
                {/* Mobile Image (Hidden to favour Spline on all devices for consistent look) */}
                <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6LjN_04Q9pD9BK28-vfDc8LmhvIqK-Et3AdBgLJ_43AaYPZXuSyA86M8UKOdEKl4FOxL1urVdxRfcF6G52HT-4RPCctplw2x8T--beRXM-KfSnRON-QNg1VHgDMGQaV0M-pBhuRWcypDzbUDgzw-xiUVigwxzrc7UdwuEv7T74wM3i3rhNJ5TLuPEfCCluYmPX7S0D_NrIGYpv_jryz-OdE9mhfHLAUEE9faDbDhsf-IUyeXdf81B2l8BBSesQtSS7db8n2xFjLMP"
                    alt="Athlete running"
                    className="hidden w-full h-full object-cover opacity-90"
                />

                {/* Spline 3D Scene */}
                <iframe
                    src='https://my.spline.design/chips-BeHmYs34qpVlJsHKNgMHIf86/'
                    frameBorder='0'
                    width='100%'
                    height='100%'
                    className="block w-full lg:w-[130%] h-full"
                    title="Spline 3D Scene"
                    style={{ pointerEvents: 'auto' }}
                ></iframe>

                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-background dark:to-background pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Main Content */}
            <div className="relative z-10 container mx-auto px-6 md:px-12 flex flex-col justify-center h-full pt-20 pb-12 lg:pt-48">

                {/* Headline & Subtext */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-md mx-auto lg:mx-0 text-center lg:text-left space-y-4 mb-8"
                >
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[0.9] tracking-tighter uppercase">
                        Engineer <br />
                        Human <br />
                        Capacity
                    </h1>

                    <p className="text-gray-200 text-sm md:text-lg font-semibold leading-relaxed drop-shadow-md max-w-xs mx-auto lg:mx-0 lg:max-w-xl">
                        Where endurance physiology meets precision diagnostics and AI-guided training built uniquely for your biology.
                    </p>
                </motion.div>

                {/* Mobile CTA: Join Waitlist */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                    className="flex justify-center lg:justify-start mb-12"
                >
                    <button className="group bg-primary text-black px-8 py-3.5 rounded-full font-bold text-sm tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(234,245,134,0.4)] flex items-center space-x-2">
                        <span>JOIN WAITLIST</span>
                        <ArrowRight size={16} className="transform group-hover:translate-x-1 group-hover:-rotate-45 transition-transform duration-300" />
                    </button>
                </motion.div>

            </div>

            {/* Bounce Arrow */}
            <div className="relative z-10 w-full pb-6 flex justify-center items-center opacity-70 animate-bounce lg:hidden">
                <ArrowDown size={32} className="text-white" />
            </div>


        </section>
    );
};

export default Hero;

import React from 'react';
import { motion } from 'framer-motion';

const Journey = () => {
    const steps = [
        {
            title: "Comprehensive Testing",
            desc: "Baseline biomarkers.",
            img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800",
            accent: "text-primary"
        },
        {
            title: "Data Analysis",
            desc: "AI-powered reporting.",
            img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
            accent: "text-blue-400"
        },
        {
            title: "Performance Plan",
            desc: "Execution & results.",
            img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
            accent: "text-pink-400"
        }
    ];

    return (
        <section className="bg-background py-16 md:py-24 px-6 md:px-12 relative overflow-hidden">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold uppercase text-white max-w-xl">
                        Your Journey to <br />
                        <span className="text-primary">Peak Performance</span>
                    </h2>

                    <div className="flex gap-4 mt-6 md:mt-0 hidden md:flex">
                        <button className="px-6 py-2 rounded-full border border-white/20 text-white text-sm hover:bg-white/10 transition">
                            Private
                        </button>
                        <button className="px-6 py-2 rounded-full border border-white/20 text-white text-sm hover:bg-white/10 transition">
                            Teams
                        </button>
                    </div>
                </div>

                {/* Mobile: Horizontal Snap Scroll | Desktop: Grid */}
                <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-6 md:pb-0 scrollbar-hide">
                    {steps.map((step, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex-shrink-0 w-[85vw] md:w-auto snap-center rounded-3xl overflow-hidden h-96 md:h-80 relative group flex flex-col justify-end p-8 border border-white/10 hover:border-white/30 transition-all duration-500"
                        >
                            {/* Background Image */}
                            <img
                                src={step.img}
                                alt={step.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

                            <div className="relative z-10 transition-transform duration-500 group-hover:-translate-y-2">
                                <h3 className={`text-2xl font-bold uppercase mb-2 ${step.accent}`}>
                                    {step.title}
                                </h3>
                                <p className="text-gray-300 text-sm font-medium">
                                    {step.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Journey;

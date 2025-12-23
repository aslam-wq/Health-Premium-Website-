import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const steps = [
    {
        id: '01',
        title: 'PERFORMANCE',
        content: 'We analyze your current physiological baseline using state-of-the-art metrics to understand exactly where you stand today.'
    },
    {
        id: '02',
        title: 'TESTING',
        content: 'Comprehensive biomarker testing and metabolic analysis uncover the hidden variables affecting your energy and recovery.'
    },
    {
        id: '03',
        title: 'OPTIMIZATION',
        content: 'A personalized roadmap is created to systematically improve every aspect of your physical and mental output.'
    }
];

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipText = ({ children, className }) => {
    return (
        <motion.div
            initial="initial"
            whileHover="hovered"
            className={
                `relative block overflow-hidden whitespace-nowrap font-black uppercase ${className}`
            }
            style={{
                lineHeight: 0.85,
            }}
        >
            <div>
                {children.split("").map((l, i) => (
                    <motion.span
                        variants={{
                            initial: {
                                y: 0,
                            },
                            hovered: {
                                y: "-100%",
                            },
                        }}
                        transition={{
                            duration: DURATION,
                            ease: "easeInOut",
                            delay: STAGGER * i,
                        }}
                        className="inline-block"
                        key={i}
                    >
                        {l === " " ? "\u00A0" : l}
                    </motion.span>
                ))}
            </div>
            <div className="absolute inset-0">
                {children.split("").map((l, i) => (
                    <motion.span
                        variants={{
                            initial: {
                                y: "100%",
                            },
                            hovered: {
                                y: 0,
                            },
                        }}
                        transition={{
                            duration: DURATION,
                            ease: "easeInOut",
                            delay: STAGGER * i,
                        }}
                        className="inline-block"
                        key={i}
                    >
                        {l === " " ? "\u00A0" : l}
                    </motion.span>
                ))}
            </div>
        </motion.div>
    );
};

const Optimization = () => {
    const [activeStep, setActiveStep] = useState(0);

    return (
        <section className="bg-background text-white py-16 md:py-24 px-6 md:px-12" id="optimize">
            <div className="container mx-auto">

                {/* Header */}
                <div className="mb-16 md:mb-20 flex flex-col items-end text-right">
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        viewport={{ once: true }}
                        className="h-12 bg-primary w-full md:max-w-sm rounded-full mb-8 self-start flex items-center px-4 group cursor-pointer"
                    >
                        <div className="w-full flex items-center justify-between">
                            <span className="text-black font-bold text-sm uppercase">All Access</span>
                            <div className="bg-black/10 rounded-full p-1 group-hover:bg-black/20 transition-colors">
                                <ArrowDown size={16} className="text-black transition-transform duration-300 group-hover:-rotate-90" />
                            </div>
                        </div>
                    </motion.div>

                    <div className="flex flex-col items-end mb-6 md:mb-8 pointer-events-auto">
                        <FlipText className="text-3xl md:text-6xl text-white">
                            Beyond Generic
                        </FlipText>
                        <div className="flex items-center justify-end">
                            <FlipText className="text-3xl md:text-6xl text-primary">
                                Training
                            </FlipText>
                            <FlipText className="text-3xl md:text-6xl text-white">
                                – Your
                            </FlipText>
                        </div>
                        <FlipText className="text-3xl md:text-6xl text-white">
                            Personal Path to
                        </FlipText>
                        <FlipText className="text-3xl md:text-6xl text-white">
                            Peak Optimization
                        </FlipText>
                    </div>

                    <p className="text-gray-400 max-w-2xl text-lg text-right md:ml-auto">
                        We've reverse-engineered the elite completion mindset to create a system that elevates human performance beyond standard service limitations.
                    </p>
                </div>

                {/* Steps List */}
                <div className="border-t border-white/10">
                    {steps.map((step, index) => (
                        <div
                            key={step.id}
                            className="border-b border-white/10 group cursor-pointer"
                            onClick={() => setActiveStep(activeStep === index ? null : index)}
                        >
                            <div className="py-6 md:py-8 flex items-center justify-between">
                                <div className="flex flex-col md:flex-row md:items-baseline space-y-2 md:space-y-0 md:space-x-6">
                                    <span className="text-xs md:text-sm font-mono text-gray-500">ELITE.PHYSICAL.WORK. {step.id}</span>
                                    <h3 className={`text-3xl md:text-5xl font-bold uppercase transition-colors ${activeStep === index ? 'text-white' : 'text-gray-600 group-hover:text-gray-400'}`}>
                                        {step.title}
                                    </h3>
                                </div>
                                <motion.div
                                    animate={{ rotate: activeStep === index ? 180 : 0 }}
                                    className="text-white p-2"
                                >
                                    <ArrowDown size={24} className="md:w-8 md:h-8" />
                                </motion.div>
                            </div>

                            <AnimatePresence>
                                {activeStep === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="pb-8 pl-0 md:pl-[calc(4rem+20px)] max-w-2xl">
                                            <p className="text-base md:text-xl text-gray-300 leading-relaxed pl-4 md:pl-6 border-l-2 border-primary">
                                                {step.content}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Optimization;

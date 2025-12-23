import React from 'react';
import { Button } from './ui/Button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const FinalCTA = () => {
    return (
        <section className="relative h-[600px] w-full overflow-hidden flex items-center justify-center">
            {/* Background with overlay */}
            <div className="absolute inset-0">
                <img
                    src="/src/assets/hero-bg.png"
                    alt="Cyclist Background"
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-black/80 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
            </div>

            <div className="relative z-10 container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-7xl font-bold uppercase text-white mb-4 tracking-tighter leading-tight">
                        Interested? <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                            That's Just The Start.
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                        Join the elite community of performers redefining what's possible.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 w-full md:w-auto">
                        <Button variant="primary" className="h-14 px-8 text-base w-full md:w-auto">
                            Apply for Membership
                        </Button>
                        <div className="text-white flex items-center justify-center gap-2 cursor-pointer hover:underline underline-offset-4 w-full md:w-auto">
                            <span>View Full Program Details</span>
                            <ArrowRight size={16} />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default FinalCTA;

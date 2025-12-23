import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Activity, Zap, TrendingUp, Cpu } from 'lucide-react';
import proAthlete from '../assets/pro_athlete_portrait.png';
import { AnimatedFolder } from './ui/3d-folder';

const IntroCards = () => {
    const features = [
        { icon: <Activity size={20} />, text: 'Future proof your body' },
        { icon: <Cpu size={20} />, text: 'Train smarter' },
        { icon: <Zap size={20} />, text: 'Recover faster' },
        { icon: <TrendingUp size={20} />, text: 'Maintain peak performance' },
    ];

    return (
        <section className="bg-background py-16 md:py-20 px-6 md:px-12">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-auto md:h-[600px]">

                    {/* Left Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white text-black rounded-3xl p-8 md:p-12 flex flex-col justify-between relative overflow-hidden group min-h-[500px] md:min-h-0"
                    >
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-2">
                                Unlock Your <br /> Potential
                            </h2>
                            <p className="text-gray-500 font-medium text-sm mb-12">
                                Your path to supreme physiological fitness.
                            </p>

                            <div className="space-y-6">
                                {features.map((feature, idx) => (
                                    <div key={idx} className="flex items-center space-x-4 group/item cursor-default">
                                        <span className="p-2 bg-gray-100 rounded-full transition-colors group-hover/item:bg-black group-hover/item:text-primary">
                                            {feature.icon}
                                        </span>
                                        <span className="font-semibold text-lg">{feature.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-12">
                            <h3 className="text-3xl font-bold text-gray-200 group-hover:text-black transition-colors duration-500">
                                THAT'S WHY <br />
                                OPTIMIZATION <br />
                                MATTERS
                            </h3>
                        </div>
                    </motion.div>

                    {/* Right Card - Animated Folder */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative h-[400px] md:h-auto flex items-center justify-center p-6"
                    >
                        <div className="w-full h-full flex items-center justify-center">
                            <AnimatedFolder
                                title="Performance Data"
                                projects={[
                                    { id: "1", image: proAthlete, title: "Biometrics" },
                                    { id: "2", image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80", title: "Training Log" },
                                    { id: "3", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80", title: "Recovery" },
                                ]}
                            />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default IntroCards;

import React from 'react';
import { Button } from './ui/Button';
import { Check, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Memberships = () => {
    const tiers = [
        {
            price: '$299',
            period: 'mo',
            title: 'Virtual',
            desc: 'Remote coaching & programming.',
            features: ['Video Analysis', 'Custom Weekly Plan', 'Monthly Consultation', 'App Access'],
            highlight: false
        },
        {
            price: '$599',
            period: 'mo',
            title: 'Hybrid',
            desc: 'The perfect balance of guidance.',
            features: ['All Virtual Features', '2x In-Person Sessions', 'Bi-weekly Calls', 'Nutrition Guidance'],
            highlight: true
        },
        {
            price: '$999',
            period: 'mo',
            title: 'Exclusive',
            desc: 'Full elite athlete support system.',
            features: ['All Hybrid Features', 'Unlimited Access', '24/7 Coach Chat', 'Physician Network Access', 'Recovery Suite Access'],
            highlight: false
        }
    ];

    return (
        <section className="bg-background py-16 md:py-24 px-6 md:px-12 relative overflow-hidden" id="memberships">
            {/* Faded Background Title */}
            <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none opacity-5">
                <h2 className="text-[15vw] md:text-[14rem] font-bold uppercase leading-none tracking-tighter text-white">
                    Memberships
                </h2>
            </div>

            <div className="container mx-auto relative z-10">
                <div className="text-center mb-12 md:mb-20">
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold uppercase text-white mb-6"
                    >
                        Choose Your <span className="text-primary">tier</span>
                    </motion.h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {tiers.map((tier, idx) => (
                        <motion.div
                            key={tier.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className={`rounded-3xl p-8 relative overflow-hidden ${tier.highlight
                                    ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-primary/30 shadow-[0_0_40px_rgba(230,255,92,0.1)] order-first md:order-none'
                                    : 'bg-panel border border-white/5'
                                }`}
                        >
                            {tier.highlight && (
                                <div className="absolute top-0 right-0 p-4">
                                    <Star className="text-primary fill-primary" size={24} />
                                </div>
                            )}

                            <h4 className="text-xl font-bold uppercase text-white mb-2">{tier.title}</h4>
                            <p className="text-gray-400 text-sm mb-6 h-auto md:h-10">{tier.desc}</p>

                            <div className="flex items-baseline mb-8">
                                <span className="text-4xl font-bold text-white">{tier.price}</span>
                                <span className="text-gray-500 ml-1">/{tier.period}</span>
                            </div>

                            <div className="space-y-4 mb-10">
                                {tier.features.map((feature, i) => (
                                    <div key={i} className="flex items-center text-sm text-gray-300">
                                        <Check size={16} className={`mr-3 flex-shrink-0 ${tier.highlight ? 'text-primary' : 'text-gray-500'}`} />
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <Button
                                variant={tier.highlight ? 'primary' : 'outline'}
                                className="w-full"
                            >
                                Join {tier.title}
                            </Button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Memberships;

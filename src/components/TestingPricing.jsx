import React from 'react';
import { Button } from './ui/Button';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const TestingPricing = () => {
    const plans = [
        {
            name: 'Basic',
            price: '$250',
            description: 'Essential body composition & metabolic markers.',
            features: ['Lactate Threshold', 'Resting Metabolic Rate', 'Body Composition Scan'],
            highlight: false
        },
        {
            name: 'Advanced',
            price: '$350',
            description: 'Comprehensive metabolic & performance deep dive.',
            features: ['All Basic Features', 'VO2 Max Testing', 'Fuel Utilization Specs', 'Training Zones Report'],
            highlight: true
        },
        {
            name: 'Ultimate',
            price: '$1,500',
            description: 'Full biological decoding & physician analysis.',
            features: ['All Advanced Features', 'Complete Blood Panel', 'Physician Consultation', 'Genetic Performance Profile', 'Biological Age Analysis'],
            highlight: false
        }
    ];

    return (
        <section className="bg-white text-black py-16 md:py-24 relative overflow-hidden" id="testing">
            {/* Background Faded Title */}
            <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none opacity-5">
                <h2 className="text-[15vw] md:text-[12rem] font-bold uppercase leading-none tracking-tighter">
                    Testing
                </h2>
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="text-center mb-12 md:mb-16">
                    <h3 className="text-4xl md:text-5xl font-bold uppercase mb-4">
                        Precision <br /> Testing
                    </h3>
                    <p className="text-gray-500 max-w-xl mx-auto">
                        Stop guessing. Start measuring. We use clinical-grade protocols to determine exactly how your body functions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`rounded-3xl p-8 transition-all duration-300 w-full ${plan.highlight
                                    ? 'bg-gray-50 border-2 border-primary shadow-2xl md:scale-105 z-10 order-first md:order-none'
                                    : 'bg-white border border-gray-100 hover:shadow-lg'
                                }`}
                        >
                            <h4 className="text-lg font-bold uppercase tracking-wider text-gray-400 mb-2">
                                {plan.name}
                            </h4>
                            <div className="text-4xl font-bold mb-4">
                                {plan.price} <span className="text-base font-normal text-gray-400">/ session</span>
                            </div>
                            <p className="text-gray-500 text-sm mb-8 h-auto md:h-10">
                                {plan.description}
                            </p>

                            <Button
                                variant={plan.highlight ? 'primary' : 'secondary'}
                                className="w-full mb-8 border border-gray-200"
                            >
                                Select {plan.name}
                            </Button>

                            <div className="space-y-3">
                                {plan.features.map((feature, i) => (
                                    <div key={i} className="flex items-center text-sm font-medium text-gray-600">
                                        <Check size={16} className="mr-3 text-primary-hover flex-shrink-0" />
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestingPricing;

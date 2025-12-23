import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-12 md:py-16 px-6 border-t border-white/5">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
                    <div className="mb-8 md:mb-0">
                        <a href="#" className="text-2xl font-bold tracking-tighter mb-4 block">health</a>
                        <p className="text-gray-500 text-sm max-w-xs">
                            Redefining human performance through data, science, and elite coaching.
                        </p>
                        <p className="text-gray-500 text-sm mt-4">
                            +91 9847535194
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-8 md:gap-16 w-full md:w-auto">
                        <div>
                            <h4 className="font-bold text-sm uppercase mb-4 text-gray-400">Platform</h4>
                            <ul className="space-y-3 md:space-y-2 text-sm text-gray-500">
                                <li><a href="#" className="hover:text-white transition-colors block py-1">Methods</a></li>
                                <li><a href="#" className="hover:text-white transition-colors block py-1">Coaching</a></li>
                                <li><a href="#" className="hover:text-white transition-colors block py-1">Pricing</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-sm uppercase mb-4 text-gray-400">Company</h4>
                            <ul className="space-y-3 md:space-y-2 text-sm text-gray-500">
                                <li><a href="#" className="hover:text-white transition-colors block py-1">About</a></li>
                                <li><a href="#" className="hover:text-white transition-colors block py-1">Careers</a></li>
                                <li><a href="#" className="hover:text-white transition-colors block py-1">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col-reverse md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-6 md:gap-0">
                    <p className="text-[10px] text-gray-600 uppercase tracking-widest text-center md:text-left">
                        © 2024 Health Performance Inc.
                    </p>

                    <div className="w-full md:w-auto">
                        <div className="flex items-center bg-gray-900 rounded-full px-4 py-3 md:py-2 w-full md:w-80">
                            <input
                                type="email"
                                placeholder="Stay updated"
                                className="bg-transparent border-none text-sm text-white placeholder-gray-600 focus:ring-0 w-full outline-none"
                            />
                            <button className="text-primary text-xs font-bold uppercase hover:text-white transition-colors">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

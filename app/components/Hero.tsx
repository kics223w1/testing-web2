import { FC } from 'react';

const Hero: FC = () => {
    return (
        <div className="flex flex-col items-center justify-center text-center px-4 pt-20 pb-16 md:pt-32 md:pb-24 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#0f172a] mb-6 leading-[1.1]">
                Capture HTTP(s)<br />
                in a few clicks
            </h1>

            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mb-12 leading-relaxed">
                Best-in-class native macOS app to capture, decrypt, and mock your HTTP(s) requests/ responses with powerful debugging tools.
            </p>

            <div className="flex flex-col items-center gap-4">
                <a
                    href="#"
                    className="group relative inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white bg-[#111111] rounded-full overflow-hidden transition-all hover:bg-black hover:scale-105 shadow-xl"
                >
                    {/* Gradient Border Effect approximation */}
                    <div className="absolute inset-0 rounded-full border border-white/20"></div>

                    <span className="flex items-center gap-2">
                        Download macOS App
                        <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </span>
                </a>

                <p className="text-sm text-slate-400 mt-2">
                    Supports Apple Silicon Chip & macOS Tahoe (macOS 26)
                </p>
            </div>
        </div>
    );
};

export default Hero;

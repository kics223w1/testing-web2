import Link from 'next/link';
import { FC } from 'react';

const Footer: FC = () => {
    return (
        <footer className="w-full py-8 mt-auto">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 text-sm font-medium text-blue-600">
                <Link href="#" className="hover:underline">GitHub</Link>
                <Link href="#" className="hover:underline">Release Notes</Link>
                <Link href="#" className="flex items-center gap-1 hover:underline">
                    Other Platforms
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </Link>
            </div>
        </footer>
    );
};

export default Footer;

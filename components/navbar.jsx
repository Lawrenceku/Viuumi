/* eslint-disable react/no-children-prop */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import Button from './button';
// import Link from 'next/link';
import Image from 'next/image';
import { useI18n } from '../locales/client';
import { Space_Grotesk, Roboto_Serif } from 'next/font/google';

// Initialize fonts
const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
});

const robotoSerif = Roboto_Serif({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
});

export default function Navbar() {
    const t = useI18n();
    const [logoSrc, setLogoSrc] = useState('/desktop-logo.svg');

    const updateLogoSrc = () => {
        if (window.innerWidth < 1024) {
            setLogoSrc('/mobile-logo.svg');
        } else {
            setLogoSrc('/desktop-logo.svg');
        }
    };

    useEffect(() => {
        updateLogoSrc();
        window.addEventListener('resize', updateLogoSrc);

        return () => window.removeEventListener('resize', updateLogoSrc);
    }, []);

    return (
        <>
            <div className="top-0 z-50  flex items-center justify-between bg-black px-2 py-8 lg:sticky lg:px-8">
                <Image
                    className="cursor-pointer"
                    alt="logo"
                    height={logoSrc === '/mobile-logo.svg' ? 70 : 150}
                    width={logoSrc === '/mobile-logo.svg' ? 70 : 150}
                    src={logoSrc}
                />
                <ul className="hidden cursor-pointer gap-10 font-bold text-lighter-gray lg:flex">
                    <li className="hover:text-brand-blue active:text-brand-blue">
                        {t('landing.nav.home')}
                    </li>
                    <li className="hover:text-brand-blue">
                        {t('landing.nav.service')}
                    </li>
                    <li className="hover:text-brand-blue">
                        {t('landing.nav.comments')}
                    </li>
                    <li className="hover:text-brand-blue">
                        {t('landing.nav.teams')}
                    </li>
                    <li className="hover:text-brand-blue">
                        {t('landing.nav.release_date')}
                    </li>
                </ul>
                <Button
                    size="small"
                    color="primary"
                    children={t('landing.nav.sign_up')}
                />
            </div>
        </>
    );
}

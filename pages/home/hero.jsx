/* eslint-disable react/no-children-prop */
import Image from 'next/image';
import { useState } from 'react';
import CountdownTimer from '@/components/countdown-timer';
import Button from '@/components/button';
import IconContainer from '@/components/icon-container';
import { useI18n } from '@/locales/client';
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

export default function Hero() {
    const t = useI18n();
    const [video, setVideo] = useState(false);
    // const [form, setForm] = useState(false);

    const toggleVideo = () => {
        setVideo((prev) => !prev);
    };

    // const join = () => {
    //     setForm(true);
    // };

    return (
        <div
            className=" bg-gray-text"
            style={{
                background:
                    'linear-gradient(180deg, #000000 -0.45%, #666666 99.55%)',
            }}
        >
            <div className="grid grid-cols-1 bg-[url('/bg-grid.svg')] bg-center bg-repeat lg:grid-cols-3 lg:bg-cover lg:pr-4">
                <div
                    className={`bg-[url('/mobile-ellipse.svg')] bg-cover bg-bottom bg-no-repeat py-10 text-white lg:col-span-2 lg:bg-[url('/desktop-ellipse.svg')] lg:bg-center ${spaceGrotesk.className}`}
                >
                    <div className="relative z-20 w-full px-8 pt-20">
                        <p className="text-center text-[32px] font-bold lg:text-left lg:text-[64px]">
                            {t('landing.hero.title')}{' '}
                            <span className=" inline-flex flex-col items-center gap-1 text-[64px] text-brand-blue">
                                <span>{t('landing.hero.title_highlight')}</span>
                                <Image
                                    alt="line"
                                    src="/line.svg"
                                    height={100}
                                    width={150}
                                />
                            </span>
                        </p>
                        <p
                            className={`mt-16 text-center text-[14px] font-[400]  leading-[32px] lg:w-3/4 lg:text-left lg:text-[20px] ${robotoSerif.className}`}
                        >
                            {t('landing.hero.description')}
                        </p>
                        <div className="flex items-start justify-center gap-8 pt-20 lg:justify-start">
                            <Button
                                color="primary"
                                children={t('landing.hero.join_waitlist')}
                            />
                            <Button
                                playButton
                                onClick={() => toggleVideo()}
                                children={t('landing.hero.watch_video')}
                            />
                        </div>
                        <div className="flex justify-center pt-10 lg:justify-start">
                            <CountdownTimer />
                        </div>
                        <div className="mb-32 flex items-center justify-center gap-4 pt-8 lg:justify-start">
                            <IconContainer icon="/facebook.svg" />
                            <IconContainer icon="/instagram.svg" />
                            <IconContainer icon="/youtube.svg" />
                            <IconContainer icon="/whatsapp.svg" />
                        </div>
                    </div>
                </div>

                {/* Changed className from flex to grid adjustment */}
                <div className="image-container relative flex h-full items-end justify-center pt-20 lg:justify-end">
                    {video ? (
                        <Image
                            className=""
                            alt="video"
                            src="/video.svg"
                            width={700}
                            height={700}
                        />
                    ) : (
                        <Image
                            className=""
                            alt="phone"
                            src="/hero-phone.svg"
                            width={600}
                            height={600}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

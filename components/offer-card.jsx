import { Roboto_Serif, Space_Grotesk } from 'next/font/google';
import Image from 'next/image';
const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
});

const robotoSerif = Roboto_Serif({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
});

const OfferCard = ({ icon, title, description }) => {
    return (
        <div className="flex w-full flex-col items-center justify-center gap-[16px] rounded-lg bg-custom-gradient p-6 text-white">
            <div className="flex ">
                <svg
                    style={{ position: 'absolute' }}
                    width="51"
                    height="51"
                    viewBox="0 0 51 51"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M25.5 50.6163C24.214 50.6041 22.9287 50.4935 21.6564 50.2846L1.00653 29.6347C0.797598 28.3624 0.687031 27.0771 0.674828 25.7911L25.5 50.6163ZM8.01525 43.2758C5.30958 40.5702 3.35178 37.3998 2.14184 34.0217L17.2694 49.1493C13.8912 47.9393 10.7209 45.9815 8.01525 43.2758ZM28.5911 50.4556C29.5966 50.3411 30.5965 50.1659 31.5849 49.9299L1.3612 19.7062C1.1252 20.6945 0.949955 21.6945 0.835472 22.7L28.5911 50.4556ZM36.5789 48.16C35.7667 48.5494 34.9378 48.8926 34.0962 49.1895L2.10163 17.1949C2.3985 16.3533 2.74166 15.5244 3.1311 14.7122L36.5789 48.16ZM38.6901 47.0194C39.4066 46.5864 40.1062 46.1142 40.7856 45.603L5.68806 10.5055C5.17685 11.1849 4.70473 11.8845 4.27169 12.601L38.6901 47.0194ZM43.4634 43.2758C43.1695 43.5698 42.8701 43.8549 42.5655 44.1312L7.15993 8.7256C7.43621 8.42103 7.72132 8.12161 8.01525 7.82767C8.3101 7.53282 8.61048 7.24685 8.91603 6.96976L44.3213 42.3751C44.0442 42.6806 43.7583 42.981 43.4634 43.2758ZM45.7929 40.595C46.3052 39.9139 46.7782 39.2127 47.2119 38.4944L12.7967 4.07921C12.0784 4.51293 11.3772 4.9859 10.6961 5.49814L45.7929 40.595ZM49.3764 33.9105C49.0807 34.7484 48.7392 35.5737 48.3518 36.3825L14.9085 2.93931C15.7174 2.5519 16.5427 2.21038 17.3805 1.91474L49.3764 33.9105ZM50.117 31.3994C50.3536 30.4089 50.5292 29.4067 50.6437 28.3989L22.8922 0.647363C21.8844 0.761916 20.8822 0.937504 19.8917 1.17413L50.117 31.3994ZM50.4726 21.4716C50.6809 22.7413 50.7913 24.0238 50.8038 25.3072L25.9839 0.487302C27.2672 0.499744 28.5498 0.610143 29.8195 0.818495L50.4726 21.4716ZM49.3381 17.0855C48.1283 13.706 46.1701 10.5343 43.4634 7.82767C40.7568 5.12103 37.5851 3.16279 34.2056 1.95295L49.3381 17.0855Z"
                        fill="url(#paint0_linear_0_116)"
                    />
                    <defs>
                        <linearGradient
                            id="paint0_linear_0_116"
                            x1="-6.29177"
                            y1="54.9491"
                            x2="44.3739"
                            y2="5.89195"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#353535" />
                            <stop
                                offset="1"
                                stopColor="#353535"
                                stopOpacity="0"
                            />
                        </linearGradient>
                    </defs>
                </svg>

                <Image
                    className="z-10 ml-4"
                    alt="service-icon"
                    src={icon}
                    width={48}
                    height={48}
                />
            </div>
            <h3
                className={`${spaceGrotesk.className} text-center text-sm font-medium text-white`}
            >
                {title}
            </h3>
            <p
                className={`${robotoSerif.className} text-center text-sm text-lighter-gray`}
            >
                {description}
            </p>
        </div>
    );
};

export default OfferCard;

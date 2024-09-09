import Image from 'next/image';
const IconContainer = ({icon}) => {
    return (
        <div className="cursor-pointer flex  size-10 items-center justify-center rounded-full bg-brand-gray">
            <Image alt='icon' src={icon} height={25} width={25} />
        </div>
    );
};

export default IconContainer;

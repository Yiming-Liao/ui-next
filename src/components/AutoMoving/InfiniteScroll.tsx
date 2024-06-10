// ！需要在全域CSS中新增程式碼！

import Image from "next/image";

const logos = [
    {
        name: 'Prime',
        url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/t2awrrfzdvmg1chnzyfr.svg',
    },
    {
        name: 'Trustpilot',
        url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/tkfspxqmjflfllbuqxsi.svg',
    },
    {
        name: 'Webflow',
        url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276560/logos/nymiivu48d5lywhf9rpf.svg',
    },

    {
        name: 'Airbnb',
        url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/pmblusboe7vkw8vxdknx.svg',
    },
    {
        name: 'Tina',
        url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276560/logos/afqhiygywyphuou6xtxc.svg',
    },
    {
        name: 'Stackoverflow',
        url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/ts1j4mkooxqmscgptafa.svg',
    },
    {
        name: 'mistral',
        url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/tyos2ayezryjskox3wzs.svg',
    },
    {
        name: 'Google',
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
    }
]

const InfiniteScroll: React.FC = () => {
    return (
        <div className="flex flex-col w-full">
            {/* to left */}
            <div className="w-full relative h-24 overflow-hidden"
                style={{ maskImage: 'linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0))' }}
            >
                {logos.map((el, index) => (
                    <div key={el.name} className="scroll-left w-32 h-32 rounded-md absolute"
                        style={{ animationDelay: `calc(30s / 8 * (8 - ${index + 1}) * -1)` }}
                    >
                        {/* <span className="absolute">{index + 1}</span> */}
                        <Image src={el.url} alt="logo" width={128} height={128} className="object-contain" style={{ filter: "grayscale(100%)" }} />
                    </div>
                ))}
            </div>

            {/* to right */}
            <div className="w-full relative h-24 overflow-hidden"
                style={{ maskImage: 'linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0))' }}
            >
                {logos.map((el, index) => (
                    <div key={el.name} className="scroll-right w-32 h-32 rounded-md absolute"
                        style={{ animationDelay: `calc(30s / 8 * (8 - ${index + 1}) * -1)` }}
                    >
                        {/* <span className="absolute">{index + 1}</span> */}
                        <Image src={el.url} alt="logo" width={128} height={128} className="object-contain" style={{ filter: "grayscale(100%)" }} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InfiniteScroll;

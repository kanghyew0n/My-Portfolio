import Link from "next/link";

const Header = ({ onItsMeClick }) => {
    return (
        <header className="w-full h-[60px] lg:h-[80px] fixed z-10 bg-gray-800">
            <div className="flex items-center justify-between px-4 lg:px-16">
                <Link href="/">
                    <div className="flex cursor-pointer">
                        <div className="size-[25px] lg:size-[30px] rounded-full bg-gray-200"></div>
                        <div className="size-[25px] lg:size-[30px] border border-gray-200 rounded-full"></div>
                    </div>
                </Link>

                <ul className='h-[60px] lg:h-[80px] flex items-center gap-[48px]'>
                    <li className='text-lg cursor-pointer' onClick={onItsMeClick}>It's Me !</li>
                    <Link href="/project">
                        <li className='text-lg cursor-pointer'>Project</li>
                    </Link>
                </ul>
            </div>
        </header>
    );
};

export default Header;

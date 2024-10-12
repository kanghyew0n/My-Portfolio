import Link from "next/link";


const ProjectButton = () => {
    return (
        <div className='w-full flex items-center justify-center mt-[100px]'>
            <Link href="/project">
                <button className=' px-[20px] py-[15px] border border-gray-200 rounded-full'> Project 보러가기 →</button>
            </Link>
        </div>
    );
};

export default ProjectButton;

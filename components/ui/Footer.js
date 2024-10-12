import { FOOTER } from '../../constant'

const Footer = () => {
    return <div className='h-[100px] mt-[150px] flex justify-center items-center bg-gray-900'>
        <span>@kanghyew0n 👉</span>
        {Object.keys(FOOTER).map((key) => (
            <a href={FOOTER[key]} key={key} target='_blank' className="underline px-[5px]">{key}</a>
        ))}
    </div>;
};

export default Footer;

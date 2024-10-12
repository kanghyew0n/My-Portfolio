const InfoCard = (props) => {
    return (
        <div className="w-full lg:w-[calc((100%-64px)/3)] h-full p-[3vw] bg-white bg-opacity-5 rounded-[30px] text-[#eee] transition-all duration-300 ease-in-out hover:translate-y-[-20px] overflow-hidden">
            <div className="w-[50px] text-[50px] mb-[20px] transition-all duration-300 ease-in-out">{props.info.icon}</div>
            <p className="text-[20px] lg:text-[24px] font-bold">{props.info.keyWord}</p>
            {props.info.link ? (
                <a target="_blank" href={props.info.link}>
                    <p className="sunTitle">{props.info.subTitle}</p>
                </a>
            ) : (
                <p className="sunTitle">{props.info.subTitle}</p>
            )}

            <p className="content">{props.info.content}</p>
        </div>
    );
};


export default InfoCard;

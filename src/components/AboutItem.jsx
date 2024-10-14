const AboutItem = (props) => {
  return (
    <div className="group w-full h-full p-[3vw] bg-white bg-opacity-5 rounded-[30px] text-gray-200 cursor-default transition-all duration-300 ease-in-out hover:translate-y-[-20px]">
      <div className="w-[50px] text-[50px] transition-all duration-300 ease-in-out group-hover:scale-125 group-hover:translate-y-[-10px]">
        {props.info.icon}
      </div>
      <div>
        <p className="text-[24px] font-bold">{props.info.keyWord}</p>
        <p className="text-lg mb-4">{props.info.subTitle}</p>
      </div>
      <p className="text-lg font-light">{props.info.content}</p>
    </div>
  );
};

export default AboutItem;

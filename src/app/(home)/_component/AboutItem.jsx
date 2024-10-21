const AboutItem = (props) => {
  return (
    <div className="group w-full h-full bg-box cursor-default transition-all duration-300 ease-in-out hover:translate-y-[-20px]">
      <div className="w-[50px] text-[50px] max-sm:text-[36px] transition-all duration-300 ease-in-out group-hover:scale-125 group-hover:translate-y-[-10px]">
        {props.info.icon}
      </div>
      <div>
        <h2>{props.info.keyWord}</h2>
        <p className="text-lg mb-4">{props.info.subTitle}</p>
      </div>
      <p className="">{props.info.content}</p>
    </div>
  );
};

export default AboutItem;

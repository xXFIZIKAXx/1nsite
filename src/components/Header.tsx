const Header = ({}) => {
    return(
        <div>
            <img src='src\photo\colocol.png' className='absolute left-[1870px] top-[34px] h-[12px] w-[12px]'/>
            <img src='src\photo\nastroiki.png' className='absolute left-[1832px] top-[34px] h-[12px] w-[12px]'/>
            <img src='src\photo\reg.png' className='absolute left-[1750px] top-[32px] h-[16px] w-[58px]'/>
            <div className="relative">
                <input type="text" placeholder="    Type here..." className="absolute left-[1530px] top-[-495px] h-[40px] w-[200px] border border-gray-700 p-1 rounded-[12px] bg-[#0F1535]"/>
            </div>
        </div>
    )
}
export default Header
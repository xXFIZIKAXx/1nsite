import { Link } from 'react-router-dom'
const Block = () => {
    return(
        <header className="absolute top-[10px] left-[10px] w-[256px] h-[1135px] bg-gradient-to-r from-[#060B26] opacity-85 to-[#1A1F37] backdrop-filter backdrop-blur-sm rounded-lg">
            <div className='absolute top-[46px] left-[55px] w-[200px] h-[14px] font-custom'>1NSITE DASHBOARD</div>
            <div className='absolute top-[91.5px] left-[14px] w-[233.25px] h-[1px] bg-gradient-to-r bg-gradient-to-r from-transparent via-white to-transparent'></div>
            <Link to='/dashboards' className="absolute top-[126px] left-[19px] w-[219.5px] h-[54px] bg-gray-300 bg-opacity-0 transition duration-500 ease-in-out transform hover:bg-gray-700 rounded-[8px]">
                <div className="absolute inset-0 bg-white-500 opacity-0 transition duration-500 ease-in-out hover:opacity-100"></div>
                <div className="absolute top-[11px] left-[10px] w-[30px] h-[30px] bg-gray-300 bg-opacity-100 transition duration-5000 rounded-[12px]"></div>
                    <img src="src\photo\domik.png" className='absolute top-[19px] left-[19px]' />
                <p className="absolute inset-0 flex top-[14px] left-[54px] text-white">Dashboard</p>
            </Link>
            <Link to='/tabless' className="absolute top-[185px] left-[19px] w-[219.5px] h-[54px] bg-gray-300 bg-opacity-0 transition duration-500 ease-in-out transform hover:bg-gray-700 rounded-[8px]">
                <div className="absolute inset-0 bg-white-500 opacity-0 transition duration-500 ease-in-out hover:opacity-100"></div>
                <div className="absolute top-[11px] left-[10px] w-[30px] h-[30px] bg-gray-300 bg-opacity-100 transition duration-5000 rounded-[12px]"></div>
                    <img src="src\photo\chart.png" className='absolute top-[17px] left-[17.5px]' />
                <p className="absolute inset-0 flex top-[14px] left-[54px] text-white">Tables</p>
            </Link>
            <Link to ='/billings' className="absolute top-[244px] left-[19px] w-[219.5px] h-[54px] bg-gray-300 bg-opacity-0 transition duration-500 ease-in-out transform hover:bg-gray-700 rounded-[8px]">
                <div className="absolute inset-0 bg-white-500 opacity-0 transition duration-500 ease-in-out hover:opacity-100"></div>
                <div className="absolute top-[11px] left-[10px] w-[30px] h-[30px] bg-gray-300 bg-opacity-100 transition duration-5000 rounded-[12px]"></div>
                    <img src="src\photo\kart.png" className='absolute top-[17px] left-[17.5px]' />
                <p className="absolute inset-0 flex top-[14px] left-[54px] text-white">Billing</p>
            </Link>
            <Link className="absolute top-[303px] left-[19px] w-[219.5px] h-[54px] bg-gray-300 bg-opacity-0 transition duration-500 ease-in-out transform hover:bg-gray-700 rounded-[8px]">
                <div className="absolute inset-0 bg-white-500 opacity-0 transition duration-500 ease-in-out hover:opacity-100"></div>
                <div className="absolute top-[11px] left-[10px] w-[30px] h-[30px] bg-gray-300 bg-opacity-100 transition duration-5000 rounded-[12px]"></div>
                    <img src="src\photo\default.png" className='absolute top-[17px] left-[17.5px]' />
                <p className="absolute inset-0 flex top-[14px] left-[54px] text-white">RTL</p>
            </Link>
            <div className='absolute top-[370px] left-[30px] w-[200px] h-[14px] font-custom'>ACCOUNT PAGES</div>
            <Link to = '/prof' className="absolute top-[410px] left-[19px] w-[219.5px] h-[54px] bg-gray-300 bg-opacity-0 transition duration-500 ease-in-out transform hover:bg-gray-700 rounded-[8px]">
                <div className="absolute inset-0 bg-white-500 opacity-0 transition duration-500 ease-in-out hover:opacity-100"></div>
                <div className="absolute top-[11px] left-[10px] w-[30px] h-[30px] bg-gray-300 bg-opacity-100 transition duration-5000 rounded-[12px]"></div>
                    <img src="src\photo\chel.png" className='absolute top-[17px] left-[17.5px]' />
                <p className="absolute inset-0 flex top-[14px] left-[54px] text-white">Profile</p>
            </Link>
            <Link to = '/' className="absolute top-[469px] left-[19px] w-[219.5px] h-[54px] bg-gray-300 bg-opacity-0 transition duration-500 ease-in-out transform hover:bg-gray-700 rounded-[8px]">
                <div className="absolute inset-0 bg-white-500 opacity-0 transition duration-500 ease-in-out hover:opacity-100"></div>
                <div className="absolute top-[11px] left-[10px] w-[30px] h-[30px] bg-gray-300 bg-opacity-100 transition duration-5000 rounded-[12px]"></div>
                    <img src="src\photo\file.png" className='absolute top-[17px] left-[17.5px]' />
                <p className="absolute inset-0 flex top-[14px] left-[54px] text-white">Sign In</p>
            </Link>
            <Link to ='/signup' className="absolute top-[528px] left-[19px] w-[219.5px] h-[54px] bg-gray-300 bg-opacity-0 transition duration-500 ease-in-out transform hover:bg-gray-700 rounded-[8px]">
                <div className="absolute inset-0 bg-white-500 opacity-0 transition duration-500 ease-in-out hover:opacity-100"></div>
                <div className="absolute top-[11px] left-[10px] w-[30px] h-[30px] bg-gray-300 bg-opacity-100 transition duration-5000 rounded-[12px]"></div>
                    <img src="src\photo\rocet.png" className='absolute top-[17px] left-[17.5px]' />
                <p className="absolute inset-0 flex top-[14px] left-[54px] text-white">Sign Up</p>
            </Link>
            <img src = 'src\photo\buner.png' className='absolute top-[952px] left-[19px] w-[218px] h-[169.5px] rounded-[15px]'/>
                <div className='absolute top-[968px] left-[35px] w-[35px] h-[35px] rounded-[12px] bg-gray-300 bg-opacity-100'>
                    <img src ='src\photo\circle.png' className='absolute top-[5px] left-[5px] w-[25px] h-[25px] rounded-[12px]'></img>
                    <p className='absolute top-[50px] left-[1px] w-[100px] h-[35px] text-white'>Need Help?</p>
                    <p className='absolute top-[73px] left-[1px] w-[200px] h-[35px] text-white text-sm'>Please check our docs</p>
                    <Link to = '/' className = 'absolute top-[100px] left-[0px] w-[186px] h-[35px] rounded-[12px] bg-[#060B28] bg-opacity-70'>
                        <p className='absolute top-[8px] left-[33px] w-[50px] h-[35px] text-white text-sm'>DOCUMENTATION</p>
                    </Link>
                </div>
        </header>

    )
}
export default Block
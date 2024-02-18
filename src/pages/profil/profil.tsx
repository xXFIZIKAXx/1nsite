import Header from "../../components/Header"
import Block from "../../components/block"
import { Link } from "react-router-dom"
import './profil.css'
export const Pages: string = 'Profil';
const Prof = () => {
    return(
        <div>
            <div className="backfoto">
                <p className="absolute top-[20px] left-[303px] text-sm opacity-50">Pages</p>
                <p className="absolute top-[18px] left-[349px]">/ Profile</p>
                <p className="absolute top-[40px] left-[303px] text-lg">Profile</p>
            </div>
            <div id="hat">
            <div className="btn1">
                <p className="absolute left-[25px] top-[5px]">PROJECTS</p>
            </div>
            <div className="btn2">
                <p className="absolute left-[45px] top-[5px]">TEAM</p>
            </div>
            <div className="btn3">
                <p className="absolute left-[25px] top-[5px]">OVERVIEW</p>
            </div>
            
            </div>
            <div className="allsquares">
                <div id="block1">
                    <p className="absolute top-[31px] left-[35px] text-[32px] text-white">Welkome back!</p>
                    <p className="absolute top-[76px] left-[35px] text-[14px] text-white">Nice to see you, Lox!</p>
                    <Link>
                        <p className="absolute top-[319px] left-[35px] text-[12px] text-white">Turn on your car</p>
                        <img className="absolute top-[322px] left-[135px]" src="src\photo\forward.png"/>
                    </Link>
                </div>
                <div id="block2">
                        <p className="absolute top-[28px] left-[21px] font-bold text-[18px] text-white ">Car informations</p>
                        <p className="absolute top-[59px] left-[21px] font-thin text-white">Hello, SosatBackend! Your Car is ready.</p>
                        <div id="block6">
                            <p className="absolute top-[19px] left-[18px] text-[12px] text-gray">Battery Health</p> 
                            <p className="absolute top-[34px] left-[18px] text-[22px] text-white">76%</p>
                            <div className="absolute top-[14px] left-[150px] w-14 h-14 bg-blue-500 rounded-lg"></div>
                            <img className ='absolute top-[28.17px] left-[167.5px]' src="src\photo\i1.png"/>
                        </div>
                        <div id="block7">
                            <p className="absolute top-[19px] left-[18px] text-[12px] text-gray">Efficienty</p>
                            <p className="absolute top-[34px] left-[18px] text-[22px] text-white">+20%</p>
                            <img className ='absolute top-[16px] left-[123px]' src="src\photo\i2.png"/>

                        </div>
                        <div id="block8">
                            <p className="absolute top-[19px] left-[18px] text-[12px] text-gray">Consuption</p>
                            <p className="absolute top-[34px] left-[18px] text-[22px] text-white">163W/km</p>
                            <div className="absolute top-[14px] left-[150px] w-14 h-14 bg-blue-500 rounded-lg"></div>
                            <img className ='absolute top-[30px] left-[169px] text-[22px]' src="src\photo\i3.png"/>

                        </div>
                        <div id="block9">
                            <p className="absolute top-[19px] left-[18px] text-[12px] text-gray">This Week</p>
                            <p className="absolute top-[34px] left-[18px] text-[22px] text-white">1.342km</p>
                            <img className ='absolute top-[16px] left-[123px]' src="src\photo\i4.png"/>

                        </div>
                        <div className="circle"></div>
                            
                            <div className="d1">
                                <p className="absolute top-[45px] left-[40px] text-[50px] text-white">68%</p> 
                                <p className="absolute top-[110px] left-[55px] text-[10px] text-white">Current load</p>
                                <img src="src\photo\Ellipse 89.png"/>
                            </div>
                        <p className="absolute top-[298px] left-[68px] text-[18px] text-white">0h 58 min</p>
                        <p className="absolute top-[318px] left-[52px] text-[14px] text-gray">Time to full charge</p>
                    
                </div>
                <div id="block3">
                    <p className="absolute top-[28px] left-[21px] text-[18px] text-white"> Profile informations</p>
                    <p className="absolute top-[67px] left-[21px] text-[14px] h-[69px] w-[409px] text-gray">Hi, i'm Mark Jonson, Decisions: If you can't deide, the answeris no. If two equally difficult path, choose the one more painful in the short term (pain avoidance is creating an illusion of equally).</p>
                    <p className="absolute top-[179.5px] left-[25px] text-[14px] text-white">Full name:</p>
                    <p className="absolute top-[215.5px] left-[25px] text-[14px] text-white">Mobile:</p>
                    <p className="absolute top-[251.5px] left-[25px] text-[14px] text-white">Email:</p>
                    <p className="absolute top-[287.5px] left-[25px] text-[14px] text-white">Location:</p>
                    <p className="absolute top-[323.5px] left-[25px] text-[14px] text-white">Social Media:</p>
                </div>
                <div id="block4">
                <p className="">Platfrom Settings</p>
                <p className="">ACCOUNT</p>
                <p className="">Email me when someone follows me</p>
                <p className="">Email me when someone answers to...</p>
                <p className="">Email me when someone mentions me</p>

                <p className="">APPLICATION</p>
                <p className="">New launches and projects</p>
                <p className="">Monthly product updates</p>
                <p className="">Subscribe to newsletter</p>
                <p className="">Receive mails weekly</p>
                <label className="toggle">
                <input type="checkbox"/>
                <span className="slider"></span>
                </label></div>

                <div id="block5">
                <p className="">Projects</p>
                <p className="">Architects design houses</p>
                <p className="">Project #1</p>
                <p className="">Modern</p>
                <p className="">As Uber works through a huge amount of internal management turmoil.</p>

                <label className="toggle">
                <input type="checkbox"/>
                <span className="slider"></span>
               
                <div className="btn11">
                <p className="absolute left-[25px] top-[5px]">VIEW ALL</p>
            </div>


            <p className="">Project #2</p>
            <p className="">Scandinavian</p>
            <p className="">Music is sometheing that every person has his or her own specific opinion about.</p>
            <div className="btn22">
                <p className="absolute left-[25px] top-[5px]">VIEW ALL</p>
            </div>


            <p className="">Project #3</p>
            <p className="">Minimalist</p>
            <p className="">Different people have different state, and various types of music.</p>
            <div className="btn33">
                <p className="absolute left-[25px] top-[5px]">VIEW ALL</p>
            </div>
                </label>
                </div>
            </div>
            <Block/>
            <Header/>
        </div>
    )
}
export default Prof
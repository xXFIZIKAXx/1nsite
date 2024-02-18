import RHeader from "../../components/regHeader"
import './signin.css'
const Signin = () => {
    return(<div>
        <img src="src\photo\Bacr.png"/>
        <div className="wrapper">
        <form action="">
            <h1>Register with</h1>
            <div className="input-box">
                <input type="text" placeholder="Your full name"
                required/>
                <i className='bx bx-user'></i>
            </div>

            <div className="input-box">
                <input type="text" placeholder="Your email address"
                required/>
                <i className='bx bxs-lock'></i>
            </div>

            <div className="input-box">
                <input type="password" placeholder="Your password"
                required/>
                <i className='bx bx-user'></i>
            </div>

            <div className="remember-forgot">
                <label><input type="checkbox"/>Remember me</label>
            </div>
            <button type="submit" className="btn">SIGN UP</button>
            <div className="register-link">
                <p>Have already an account?<a
                    href="#">Sign in</a></p>
                
            <div className="fon"></div> 
           <div className="foto"> </div>
            </div>
            
            </form>
        </div> 
        <RHeader/>
    </div>
    )
}
export default Signin
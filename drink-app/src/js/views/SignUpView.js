import navImg from '../../css-image/wave1-cut.png';
import brandLogo from '../../css-image/brand-logo1.png';
import backLogo from '../../css-image/back-logo.png';


const SignUpView = ({NewEmail, NewPassword, NewSignUp, ToLogin}) => {
    return (
        <div>
            <nav>
                <img src={navImg} alt="Big wave"/>
                <img src={brandLogo} alt="Brand logo" id="brand-logo-cut"></img>
                <img src={backLogo} onClick = {ToLogin} alt="Back logo" id="back-logo" />
                <button onClick={ToLogin} id="back-search">Back to Login</button>
            </nav>
        
            <div className="sign-container">
                <h1>Sign Up</h1>
                <form onSubmit={NewSignUp}>
                    <label>
                        Email
                        <input onChange={(e) => NewEmail(e.target.value)} name='email' type='email' placeholder="Enter your email"></input>
                    </label>
                    <label>
                        Password
                        <input onChange={(e) => NewPassword(e.target.value)} name='password' type='password' placeholder="Enter your password"></input>
                    </label>
                    <button type='submit'>Sign Up</button>
                </form>
            </div>
        </div>
    )
}

export default SignUpView;
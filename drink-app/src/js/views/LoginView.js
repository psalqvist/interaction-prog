import navImg from '../../css-image/wave1-cut.png';
import brandLogo from '../../css-image/brand-logo1.png';
import backLogo from '../../css-image/back-logo.png';

const LoginView = ({NewEmail, NewPassword, NewSignIn, ToSearch, ToSignUp}) => {
    return (
        <div>
            <nav>
                <img src={navImg} alt="Big wave"/>
                <img src={brandLogo} alt="Brand logo" id="brand-logo-cut"></img>
                <img src={backLogo} onClick = {ToSearch} alt="Back logo" id="back-logo" />
                <button onClick={ToSearch} id="back-search">Back to Search</button>
            </nav>
            <div className="sign-container"> 
                <h1>Sign in</h1>
                <form onSubmit={NewSignIn}>
                    <label>
                        Email
                        <input onChange={(e) => NewEmail(e.target.value)} name='email' type='email' placeholder="Enter your email" />
                    </label>
                    <label>
                        Password
                        <input onChange={(e) => NewPassword(e.target.value)} name='password' type='password' placeholder="Enter your password" />
                    </label>
                    <button type='submit'>Sign in</button>
                </form>
                <button onClick={ToSignUp}>Sign Up</button>
            </div>
        </div>
    )
}

export default LoginView;
import logo from "../../assets/logo.png"
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../lib/firebase";
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [user] = useAuthState(auth)
    const navigate = useNavigate();

    // console.log(user)

    const handleLogin = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((res) => {
                console.log(res);
            }).catch((error) => {
                alert(error.message)
                // console.log(error);
            });
    }

    if (user)
        return navigate('/')
    else
        return (
            <div className="min-h-screen flex md:flex-row flex-col items-center justify-center">
                <div className="flex items-end justify-center">
                    <img src={logo} alt="" />
                    <p className="text-7xl font-bold tracking-widest relative bottom-14 -left-10">ilami</p>
                </div>
                <div>
                    <button className="btn btn-dark uppercase tracking-[.3em] py-2.5 px-3 rounded-none text-[.6875rem]" onClick={handleLogin}>Login</button>
                </div>
            </div>
        )
}

export default Login;
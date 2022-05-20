import logo from "../../assets/logo.png"

const Login = () => {
    return (
        <div className="min-h-screen flex md:flex-row flex-col items-center justify-center">
            <div className="flex items-end justify-center">
                <img src={logo} />
                <p className="text-7xl font-bold tracking-widest relative bottom-14 -left-10">ilami</p>
            </div>
            <div>
                <button className="btn btn-dark uppercase tracking-[.3em] py-2.5 px-3 rounded-none text-[.6875rem]">Login</button>
            </div>
        </div>
    )
}

export default Login;
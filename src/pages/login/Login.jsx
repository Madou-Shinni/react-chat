import {Button, Input} from "@nextui-org/react";
import {useState, useEffect} from "react";
import {useSearchParams,useNavigate} from "react-router-dom";
import {login} from "@/api/user.js";
import DynamicHeroIcon from "../../components/icon/Icon.jsx";
import {LoginType, OauthGithubUrl} from "../../constants/login.js";
import "./index.css"
import Form from "./Form.jsx";
import {signup} from "../../api/user.js";
import {setUserInfo} from "./storage.js";
import toast from "react-hot-toast";

const Login = () => {
    const [isLoginForm, setIsLoginForm] = useState(true);
    const navigate = useNavigate();

    const [query] = useSearchParams();
    const code = query.get('code');
    const handleLogin = async (auth,data) => {
        if (auth === 'github') {
            window.location.href = OauthGithubUrl;
            return
        }
        // Add your login logic here
        const res = await login({type: LoginType.Github,github: data})
        if (res.code) {
            toast.error(res.message)
        }else {
            toast.success('login success')
            setUserInfo(res)
            navigate('/')
        }
    };

    useEffect( () => {
        if (code) {
            // Add your login logic here
            handleLogin('', {code})
        }
    }, [code]);

    return <>
        <div className="flex h-screen">
            <div className="hidden lg:block lg:w-1/2 bg-cover bg-center" style={{backgroundImage: `url("img/bg.jpg")`}}></div>
            <div className="w-full lg:w-1/2 flex items-center justify-center p-4 lg:p-12">
                <div className="w-full max-w-lg">
                    <h1 className="text-3xl mb-6 font-bold">Social Login</h1>
                    <div className={`form-wrapper h-[180px]`} style={{transform: `${isLoginForm ? 'rotateY(0deg)' : 'rotateY(180deg)'}`}}>
                        <div className={'front'}>
                            <Form unplaceholder={'Username or Email'} btnName={'Login'} submitType={'login'}/>
                        </div>
                        <div className={'back'}>
                            <Form unplaceholder={'Username'} btnName={'Sign up'} submitType={'signup'}/>
                        </div>
                    </div>
                    <div>
                        <p className="text-center my-4">
                            {isLoginForm ? "Don't have an account? " : "Already have an account? "}
                            <a href="#" className="text-blue-500" onClick={() => setIsLoginForm(!isLoginForm)}>
                                {isLoginForm ? "Sign up" : "Login"}
                            </a>
                        </p>
                        <Button isIconOnly onClick={() => handleLogin('github')}>
                            <DynamicHeroIcon icon={'GithubIcon'}></DynamicHeroIcon>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Login;
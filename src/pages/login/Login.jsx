import {Button, Input} from "@nextui-org/react";
import {useState, useEffect} from "react";
import {useSearchParams} from "react-router-dom";
import {login} from "@/api/user.js";
import DynamicHeroIcon from "../../components/icon/Icon.jsx";
import {OauthGithubUrl} from "../../constants/login.js";
import "./index.css"
import Form from "./Form.jsx";
import {signup} from "../../api/user.js";

const Login = () => {
    const [isLoginForm, setIsLoginForm] = useState(true);

    const [query] = useSearchParams();
    const code = query.get('code');
    const handleLogin = async (auth) => {
        if (auth === 'github') {
            window.location.href = OauthGithubUrl;
        }
        // Add your login logic here
        // const res = await login({code: '1111'})
    };

    useEffect( () => {
        if (code) {
            // Add your login logic here
            const res = async () => await login({code})
            console.log(res)
        }
    }, []);

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
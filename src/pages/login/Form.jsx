import React, {useState} from 'react'
import {useNavigate} from "react-router-dom";
import toast from 'react-hot-toast';
import {Button, Input} from "@nextui-org/react";
import {login, signup} from "@/api/user.js";
import {LoginType} from "../../constants/login.js";
import {setUserInfo} from "./storage.js";

const Form = ({unplaceholder,btnName,submitType}) => {
    const [account, setAccount] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    const handleSignUp = (data) => signup(data)
    const handleLogin = (data) => login({type: LoginType.Account,account: data})

    const handleSubmit = async () => {
        if (submitType === 'signup') {
            const res = await handleSignUp({account, password})
            if (res.code) {
                toast.error(res.message)
            }else {
                toast.success('signup success')
            }
        } else {
            const res = await handleLogin({account, password})
            if (res.code) {
                toast.error(res.message)
            }else {
                toast.success('login success')
                setUserInfo(res)
                navigate('/')
            }
        }
    }

    const handleAccountChange = (e) => {
        setAccount(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    return <div className={`space-y-4`}> {/* 使用模板字符串添加类名 */}
        <Input placeholder={unplaceholder} value={account} onChange={handleAccountChange} />
        <Input type={'password'} placeholder="Password" value={password} onChange={handlePasswordChange} />
        <Button onClick={handleSubmit}>{btnName}</Button>
    </div>
}

export default Form;
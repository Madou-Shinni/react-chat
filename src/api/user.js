import axiosInstance from "../hooks/useRequest/axiosInstance.js";

export const login =  (data) => {
    return axiosInstance({
        url: "/user/login",
        method: "post",
        data
    })
}

export const signup =  (data) => {
    return axiosInstance({
        url: "/user/signup",
        method: "post",
        data
    })
}
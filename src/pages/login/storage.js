import {storage} from "../../utils/storage.js";

export const setUserInfo = (userInfo) => {
    storage.set('userInfo',userInfo)
}

export const getUserInfo = () => {
    return storage.get('userInfo')
}
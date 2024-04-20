import {storage} from "../../utils/storage.js";

export const getUserInfo = () => {
    return storage.get('userInfo')
}
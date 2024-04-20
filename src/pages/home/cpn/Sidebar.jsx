import {Avatar} from "@nextui-org/react";
import Menu from "./Menu.jsx";
import {getUserInfo} from "../storage.js";

const Sidebar = () => {
    const userInfo = getUserInfo();

    return (
        <div className="h-screen w-[75px] p-4 text-center border-r-1 flex flex-col items-center gap-5">
            {/* 菜单内容 */}
            <div className={'avatar-wrapper'}>
                <Avatar isBordered color="primary" src={userInfo?.userInfo.avatar} />
            </div>
            <Menu/>
        </div>
    );
};

export default Sidebar;
import {Avatar} from "@nextui-org/react";
import Menu from "./Menu.jsx";

const Sidebar = () => {
    return (
        <div className="h-screen w-[75px] p-4 text-center border-r-1 flex flex-col items-center gap-5">
            {/* 菜单内容 */}
            <div className={'avatar-wrapper'}>
                <Avatar isBordered color="primary" src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
            </div>
            <Menu/>
        </div>
    );
};

export default Sidebar;
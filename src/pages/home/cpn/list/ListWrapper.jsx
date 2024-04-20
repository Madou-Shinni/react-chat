import {useContext} from "react";
import {context} from "@/pages/home/store.js";
import {observer} from "mobx-react-lite";
import {useState} from 'react'
import Friends from "./Friends.jsx";
import {SearchIcon} from "../../../../components/icon/SearchIcon.jsx";
import {Input} from "@nextui-org/react";
import Groups from "./Groups.jsx";

const ListWrapper = () => {
    {/* 获取state */}
    const storeCtx = useContext(context)
    const [active, setActive] = useState(false)
    const handleFocus = () => {
        setActive(true);
    }

    const handleBlur = () => {
        setActive(false);
    }

    return <div className={'flex flex-col border-r-1'}>
        <div className={'p-4'} onFocus={handleFocus}
             onBlur={handleBlur}>
            <Input
                classNames={{
                    base: `max-w-full ${active ? 'sm:max-w-[12rem]' : 'sm:max-w-[10rem]'} h-10`,
                    mainWrapper: "h-full",
                    input: "text-small",
                    inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20 w-full",
                }}
                placeholder="Type to search..."
                size="sm"
                startContent={<SearchIcon size={18} />}
                type="search"
            />
        </div>
        <div className={'list-wrapper'}>
            <div className={`${storeCtx.selectedMenu === 'friend' ? 'visible' : 'invisible h-[0px]'}`}><Friends/></div>
            <div className={`${storeCtx.selectedMenu === 'group' ? 'visible' : 'invisible h-[0px]'}`}><Groups/></div>
        </div>
    </div>
}

export default observer(ListWrapper);
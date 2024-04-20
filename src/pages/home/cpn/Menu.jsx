import {useContext} from "react";
import {context} from "@/pages/home/store.js";
import {observer} from "mobx-react-lite";
import {Tab, Tabs} from "@nextui-org/react";
import {HeartIcon} from "@/components/icon/HeartIcon.jsx";
import DynamicHeroIcon from "@/components/icon/Icon.jsx";

const Menu = () => {
    {/* 获取state */}
    const storeCtx = useContext(context)

    const handleChange = (key) => {
        storeCtx.setSelectedMenu(key)
        console.log(storeCtx.selectedMenu)
    }

    return <>
        <Tabs size={'lg'} aria-label="Options" variant="underlined" color="danger"
              classNames={{
                  base: 'flex-1',
                  tabList: "flex flex-col h-full",
                  tab: "w-full h-auto",
              }}
              onSelectionChange={handleChange}
        >
            <Tab key="friend" title={
                <div className={'flex flex-col items-center text-sm'}>
                    <HeartIcon size={'20'}/>
                    好友
                </div>
            }/>
            <Tab key="group" title={
                <div className={'flex flex-col items-center text-sm'}>
                    <DynamicHeroIcon icon={'GroupIcon'} fill={'currentColor'}></DynamicHeroIcon>
                    群
                </div>
            } />
            <Tab key="contact" title={
                <div className={'flex flex-col items-center text-sm'}>
                    <DynamicHeroIcon icon={'ContactIcon'} fill={'currentColor'}></DynamicHeroIcon>
                    联系人
                </div>
            }/>
        </Tabs>
    </>
}

export default observer(Menu);
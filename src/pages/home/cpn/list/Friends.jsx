import {Avatar, Listbox, ListboxItem} from "@nextui-org/react";
import {getFriends} from "@/api/social.js";
import toast from "react-hot-toast";

const Friends = () => {
    const {data,error,isLoading} = getFriends();
    if (error) {
        toast.error(error.message);
    }

    const handleAction = (i) => {
        console.log(i)
    }

    return <>
        <Listbox
            aria-label="User Menu"
            onAction={(key) => handleAction(key)}
            className="p-0 gap-0 divide-y divide-default-300/50 dark:divide-default-100/80 bg-content1 sm:max-w-[300px] overflow-visible shadow-small"
            itemClasses={{
                base: "px-3 rounded-none gap-3 h-12 data-[hover=true]:bg-default-100/80 data-[focus=true]:bg-default-100/80",
            }}
        >
            {data?.list?.map((item, index) => {
                return <ListboxItem
                    key={item.id}
                    showDivider
                    startContent={
                        <Avatar color="primary" src={item.avatar}/>
                    }
                >
                    <div className="flex flex-col">
                        <span className="text-small">{item.remark || item.nickname}</span>
                    </div>
                </ListboxItem>
            })}
        </Listbox>
    </>
}

export default Friends;
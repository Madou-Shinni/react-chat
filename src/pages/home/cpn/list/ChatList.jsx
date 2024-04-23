import {Listbox, ListboxItem} from "@nextui-org/react";
import {Avatar,Badge} from "@nextui-org/react";
import toast from "react-hot-toast";
import {getConversations} from "@/api/im.js";

const ChatList = () => {
    const {data,error} = getConversations();
    if (error) {
        toast.error(error.message);
    }

    const handleAction = (i) => {
        console.log(i)
    }

    console.log(data)

    return (
        <>
            <Listbox
                aria-label="User Menu"
                onAction={(key) => {handleAction(key)}}
                className="p-0 gap-0 divide-y divide-default-300/50 dark:divide-default-100/80 bg-content1 sm:max-w-[300px] overflow-visible shadow-small"
                itemClasses={{
                    base: "px-3 rounded-none gap-3 h-12 data-[hover=true]:bg-default-100/80",
                }}
            >
                <ListboxItem
                    key="issues1"
                    endContent={<Badge isInvisible={true}  color="primary" />}
                    showDivider
                    startContent={
                        <Avatar color="primary" src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
                    }
                >
                    <div className="flex flex-col truncate whitespace-nowrap">
                        <span className="text-small truncate">Software Engineer Engineer Engineer</span>
                        <span className="text-tiny text-default-400">有新消息</span>
                    </div>
                </ListboxItem>
                {
                    Object.keys(data).map((key) => {
                    )}
                }
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
    );
};

export default ChatList;
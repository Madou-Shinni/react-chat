import {Avatar, Listbox, ListboxItem} from "@nextui-org/react";
import {getGroups} from "@/api/social.js";
import toast from "react-hot-toast";

const Groups = () => {
    const {data,error,isLoading} = getGroups();
    if (error) {
        toast.error(error.message);
    }

    const handleAction = (i) => {
        console.log(i)
    }

    return <div className="flex">
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
                        <span className="text-small">{item.name}</span>
                    </div>
                </ListboxItem>
            })}
        </Listbox>
    </div>
}

export default Groups;
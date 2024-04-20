import {useState,useMemo} from "react";
import {Input} from "@nextui-org/react";
import {Listbox, ListboxItem} from "@nextui-org/react";
import {Avatar} from "@nextui-org/react";
import {SearchIcon} from "./icon/SearchIcon.jsx";

const ChatList = () => {
    const [active, setActive] = useState(false)
    const [selectedKeys, setSelectedKeys] = useState(new Set(["text"]));

    const selectedValue = useMemo(
        () => Array.from(selectedKeys).join(", "),
        [selectedKeys]
    );
    const handleFocus = () => {
        setActive(true);
    }

    const handleBlur = () => {
        setActive(false);
    }

    return (
        <div className="h-screen w-1/5 sm:max-w-[300px] border-r-1">
            {/* 会话列表 */}
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
            <Listbox
                aria-label="User Menu"
                onAction={(key) => {console.log(key)}}
                className="p-0 gap-0 divide-y divide-default-300/50 dark:divide-default-100/80 bg-content1 sm:max-w-[300px] overflow-visible shadow-small"
                itemClasses={{
                    base: "px-3 rounded-none gap-3 h-12 data-[hover=true]:bg-default-100/80",
                }}
            >
                <ListboxItem
                    key="issues1"
                    endContent={<ItemCounter number={13} />}
                    showDivider
                    startContent={
                        <Avatar color="primary" src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
                    }
                >
                    <div className="flex flex-col">
                        <span className="text-small">Software Engineer</span>
                        <span className="text-tiny text-default-400">Software Engineer</span>
                    </div>
                </ListboxItem>
                <ListboxItem
                    key="issues2"
                    endContent={<ItemCounter number={13} />}
                    showDivider
                    startContent={
                        <Avatar color="primary" src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
                    }
                >
                    Issues
                </ListboxItem>
                <ListboxItem
                    key="issues3"
                    endContent={<ItemCounter number={13} />}
                    showDivider
                    startContent={
                        <Avatar color="primary" src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
                    }
                >
                    Issues
                </ListboxItem>
            </Listbox>
        </div>
    );
};

export default ChatList;

export const ItemCounter = ({number}) => (
    <div className="flex items-center gap-1 text-default-400">
        <span className="text-small">{number}</span>
    </div>
);
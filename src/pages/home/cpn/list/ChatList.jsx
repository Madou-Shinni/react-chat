import {Listbox, ListboxItem} from "@nextui-org/react";
import {Avatar} from "@nextui-org/react";

const ChatList = () => {

    return (
        <>
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
            </Listbox>
        </>
    );
};

export default ChatList;

export const ItemCounter = ({number}) => (
    <div className="flex items-center gap-1 text-default-400">
        <span className="text-small">{number}</span>
    </div>
);
import {Button} from "@nextui-org/react";
import {HeartIcon} from "./icon/HeartIcon.jsx";

const Menu = ({items}) => {
    return <div className={'flex flex-col gap-3'}>
        {/*{items.map((item, index) => {*/}
        {/*    return <div className={'flex flex-col items-center'}>*/}
        {/*        <div className={'flex flex-col'}>*/}
        {/*            <HeartIcon/>*/}
        {/*            {item.title}*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*})}*/}
        <div className={'flex flex-col items-center'}>
            <div className={'flex flex-col'}>
                <Button isIconOnly color="danger" aria-label="Like">
                    <HeartIcon />
                </Button>
                love
            </div>
        </div>
        <div className={'flex flex-col items-center'}>
            <div className={'flex flex-col'}>
                <Button isIconOnly color="danger" aria-label="Like">
                    <HeartIcon />
                </Button>
                love
            </div>
        </div>
        <div className={'flex flex-col items-center'}>
            <div className={'flex flex-col'}>
                <Button isIconOnly color="danger" aria-label="Like">
                    <HeartIcon />
                </Button>
                love
            </div>
        </div>
    </div>
}

export default Menu;
import * as LocalIcons from '@/assets/index.js'

const DynamicHeroIcon = ({fill='none',width=20,height=20,...props}) => {
    const {...icons} = {...LocalIcons}
    const TheIcon = icons[props.icon]
    return (
        <>
            {/* eslint-disable-next-line react/prop-types*/}
            {props.icon && <TheIcon className={`${props.className}`} color={fill} fill={fill} width={width} height={height}/>}
        </>
    )
}

export default DynamicHeroIcon
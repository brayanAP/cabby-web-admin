import IconMenuPoints from './IconMenuPoints'

export const Icons = {
    IconMenuPoints,
}

type IconType = Record<string, () => React.ReactElement>

const IconsParse: IconType = Icons

export default IconsParse

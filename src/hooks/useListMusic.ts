import { useSelector } from 'react-redux'
import { musicSelector } from 'store/selectors/pleasures'

export default () => useSelector(musicSelector)

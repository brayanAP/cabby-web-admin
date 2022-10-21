import { useSelector } from 'react-redux'
import { currentUserSelector } from 'store/selectors/auth'

export default () => useSelector(currentUserSelector)

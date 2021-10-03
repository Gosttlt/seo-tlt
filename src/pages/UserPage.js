import Flex from 'components/shared/Flex'
import Preloader from 'components/shared/Preloader'
import User from 'components/user'
import Pagination from 'components/user/Pagination'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSetUsers } from 'store/usersReducer/actions'
import { getLoadingFlag } from 'store/usersReducer/selectors'


const UserPage = () => {
    const dispatch = useDispatch()
    const loadingFlag = useSelector(getLoadingFlag)
    useEffect(() => {
        dispatch(fetchSetUsers())
    }, [dispatch])

    if (loadingFlag) {
        return <Preloader />
    }

    return (
        <Flex wrap="wrap" justify="flex-start">
            <Pagination />
            <User />
        </Flex>
    )
}

export default UserPage

import Button from 'components/shared/Button'
import Flex from 'components/shared/Flex'
import { useDispatch, useSelector } from 'react-redux'
import { setPageNumber } from 'store/usersReducer/actions'
import { getCurrentPage, getTotalPages } from 'store/usersReducer/selectors'

const Pagination = () => {
    const dispatch = useDispatch()
    const currentPage = useSelector(getCurrentPage)
    const pages = useSelector(getTotalPages)

    const onSwitchPage = (pageNumber) => {
        dispatch(setPageNumber(pageNumber))
    }
    // в данном случае не оборачиваю pages.map в useMemo так как в Button в любом случае -
    // будет происходить ререндер, так как onSwitchPage всегда будет меняться pageNumber и соответственно созодваться новая 
    // ссылка на функцию 

    const numbersPage = pages.map(el => <Button
        onClick={() => { onSwitchPage(el) }}
        disabled={currentPage === el ? true : false}
        key={el}>{el}</Button>)

    return (
        <Flex justify="center" width="100%">
            <Button
                disabled={currentPage <= 1 ? true : false}
                onClick={() => { onSwitchPage(currentPage - 1) }}>
                prev
            </Button>
            {numbersPage}
            <Button
                disabled={currentPage >= pages.length ? true : false}
                onClick={() => { onSwitchPage(currentPage + 1) }}>
                next
            </Button>
        </Flex>
    )

}

export default Pagination

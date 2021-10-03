import Flex from 'components/shared/Flex'
import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsersPortion, getUser, getLoadingFlagModal } from 'store/usersReducer/selectors'
import Ava from './Ava'
import UserInfo from './UserInfo'
import Modal from 'components/shared/Modal'
import { useState } from 'react'
import { fetchSetUser } from 'store/usersReducer/actions'
import { useCallback } from 'react'
import Preloader from 'components/shared/Preloader'
import Button from 'components/shared/Button'



const User = () => {
    const dispatch = useDispatch()
    const [isModalOpen, setModalOpen] = useState(false)
    const { name, location, email, avatar_url } = useSelector(getUser)
    const users = useSelector(getUsersPortion)
    const isLoading = useSelector(getLoadingFlagModal)

    const fetchUser = useCallback((userName) => {
        dispatch(fetchSetUser(userName))
        setModalOpen(true)
    }, [dispatch])

    const onCloseModal = () => {
        setModalOpen(false)
    }

    const usersArr = useMemo(() => users.map(({ id, login, avatar_url }) => (
        <Flex
            onClick={() => fetchUser(login)}
            key={id}
            border="1px solid #000"
            align="center"
            margin="10px"
            padding="20px"
            bgH="#ececec"
            width="25%">
            <Ava alt="" src={avatar_url} />
            <UserInfo>
                <div>{login}</div>
            </UserInfo>
        </Flex>
    )), [users, fetchUser])

    return (
        <>
            {isModalOpen &&
                <Modal >
                    {isLoading ? <Preloader /> :
                        (<>
                            <Ava alt="" src={avatar_url} />
                            <UserInfo>
                                <div>Name: {name ? name : 'Name не указано'}</div>
                                <div>Location: {location ? location : 'не указан'}</div>
                                <div>Email: {email ? email : 'не указан'}</div>
                            </UserInfo>
                        </>)}
                    <Button onClick={onCloseModal}>Закрыть</Button>
                </Modal>}
            {usersArr}
        </>
    )
}

export default User

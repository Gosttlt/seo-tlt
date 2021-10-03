import Flex from 'components/shared/Flex'

const UserInfo = ({ children }) => {
    return (
        <Flex direction="column" align="center" width="100%">
            {children}
        </Flex>
    )
}

export default UserInfo

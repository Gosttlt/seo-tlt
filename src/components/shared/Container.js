import styled from 'styled-components'

const Container = (props) => {
    return <StyledContainer {...props} />
}

const StyledContainer = styled.div`
max-width: 1000px;
margin: 0 auto;
`

export default Container

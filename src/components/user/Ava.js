import styled from 'styled-components'

const Ava = (props) => {
    return (
        <div>
            <StyledAva {...props} />
        </div>
    )
}

const StyledAva = styled.img`
border-radius: 50%;
width: 100px;
`

export default Ava

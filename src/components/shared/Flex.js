import styled from 'styled-components'

const Flex = (props) => {
    return <StyledFlex {...props} />
}

const StyledFlex = styled.div`
display: flex;
align-items:${props => props.align || 'stretch'};
justify-content: ${props => props.justify || 'stretch'};
margin: ${props => props.margin || 0};
padding: ${props => props.padding || 0};
flex-direction: ${props => props.direction || 'row'};
background: ${props => props.background || 'none'};
border: ${props => props.border || 'none'};
width: ${props => props.width || 'auto'};
flex-wrap: ${props => props.wrap || 'nowrap'};
&:hover {
    background: ${props => props.bgH || 'none'};
    transition: .3s;
    cursor: pointer;
}
`

export default Flex

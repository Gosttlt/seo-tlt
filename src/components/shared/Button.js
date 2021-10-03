import styled, { css } from 'styled-components'

const Button = (props) => {
    return (<StyledButton {...props} />)
}

const StyledButton = styled.button`
background: #fff;
border: 1px solid #e1e1e1;
padding: 10px;
border-radius: 5px;
margin: 10px;
box-shadow: 2px 2px 5px 1px #e6e6e6;
cursor: pointer;
font-weight: 600;
color: #4f4f4f;
&: active {
    box-shadow: 2px 2px 5px 1px #fff; 
}
&: hover {
    background: #ececec;
    transition: .3s;
};
${props => props.disabled === true && css`
pointer-events: none;
color: #e1e1e1;
`} 
`

export default Button
import styled from 'styled-components'
import ReactDOM from 'react-dom'

const $modal = document.getElementById('modal')

const Modal = ({ children }) => {
    return (
        <>
            {ReactDOM.createPortal(
                <StyledModal>
                    <ContentBox>
                        {children}
                    </ContentBox>
                </StyledModal>
                , $modal)}
        </>
    )
}

const StyledModal = styled.div`
width: 100%;
margin: 0 auto;
height: 100%;
background: #0000006b;
z-index: 999;
position: absolute;
top: 0;
`
const ContentBox = styled.div`
width: 30%;
position: absolute;
padding: 30px;
display: flex;
top: 30%;
align-items: center;
left: 50%;
justify-content: space-around;
background: #fff;
border: 1px solid #5e5e5e;
-webkit-transform: translateX(-50%);
-ms-transform: translateX(-50%);
transform: translateX(-50%);
`

export default Modal

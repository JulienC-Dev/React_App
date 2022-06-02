import styled from 'styled-components'


export const Wrapper = styled.header`
  background-color: black;
  color:white;
  display: flex; 
  padding: 0 90px 0 90px;
  justify-content :space-around;
`;

export const Picture = styled.div`
  background: yellow;
  color : black;
`;

export const ContainerSearchNav = styled.div`
 display: flex; 
 height: ${({isOpen}) =>(isOpen ? "160px": "85px")};
 width: 700px;
 
`;

export const  ButtonSearchAdresse = styled.button`
height: 35px;
position: relative;
left:180px;
top:20px;
width: 400px;
`;

export const ButtonNav  = styled.button`
height: 50px;
width: 300px;
left: 40px;
position: relative;
top:85px;
&:hover {
          cursor: pointer;
          box-shadow: 2px 2px 10px #e2e3e9;
      }
`;


export const ContainerButtonsNav = styled.div`
display:flex;
width: 700px; 
  
`;
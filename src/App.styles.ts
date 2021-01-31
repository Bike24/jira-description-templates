import Styled from 'styled-components';

export const AppContainer = Styled.div`
  z-index: 3500;
  position: absolute;
  top: 40px;
  right: 10px;
  width: 300px;
`;

export const AppLoader = Styled.button`
  top: 0;
  right: 0;
  margin-right: 0;
  width: 44px;
  outline: none;
  position: absolute;
  padding: 5px;
  z-index: 3600;
  height: 36px;
  border-width: 0;
  border-radius: 0 0 3px 3px;
  box-shadow: 2px 2px 5px 1px rgba(0,0,0,0.3);
  background-color: #484B52;
  .active & {
    box-shadow: none;
  border-radius: 0 0 0 3px;
  }
  &:hover {
    background-color: #595e68;
  }
`;

export const AppBody = Styled.div`
  color: white;
  padding: 10px 10px 0;
  background-color: #282c34;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.5s 0s ease-out;
  .active & {
    display: block;
    box-shadow: 2px 2px 5px 1px rgba(0,0,0,0.3);
    opacity: 1;
    visibility: visible;
  }
}

`;

export const AppFooter = Styled.div`
  padding: 10px 0;
  font-size: 12px;
  font-style: italic;
  color: #ccc;
  background-color: #282c34;
  padding: 10px;
  > a {
    color: #a4a4fa;
  }
`;

export const Button = Styled.button<ButtonProps>`
  border-radius: 3px;
  border-width: 0;
  color: white;
  padding: 5px 20px;
  margin-right: 16px;
  background-color: ${props => props.cancel ? '#5f2424' : '#484B52' };
  color: white;
  font-weight: bold;
  height: 36px;
  box-shadow: 2px 2px 5px 1px rgba(0,0,0,0.3);
  &:hover {
    background-color: ${props => props.cancel ? '#6e2b2b' : '#595e68' };
  }
`;
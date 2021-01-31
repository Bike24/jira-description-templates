import Styled from 'styled-components';

export const Select = Styled.select`
  appearance: none;
  border: none;
  width: 100%;
  height: 36px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGP6rwYAAi0BKCmSlGkAAAAASUVORK5CYII=) repeat;
  padding-left: 10px;
  color: #fff;
  font-size: 14px;
  box-shadow: 2px 2px 5px 1px rgba(0,0,0,0.3);
  border-radius: 3px;
  outline: none;
  cursor: pointer;
`;

export const Option = Styled.option`
  color: #fff;
  background-color: #282c34;
`;

export const SelectorWrapper = Styled.div`
  width: 200px;
  position: relative;
  &::before {
    font-family: fontello;
    content: "▼";
    font-size: 16px;
    position: absolute;
    right: 10px;
    top: 6px;
    color: #fff;
  }
`;
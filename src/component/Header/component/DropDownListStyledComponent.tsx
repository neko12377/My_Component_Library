import styled from "styled-components";

export const StyledDropDownListBar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 36px;
  padding: 8px 0;
  position: relative;
`;

export const StyledDropDownBarContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 85%;
  height: 100%;
`;

export const StyledDropDownListContentBlock = styled.div`
  display: flex;
  position: absolute;
  top: 40px;
  right: -5px;
  width: 600px;
  height: 580px;
  z-index: 1000;
  border-radius: 4px;
`;

export const Shelter = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 150%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
  z-index: 999;
`;

export const DropDownListMenu = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgb(28, 28, 40);
  width: 45%;
  height: 100%;
  border-radius: 4px 0 0 4px;
`;

export const DropDownListContent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgb(30, 30, 40);
  width: 55%;
  height: 100%;
  border-radius: 0 4px 4px 0;
`;

export const ListMenuTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100px;
  padding-left: 10px; 
`;

export const ListMenuItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 70px;
  cursor: pointer;
  &:hover {
    background-color: rgb(38, 38, 40);
  }
`;

export const ListContentTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100px;
  padding-left: 5px;
`;

export const ListContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100px;
  height: 70px;
  cursor: pointer;
  padding-left: 10px;
  &:hover {
    background-color: rgb(40, 40, 50);
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  cursor: pointer;
  border-radius: 50%;
  &:hover {
    background-color: #6e6e7c;
  }
`;

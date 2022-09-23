import styled from "styled-components";


export const CenterBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #ccc;
  width: 300px;
  height: 48px;
  border-radius: 24px;
  box-sizing: border-box;
  padding: 0 8px 0 20px;
  ${prop => prop.theme.mixin.boxShadow}


  .text {
    font-size: 14px;
    color: ${prop => prop.theme.text.secondaryColor};
    font-weight: 600; 
  }

  .search {
    width: 32px;
    height: 32px;
    background-color: ${prop => prop.theme.color.primaryColor};
    border-radius: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
  }
`
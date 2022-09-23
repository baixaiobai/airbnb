import styled from "styled-components";


export const RightBox = styled.div`
  flex: 1;
  display: flex;
  justify-content: end;
  align-items: center;
  color: 14px;
  color: ${prop => prop.theme.text.primaryColor};
  font-weight: 600;
  padding-right: 20px;

  .left-box {
    display: flex;
    align-items: center;

    .item {
      padding: 10px 15px;
      border-radius: 15px;
      /* margin: 0 10px; */

      &:hover {
        cursor: pointer;
        background-color: #f5f5f5;
      }
    }
  }

  .right-box {
    display: flex;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 25px;
    padding: 4px 10px;
    margin-left: 20px;

    .item {
      margin-right: 6px;
    }
    /* 对于动画的样式，其他组件也会用到，所以抽离出来放到theme中去使用 */
    ${prop => prop.theme.mixin.boxShadow}
    
  }
`
import styled from "styled-components";

// 使用theme中样式的方式
export const LeftBox = styled.div`
  flex: 1;
  color: ${prop => prop.theme.color.primaryColor};
  padding-left: 20px;
`
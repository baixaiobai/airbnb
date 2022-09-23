import styled from "styled-components";



export const FilterWrapper = styled.div`
  display: flex;
  margin-left: 20px;
  align-items: center;
  height: 48px;
  border-bottom: 1px solid #f2f2f2;
  border-top: 1px solid #f2f2f2;
  background-color: #fff;
  font-size: 14px;

  .item {
    margin: 0 13px 0 0;
    padding: 6px 12px;
    border: 1px solid #dce0e0;
    border-radius: 4px;
    color: #484848;
    cursor: pointer
  }
  .active {
    color: #fff;
    background-color: ${props => props.theme.color.secondaryColor};
  }
`
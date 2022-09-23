import styled from "styled-components";



export const MoreWrapper = styled.div`
  margin: 30px 0;

  .item {
    cursor: pointer;
    font-size: 17px;
    font-weight: 700;
    &:hover {
      text-decoration: underline;
    }
  }
  .active {
    color: ${(props) => props.theme.color.secondaryColor};
  }
  .more {
    color: black
  }


`
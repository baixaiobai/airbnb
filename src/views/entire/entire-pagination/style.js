import styled from "styled-components";


// 通过flex修改方向来实现居中显示
export const PagWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;


  .text {
    font-size: 14px;
    color: #222222;
    margin-top: 10px;
  }

  .MuiPaginationItem-page {
      margin: 0 9px;

      &:hover {
        text-decoration: underline;
      }
    }


  .MuiPaginationItem-page.Mui-selected {
    background-color: #222;
    color: #fff;

    &:hover {
      background-color: #222;
    }
  }
`
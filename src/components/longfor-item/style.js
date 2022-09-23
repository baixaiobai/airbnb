import styled from "styled-components";



export const LongWrapper = styled.div`
  width: 20%;
  flex-shrink: 0;
  position: relative;
  border-radius: 6px;
  overflow: hidden;
  margin-right: 6px;

  .img-box {
    img {
      width: 100%;
    }
  }

  .text {
    position: absolute;
    bottom: 15%;
    color: #fff;
    text-align: center;
    width: 100%;
    .top {
      font-size: 18px;
      font-weight: 700;
      margin-bottom: 5px;
    }
  }
`
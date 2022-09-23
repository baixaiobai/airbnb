import styled from "styled-components";

// 注意这里的图片的引入方式，这是由于webpack造成的
export const BannerBox = styled.div`
  width: 100%;
  height: 529px;
  background: url(${require("@/assets/img/cover_01.jpeg")}) center/cover;
`


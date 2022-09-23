import styled from "styled-components";



export const ItemWrapper = styled.div`
  width: ${props => props.width};
  padding: 20px 0 0 15px;
  box-sizing: border-box;
  flex-shrink: 0;

  .item-box {
      /* 这里的样式比较不好想 */
    .item-img {
      position: relative;
      box-sizing: border-box;
      padding: 66% 0 0 0;
      
      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .slider {
      position: relative;
      cursor: pointer;

      &:hover {
        .mask-box {
          display: flex;
        }
      }


      .mask-box {
        position: absolute;
        z-index: 1;
        left: 0;
        right: 0;
        top: 0;
        display: none;
        justify-content: space-between;
        bottom: 0;
        color: #fff;

        .btn {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 83px;
          height: 100%;
          background: linear-gradient(to left, transparent 0%, rgba(0, 0, 0, 0.25) 100%);

          &.right {
            background: linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.25) 100%);
          }
        }
      }

      .indicator {
        position: absolute;
        z-index: 9;
        bottom: 10px;
        left: 0;
        right: 0;
        width: 30%;
        margin: 0 auto;


        .indicItem {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 14.29%;

          .dot {
            width: 6px;
            height: 6px;
            background-color: #fff;
            border-radius: 50%;

            &.active {
              width: 8px;
              height: 8px;
            }
          }
        }
      }
    }


    
    
    .top {
      font-size: 12px;
      color: #767676;
      font-weight: 700;
      margin: 6px 0;
    }
    .text {
      color: ${props => props.theme.text.primaryColor};
      font-weight: 700;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .price {
      color: ${props => props.theme.text.primaryColor};
      font-size: 14px;
      margin: 6px 0;
      }
    .bottom {
      display: flex;
      align-items: center;
      .count {
        font-size: 12px;
        color: ${props => props.theme.text.primaryColor};
        font-weight: 700;
      }
    }
  }
`
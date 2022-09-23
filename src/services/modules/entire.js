import XRequest from "..";


export function getEntireRoomList(offset=0, size=20) {
  return XRequest.get({
    url: "entire/list",
    params: {
      offset,
      size
    }
  })
}
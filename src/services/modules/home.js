import XRequist from ".."

export function getHomeGoodPriceData() {
  return XRequist.get({
    url: "/home/goodprice"
  })
}

export function getHomeHighScoreData() {
  return XRequist.get({
    url: "/home/highscore"
  })
}

export function getHomeDiscountData() {
  return XRequist.get({
    url: "/home/discount"
  })
}

export function getHomeHotRecommendData() {
  return XRequist.get({
    url: "/home/hotrecommenddest"
  })
}

export function getHomeLongforData() {
  return XRequist.get({
    url: "/home/longfor"
  })
}


export function getHomePlusData() {
  return XRequist.get({
    url: "/home/plus"
  })
}


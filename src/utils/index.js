// 个位数字补“0”
function formatNumber (n) {
  const str = n.toString()
  return str[1] ? str : `0${str}`
}

// 格式化时间
export function formatTime (date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  const t1 = [year, month, day].map(formatNumber).join('/')
  const t2 = [hour, minute, second].map(formatNumber).join(':')

  return `${t1} ${t2}`
}

function getAuthorize () {
  return new Promise((resolve, reject) => {
    wx.getSetting({
      success: resolve,
      fail: reject
    })
  })
}

async function getCameraAuthorize () {
  const res = await getAuthorize()
  return !!res.authSetting['scope.camera']
}

export async function setCameraAuthorize () {
  const hasCameraAuthorize = await getCameraAuthorize()
  if (!hasCameraAuthorize) {
    return new Promise((resolve, reject) => {
      wx.authorize({
        scope: 'scope.camera',
        success: resolve,
        fail: reject
      })
    })
  }
}

export default {
  formatNumber,
  formatTime
}

const axios = require('axios')
const { DINGDING_WEBHOOK } = require('../ENV.js')
const SUCCESS_CODE = 0

const dingding = async ({ title = '', content = '' } = {}) => {
   console.log('钉钉数据', title, JSON.stringify(content));
  try {
    await axios
      .post(DINGDING_WEBHOOK, {
        msgtype: 'markdown',
        markdown: {
          title,
          text: content || '#### 杭州天气 @150XXXXXXXX \n',
        },
      })
      .then(response => {
        if (response?.data?.errcode !== SUCCESS_CODE) {
          throw new Error(response?.data?.errmsg)
        }
      })
  } catch (error) {
    console.log(error.stack)
  }
}

module.exports = dingding

const fs = require('fs');
const path = `${__dirname}/files`

const jsonHandler = {

  // 파일 불러오기
  read: function (filePath, callBack) {

    console.log('reading file...')
    fs.readFile(filePath, (err, fileData) => {
      if (err) {
        return callBack && callBack(err)
      }
      try {
        const object = JSON.parse(fileData);
        return callBack && callBack(null, object);
      } catch (err) {
        return callBack && callBack(err);
      }
    })
  },

  // 내용 업데이트
  update: function (filePath, content) {
    fs.writeFile(filePath, content, err => { if (err) console.log(err) })
  },




}


module.exports = jsonHandler
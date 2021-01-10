const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');

const jsonHandler = require('./helper/jsonHandler.js');
const objectHandler = require('./helper/objectHandler.js');
const path = `${__dirname}/files`

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors(
  {
    "origin": "http://localhost:3000",
  }
))


app.get('/list', (req, res) => {
  fs.readdir(path, (err, files) => {
    if (err) {
      return console.log('err: ', err);
    }
    console.log('files is', files)
    res.json({
      fileList: files.map(file => {
        const { size, mtime } = fs.statSync(`${path}/${file}`)
        return { name: file, size: `${size} Bytes`, lastModifiedAt: mtime }
      })
    })
  })

})

app.get('/file/:fileName', (req, res) => {
  console.log('req parms is', req.params)
  const filePath = `${path}/${req.params.fileName}`
  jsonHandler.read(filePath, (err, contents) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(contents);
    res.json({ curFileData: objectHandler.flatten(contents) });
    // res.json({ curFileData: contents });
  })
})

app.put('/file/:fileName', (req, res) => {
  // console.log(req.body)
  // console.log(req.url)
  // console.log(req.params)
  const filePath = `${path}/${req.params.fileName}`
  const convertedContent = objectHandler.unFlatten(req.body.content)
  jsonHandler.update(filePath, JSON.stringify(convertedContent))
  res.send(convertedContent)
})


app.listen(8080, () => console.log('servier is running on 8080 port'))
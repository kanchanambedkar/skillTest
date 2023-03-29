const express = require('express')
const app = express()
const port = 3000
let fs = require('fs')

app.get('/',(req,res)=>{
  res.send(`app listening on port ${port}`)
})

app.get('/get-json', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin','*');
  if (fs.existsSync('file.json')) 
  {
    let rawdata = fs.readFileSync('file.json');
    let jsonData = JSON.parse(rawdata);
    console.log(jsonData);

    if(jsonData)
    {
      return res.json({
        data:jsonData,
        message:'read json successfully.'
      }).status(200)
    }else{
      return res.json({
        message:'read json failed.'
      }).status(400)
    }
    
  }else{
    return res.json({
      message:'file not found.'
    }).status(404)
  }
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
const http = require('http')
const fs = require('fs')
const qs = require('querystring')
const PORT = 8000

const server = http.createServer((req, res)=>{
    let dataFile
    let html
    fs.readFile('./src/data.json','utf-8',(err,str)=>{
        if(err) console.log(err.message)
        dataFile = JSON.parse(str)
        dataFile.forEach(ele=>{
            html += '<tr>';
            html += `<td>${ele.id}</td>`
            html += `<td>${ele.name}</td>`
            html += `<td>${ele.price}</td>`
            html += '</tr>';
        })
    })
    fs.readFile('./views/display.html','utf-8',(err,str)=>{
        res.writeHead(200)
        str = str.replace('{list-shit}',html)
        res.write(str)
        res.end()
    })
})
server.listen(PORT,()=>{
    console.log('sex')
})
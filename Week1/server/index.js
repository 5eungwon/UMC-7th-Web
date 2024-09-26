const express = require('express');
const mysql = require('mysql');
const path = require('path');
const static = require('serve-static');

const dbconfig = require('../config/dbconfig.json')
const app = express();

app.use(express.json())     //json데이타로 받아오고 파싱까지 다해주는 기능 필수로알아야함!
app.use(express.urlencoded({extended:true}))      //json데이타로 받아오고 파싱까지 다해주는 기능 필수로알아야함!
app.use('/pages',static(path.join(__dirname,'../pages')))    

app.listen(3000,()=>{
    console.log("server start")
})

const pool = mysql.createPool({
    connectionLimit:10,
    host : dbconfig.host,
    password : dbconfig.password,
    database : dbconfig.database,
    debug : false,
    user : dbconfig.user

})

app.get('/',(req,res)=>{
    console.log("메인화면호출");
    res.sendFile(path.join(__dirname,'../pages/main.html'))
    
})

app.post('/data',(req,res)=>{
    console.log("data서버 호출");

    const paramId = req.body.id;
    const paramName = req.body.name;
    const paramAge = req.body.age;
    const paramPassword = req.body.password;
    console.log(req.body.name);


    pool.getConnection((err,conn)=>{
        if (err) {
            console.error('DB 접속 실패:', err); // 오류 메시지 출력
            res.writeHead(500, { 'Content-Type': 'text/html; charset=utf8' });
            res.write('<h2>DB 접속 실패<h2>');
            res.end();
            return; // 이후 코드 실행을 중단
        }
        console.log("db접속 성공");
        conn.query('insert into users (id, name, age, password) values(?,?,?,?)',
                    [paramId,paramName,paramAge,paramPassword],
                    (err,result)=>{
                        conn.release();
                        console.log("'실행된 SQL: "+ exec.sql)
                        if(err){
                            console.log("SQL실행시 오류 발생")
                            console.dir(err);
                            return;
                        }
                        if(result){
                            console.dir(result)
                            console.log('Inserted 성공')

                            res.writeHead('200',{'Content-Type':'text/html; charset=utf8'})
                            res.write('<h2>사용자 추가성공<h2>');
                            res.end();
                        }
                        else{
                            console.log('Inserted 실패')

                            res.writeHead('200',{'Content-Type':'text/html; charset=utf8'})
                            res.write('<h2>사용자 추가실패<h2>');
                            res.end();
                        }

                    }
        )
    
    })

})







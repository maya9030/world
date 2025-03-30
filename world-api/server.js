require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

db.connect((err)　=>{
    if(err){
        console.error('データベース接続失敗:', err);
        return;
    }
    console.log('MySQL接続成功');
});

const queries = require('./countryQueries');

//大陸一覧を取得するAPI
app.get('/continents',(req,res)=>{
    const sql = queries.getContinents();
    db.query(sql, (err, results)=>{
        if(err){
            console.log("DBクエリエラー：", err);
            res.status(500).json({error: err.message });
        }else{
            res.json(results);
        }
    });
});

//国一覧を取得するAPI
app.get('/continents/:id',(req,res)=>{
    const id = req.params.id;
    const sql = queries.getCountries(id);
    db.query(sql, (err, results)=>{
        if(err){
            console.log("DBクエリエラー：", err);
            res.status(500).json({error: err.message });
        }else{
            res.json(results);
        }
    });
});

//国の詳細を取得するAPI
app.get(`/continents/:id/:code`,(req,res)=>{
    const id = req.params.id;
    const code = req.params.code;
    const sql = queries.getDetail();
    db.query(sql, [id, code], (err, results)=>{
        if(err){
            console.log("DBクエリエラー：", err);
            res.status(500).json({error: err.message });
        }else{
            res.json(results);
        }
    });

});

//サーバーを起動
app.listen(PORT, () =>{
    console.log(`サーバー起動中: http://localhost:${PORT}`);
});
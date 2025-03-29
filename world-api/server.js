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
//国一覧を取得するAPI
app.get('/countries',(req,res)=>{
    const limit = 100;
    const sql = queries.getCountries(limit);
    db.query(sql, (err, results)=>{
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
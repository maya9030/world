## 起動方法（ローカル開発）
 
 ### 前提環境
 - Node.js
 - npm
 - MySQL
 
 ---
 
 ### データベース（MySQL）
 
 - `database/world.sql` を使用
 - 以下のコマンドでインポートできます：
 
 ```bash
 mysql -u root -p < database/world.sql
 ```
 ---
 
 ### プロジェクトルートで実行
 ```bash
 npm install
 npm install --prefix frontend
 npm install --prefix world-api
 ```
 ---
 
 ### ▶ アプリ起動（React + Express 同時起動）
 
 ```bash
 npm start
 ```
  ---
 ```md
フロントエンド（React）: http://localhost:3002
バックエンド（Express API）: http://localhost:3001

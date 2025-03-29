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
 ```md
フロントエンド（React）: http://localhost:3002
バックエンド（Express API）: http://localhost:3001
 ```
 ---

## アプリ概要

このアプリは、MySQLの "world" データベースを使い、  
世界中の国の情報（国名・人口など）を取得・表示するReact + Express構成のデモアプリです。

- フロントエンド：React（国一覧をカード形式で表示）
- バックエンド：Node.js + Express（API提供）
- データベース：MySQL + worldサンプルデータ（world.sql）

---

## ディレクトリ構成

├── frontend/        # Reactアプリ（http://localhost:3002）
├── world-api/       # Express + MySQL APIサーバー（http://localhost:3001）
├── database/        # world.sql（MySQL用の初期データ）
├── package.json     # 一括起動用スクリプトあり
└── README.md

---

## 使用技術スタック

- React（Hooks / fetch API）
- Express.js（REST API）
- MySQL（worldデータベース）
- concurrently / nodemon

---

## 今後の拡張予定

- 国情報の検索機能
- 並び替え（人口順など）
- 言語フィルター表示
- 詳細ページの追加（国別詳細）

---
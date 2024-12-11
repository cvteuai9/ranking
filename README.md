# MongoDB練習：分數排行榜
## 目標：
- 學習MongoDB安裝與操作
## 技術：
- javascript
- Node.js(Express.js)
- MongoDB
- Mongoose
- postman
## 協助工具：
- ChatGPT
- Claude
- https://www.runoob.com/mongodb/mongodb-window-install.html
- https://pjchender.dev/database/mongo-install/
## 測試流程：
- 開啟命令提示字元，輸入mongod，啟動MongoDB
- 開啟VScode，運行專案 `node ranking.js`
- 開啟Postman，新增一個POST方法和GET方法
- 先在POST方法下，透過`http://localhost:3000/addScore`這支API新增資訊，文件格式如下圖
![image](https://github.com/user-attachments/assets/71cf879c-2fdf-4c2d-8bbc-914d9a07b385)
- 再使用GET方法，透過`http://localhost:3000/ranking`這支API查看現有資訊，成功的話會看到類似以下畫面
![image](https://github.com/user-attachments/assets/dc6d0d62-4012-408a-99a2-dd73b026546f)

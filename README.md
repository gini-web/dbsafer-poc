# DBSAFER POC 標準作業流程互動式資訊圖表

本專案提供一份基於 HTML、Tailwind CSS 與 Chart.js 的互動式 POC 流程資訊圖表，支援靜態託管平台（如 GitHub Pages、Netlify）一鍵部署。

## 📂 專案結構
```
dbsafer-poc/
├── index.html    # 主頁面
├── style.css     # 自訂樣式
├── script.js     # 行為邏輯
└── README.md     # 使用說明
```

## 🚀 部署步驟

### GitHub Pages
1. 建立 Repository 並推送至 `main` 分支
2. 設定 Pages 分支為 `main`、資料夾為 `/root`
3. 等待 1-2 分鐘即可訪問 `https://<你的帳號>.github.io/dbsafer-poc/`

### Netlify / Vercel
1. 使用 GitHub 帳號匯入專案
2. 自動部署並獲取二級域名

## 📝 自訂
- 修改 `index.html` 內容、`style.css` 樣式、`script.js` 圖表資料

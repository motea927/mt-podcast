# :art: mt-podcast

Demo：https://mt-podcast.herokuapp.com/

基於 **Vue 3** 所製作，根據所提供的 RSS Feed 建構之 Podcast 播放器。

## :page_facing_up: 技術

【前端】

- **Vue 3**：前端 MVVM 框架，搭配 Composition API 進行開發
- **Vue Router**：路由管理
- **Vuex**: 應用狀態管理
- **Vite**：新一代 Vue build tool & dev server
- **Tailwind CSS**：新一代工具類 CSS 框架

## :pencil2: 目錄結構

```
.
├── README.md // 說明文件
├── index.html // static index html
├── jsconfig.json // for vscode
├── package-lock.json
├── package.json // 專案資訊、依賴模組等
├── postcss.config.js // For TailwindCSS
├── public
│   └── favicon.ico
├── src
│   ├── App.vue // VUE 視圖進入點，主要爲 router-view 及 player
│   ├── assets // 靜態資源，如 css 等
│   │   └── css
│   │       └── tailwind.css
│   ├── components
│   │   ├── EpisodeDetail // 爲 EpisodeDetail 頁面內所需元件，Skeleton 爲載入動畫（骨架屏效果）
│   │   │   ├── Description.vue // EpisodeDetail 頁面上半部元件，包含標題、作者、播放鈕等
│   │   │   ├── DescriptionSkeleton.vue
│   │   │   ├── Overview.vue // EpisodeDetail 頁面下半部元件，主要爲本集概述
│   │   │   └── OverviewSkeleton.vue
│   │   ├── Home // 爲首頁內所需元件，Skeleton 爲載入動畫（骨架屏效果）
│   │   │   ├── Episode.vue 每一 Episode 元件，包含標題、概述、Podcast 長度等
│   │   │   ├── EpisodeSkeleton.vue
│   │   │   ├── Feed.vue 爲 Feed 資訊
│   │   │   └── FeedSkeleton.vue
│   │   └── common
│   │       └── ThePlayer // 播放器相關
│   │           ├── ThePlayer.vue // 播放器元件，於 App.vue 引入
│   │           ├── ThePlayerControlBar.vue // 播放器下方按鈕部分，如音量、快進、倒退、播放、倍速調整等
│   │           └── ThePlayerSeekBar.vue // 進度條控制及播放時間資訊
│   ├── composable
│   │   ├── api
│   │   │   ├── axios.js // Axios 實例，已代入 baseURL ，所有 API 從此引入
│   │   │   ├── useEpisode.js // 主要爲載入所有 Episode 用
│   │   │   └── useEpisodeDetail.js // 主要爲獲取單一 Episode用，需代入 guid
│   │   └── utils
│   │       └── useTimeText.js // Second 時間 (number) 轉文字換工具 ex: 72轉 01:12 或 1分12秒
│   ├── main.js // 程式進入點，引入 Vue-router 、 Vuex 、 TailwindCSS
│   ├── router
│   │   └── index.js // Vue-router
│   ├── store
│   │   └── index.js // Vuex
│   └── views
│       ├── EpisodeDetail.vue // EpisodeDetail頁面，點擊任一 Episode 進入
│       └── Home.vue // 首頁，顯示 Feed 資訊及各 Episode 概述
├── static.json // deploy 用，用於 Heroku
├── tailwind-default.config.js // 無實際用途，主要爲設定 TailwindCSS 時可參考
├── tailwind.config.js // 可自定義 TailwindCSS 變數，可參考上方檔案
└── vite.config.js // Vite 設定檔， 可設定 alias 及 dev server 等
```

## :coffee: 本地開發步驟

### 概述

主要在 develop branch 開發，完成功能後併入 Main 並推上線，Main Branch 搭配 Heroku Automatic deploys 使用。

### 開發指令

```bash
# 安裝模組
$ npm install
```

```bash
# 本地載入伺服
$ npm run dev
```

```bash
# Build
$ npm run build
```

## Reference

- Vue 3: https://v3.vuejs.org/
- Vite: https://vitejs.dev/
- TailwindCSS: https://tailwindcss.com/
- MDN HTML5 Audio: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio
- W3Schools HTML5 Audio: https://www.w3schools.com/jsref/dom_obj_audio.asp
- RSS2JSON: https://rss2json.com/

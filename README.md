# 邓希杰的个人网站 — 完整备份

在线网站：https://deng-xijie-personal-1109.ripejade2.chatgpt.site

## 文件结构

- 根目录 `index.html`、`style.css`、`galaxy.js`、`moments/` 等：可直接部署的当前网站。
- `website/`：完整项目源码，包括 HTML、CSS、JavaScript、构建脚本、配置和原有框架文件。
- `website/public/`：网站使用的照片、视频封面与 34 秒自我介绍视频。

## 修改及恢复

当前网页以 `website/site.html` 为内容源，样式在 `website/app/globals.css`，交互在 `website/public/galaxy.js`。

安装 Node.js 后，在 `website` 目录运行：

```sh
node scripts/make-static.cjs
```

生成的 `website/dist/` 包含完整静态网站，可交给静态托管服务。当前静态构建不需要安装项目依赖。根目录是这次备份时生成的发布文件副本。

## 素材范围

已保存：个人介绍视频、肖像和视频封面、五张跑步照片、两张书法视频封面。
两段书法练习视频原文件仍托管在飞书；仓库保存对应链接和封面，没有声称已备份视频原文件。飞书链接可能需要登录。

不包含依赖安装目录、本机缓存、登录凭据或 SSH 私钥。Git 提交保存每次备份版本；建议同时保留独立的本地备份包。

备份更新日期：2026-11-10。


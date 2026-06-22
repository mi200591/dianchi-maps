# GeoScene Online 嵌入指南

## 站点地址
主页：https://mi200591.github.io/dianchi-maps/

## 12张地图嵌入URL

在 GeoScene Online 地图故事（Story Maps）编辑器中，使用「嵌入（Embed）」组件，逐个添加以下URL：

| 序号 | 章节 | 地图名称 | 嵌入URL |
|------|------|----------|---------|
| 🏠 | — | 导航主页 | `https://mi200591.github.io/dianchi-maps/` |
| ① | 第1章 历史 | 古代滇池范围复原 | `https://mi200591.github.io/dianchi-maps/ch1-history/map01-ancient-lake.html` |
| ② | 第1章 历史 | 明清围湖造田示意 | `https://mi200591.github.io/dianchi-maps/ch1-history/map02-ming-qing.html` |
| ③ | 第1章 历史 | 古今影像对比 | `https://mi200591.github.io/dianchi-maps/ch1-history/map03-image-comparison.html` |
| ④ | 第2章 现代 | 岸线变迁动态 | `https://mi200591.github.io/dianchi-maps/ch2-modern/map04-shoreline-animation.html` |
| ⑤ | 第2章 现代 | 水质热力图+统计 | `https://mi200591.github.io/dianchi-maps/ch2-modern/map05-water-quality.html` |
| ⑥ | 第2章 现代 | 城市扩张耦合 | `https://mi200591.github.io/dianchi-maps/ch2-modern/map06-urban-expansion.html` |
| ⑦ | 第3章 修复 | 退塘还湖政策 | `https://mi200591.github.io/dianchi-maps/ch3-restoration/map07-pond-to-lake.html` |
| ⑧ | 第3章 修复 | 湖滨带恢复滑块 | `https://mi200591.github.io/dianchi-maps/ch3-restoration/map08-shoreline-recovery.html` |
| ⑨ | 第3章 修复 | 湿地与生物多样性 | `https://mi200591.github.io/dianchi-maps/ch3-restoration/map09-wetlands.html` |
| ⑩ | 第4章 规划 | 生态红线规划 | `https://mi200591.github.io/dianchi-maps/ch4-planning/map10-ecological-redline.html` |
| ⑪ | 第4章 规划 | 2030未来情景 | `https://mi200591.github.io/dianchi-maps/ch4-planning/map11-future-2030.html` |
| ⑫ | 第4章 规划 | 公众参与互动 | `https://mi200591.github.io/dianchi-maps/ch4-planning/map12-public-participation.html` |

## 嵌入参数设置

```
组件类型：嵌入（Embed）
URL：     （上表中的链接）
宽度：    100%
高度：    650px
全屏按钮：建议开启
```

## 操作步骤

1. 登录 [GeoScene Online](https://www.geosceneonline.cn)
2. 进入「地图故事」（Story Maps）→ 创建新故事或编辑现有故事
3. 添加内容块 → 选择「嵌入（Embed）」组件
4. 粘贴对应地图的完整URL
5. 设置嵌入参数（宽100%，高650px）
6. 重复步骤3-5，为每张地图创建独立的内容块
7. 预览并发布

## 技术说明

- 地图基于 Leaflet.js 1.9.4 + ECharts 5.x 构建
- 纯静态HTML，无需后端服务器
- 已启用 HTTPS（GitHub Pages 自动提供）
- 首次加载可能需要3-5秒（CDN资源）

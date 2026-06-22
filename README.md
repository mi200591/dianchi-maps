# 🌊 滇池交互式地图集

**Dianchi Lake Interactive Web Atlas**

云南师范大学 · 地理学部 · 自然地理与资源环境

---

## 📋 项目简介

本地图集包含 **4个章节、12张交互式Web地图**，全面展示滇池从古代到2030年的历史变迁、现代变化、治理恢复和规划未来。

## 🗺 地图清单

### 第一章：历史变迁 📜
| 序号 | 地图名称 | 核心交互 |
|------|---------|---------|
| ① | 古代滇池范围复原 | 弹出信息窗口 |
| ② | 明清围湖造田示意 | 弹出信息窗口 |
| ③ | 1950s VS 1980s 影像对比 | 卷帘滑动 |

### 第二章：现代变化 🏭
| 序号 | 地图名称 | 核心交互 |
|------|---------|---------|
| ④ | 1950-2000年岸线变迁动态 | 时间轴播放 |
| ⑤ | 水质热力图+统计图表 | 悬浮显示数值 |
| ⑥ | 城市扩张与岸线退缩耦合 | 图层显隐切换 |

### 第三章：治理恢复 🌿
| 序号 | 地图名称 | 核心交互 |
|------|---------|---------|
| ⑦ | 退塘还湖政策实施区域 | 分区点击查询 |
| ⑧ | 2000-2023年岸线恢复滑块 | 时间滑块 |
| ⑨ | 湿地与生物多样性点位 | 点位详情卡片 |

### 第四章：规划与未来 🔮
| 序号 | 地图名称 | 核心交互 |
|------|---------|---------|
| ⑩ | 生态红线规划 | 分区查询管控要求 |
| ⑪ | 2030未来情景模拟 | 现状/模拟图层切换 |
| ⑫ | 公众参与互动地图 | 弹窗查询+问卷链接 |

## 🚀 使用方式

### 直接打开（推荐）
1. 双击 `index.html` 在浏览器中打开
2. 点击任意地图卡片进入
3. 所有地图均可在无网络环境下查看（需预先缓存CDN资源）

### 本地服务器（可选）
```bash
cd dianchi-maps
npx serve .
# 或
python -m http.server 8000
```

## 📦 技术栈

- **地图引擎**：[Leaflet.js](https://leafletjs.com/) 1.9.4 — 轻量级开源地图库
- **图表**：[ECharts](https://echarts.apache.org/) 5.x — 百度开源数据可视化库
- **热力图**：[leaflet.heat](https://github.com/Leaflet/Leaflet.heat) — Leaflet热力图层插件
- **底图**：OpenStreetMap + Esri卫星影像

## ⚠️ 数据说明

- **模拟数据**：本地图集中的地理数据（GeoJSON多边形、监测站点等）为基于滇池真实经纬度范围构建的**教学演示数据**
- **面积数据**：历史时期面积数据参考已发表文献，为近似值
- **监测数据**：水质监测站点数据为模拟值，不代表真实监测结果
- **政策信息**：管控要求和法律条文引用自公开法规，可能有简化
- **生产使用**：如需真实数据进行科研或规划，请使用ArcGIS从权威数据源制作GeoJSON

## 📁 项目结构

```
dianchi-maps/
├── index.html                    # 导航主页
├── README.md                     # 本文件
├── assets/
│   ├── css/
│   │   ├── main.css              # 全局样式
│   │   └── map-base.css          # 地图基础样式
│   └── js/
│       ├── config.js             # 全局配置
│       └── utils.js              # 工具函数
├── ch1-history/                  # 第一章：历史变迁
│   ├── map01-ancient-lake.html
│   ├── map02-ming-qing.html
│   └── map03-image-comparison.html
├── ch2-modern/                   # 第二章：现代变化
│   ├── map04-shoreline-animation.html
│   ├── map05-water-quality.html
│   └── map06-urban-expansion.html
├── ch3-restoration/              # 第三章：治理恢复
│   ├── map07-pond-to-lake.html
│   ├── map08-shoreline-recovery.html
│   └── map09-wetlands.html
└── ch4-planning/                 # 第四章：规划与未来
    ├── map10-ecological-redline.html
    ├── map11-future-2030.html
    └── map12-public-participation.html
```

## 🔧 离线部署

如需在无网络环境使用，请下载以下文件至本地：
1. `https://unpkg.com/leaflet@1.9.4/dist/leaflet.js`
2. `https://unpkg.com/leaflet@1.9.4/dist/leaflet.css`
3. `https://unpkg.com/leaflet.heat@0.2.0/dist/leaflet-heat.js`
4. `https://cdn.jsdelivr.net/npm/echarts@5.5.0/dist/echarts.min.js`

将HTML中的CDN引用改为本地路径即可。

## 📚 主要参考文献

- 《云南省滇池保护条例》（2023年修订）
- 《滇池流域水环境保护治理"十四五"规划》
- 《昆明市国土空间总体规划（2021-2035年）》
- 方国瑜《云南史料目录概说》
- 昆明市滇池管理局公开数据

## 📧 联系方式

云南师范大学地理学部
自然地理与资源环境专业

---

© 2024 滇池交互式地图集 | 教学演示项目

/**
 * 滇池交互式地图集 — 全局配置
 * 所有地图页面共享的配置参数
 */

const MAP_CONFIG = {
  // 地图中心（滇池中心）
  center: [24.85, 102.70],
  // 默认缩放级别
  zoom: 11,
  // 最小/最大缩放
  minZoom: 9,
  maxZoom: 18,
  // 地图边界限制（昆明-滇池区域）
  maxBounds: [[24.2, 102.3], [25.5, 103.3]],
  // 底图URL（使用国内可访问的瓦片源）
  tileLayers: {
    street: {
      name: '街道地图',
      url: 'https://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}',
      attribution: '&copy; <a href="https://www.amap.com/">高德地图</a>'
    },
    satellite: {
      name: '卫星影像',
      url: 'https://webst0{s}.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}',
      attribution: '&copy; <a href="https://www.amap.com/">高德地图</a>'
    }
  }
};

// 配色方案
const COLORS = {
  // 历史时期颜色
  han: '#c0392b',      // 汉代-深红
  tang: '#e67e22',     // 唐代-橙色
  ming: '#f39c12',     // 明代-金黄
  qing: '#27ae60',     // 清代-绿色
  modern: '#2980b9',   // 现代-蓝色
  future: '#8e44ad',   // 未来-紫色

  // 生态红线
  redline1: '#c0392b', // 一级管控-深红
  redline2: '#e74c3c', // 二级管控-中红
  redline3: '#f5b7b1', // 一般生态空间-浅红

  // 水质
  waterClean: '#2ecc71',
  waterModerate: '#f39c12',
  waterPolluted: '#e74c3c',

  // 城市
  urban1950: '#f1c40f',
  urban1980: '#e67e22',
  urban2000: '#e74c3c',
  urban2020: '#8e44ad',

  // 恢复阶段
  phase1: '#3498db',
  phase2: '#2ecc71',
  phase3: '#27ae60',

  // 底图切换默认
  lakeBlue: '#1a5276',
  lakeFill: 'rgba(41, 128, 185, 0.3)',
  lakeStroke: '#2980b9'
};

// 历史时期定义
const PERIODS = {
  han:  { name: '汉代', year: '约公元前202-公元220年', area: 510, desc: '汉代滇池面积约510 km²，为历史最大范围，北至松华坝、南至晋城、西至西山、东至呈贡。' },
  tang: { name: '唐代', year: '约公元618-907年', area: 450, desc: '唐代滇池面积约450 km²，南诏国时期已有初步的水利开发，盘龙江三角洲开始形成。' },
  ming: { name: '明代', year: '约公元1368-1644年', area: 380, desc: '明代滇池面积约380 km²，大量移民屯田，海口河疏浚工程加快湖水下泄，湖泊开始显著萎缩。' },
  qing: { name: '清代', year: '约公元1644-1912年', area: 340, desc: '清代滇池面积约340 km²，"围湖造田"大规模展开，东岸和北岸大量水域被围垦为农田。' }
};

// 地图导航路径（用于每张地图页面的上一张/下一张链接）
const MAP_NAV = [
  { id: '01', ch: '1', name: '古代滇池范围复原', file: 'map01-ancient-lake.html', dir: 'ch1-history' },
  { id: '02', ch: '1', name: '明清围湖造田示意', file: 'map02-ming-qing.html', dir: 'ch1-history' },
  { id: '03', ch: '1', name: '1950s VS 1980s 影像对比', file: 'map03-image-comparison.html', dir: 'ch1-history' },
  { id: '04', ch: '2', name: '1950-2000年岸线变迁动态', file: 'map04-shoreline-animation.html', dir: 'ch2-modern' },
  { id: '05', ch: '2', name: '水质热力图+统计图表', file: 'map05-water-quality.html', dir: 'ch2-modern' },
  { id: '06', ch: '2', name: '城市扩张与岸线退缩耦合', file: 'map06-urban-expansion.html', dir: 'ch2-modern' },
  { id: '07', ch: '3', name: '退塘还湖政策实施区域', file: 'map07-pond-to-lake.html', dir: 'ch3-restoration' },
  { id: '08', ch: '3', name: '2000-2023年岸线恢复滑块', file: 'map08-shoreline-recovery.html', dir: 'ch3-restoration' },
  { id: '09', ch: '3', name: '湿地与生物多样性点位', file: 'map09-wetlands.html', dir: 'ch3-restoration' },
  { id: '10', ch: '4', name: '生态红线规划', file: 'map10-ecological-redline.html', dir: 'ch4-planning' },
  { id: '11', ch: '4', name: '2030未来情景模拟', file: 'map11-future-2030.html', dir: 'ch4-planning' },
  { id: '12', ch: '4', name: '公众参与互动地图', file: 'map12-public-participation.html', dir: 'ch4-planning' }
];

// 章节信息
const CHAPTERS = [
  { id: '1', name: '第一章：历史变迁', icon: '📜', color: '#c0392b' },
  { id: '2', name: '第二章：现代变化', icon: '🏭', color: '#2980b9' },
  { id: '3', name: '第三章：治理恢复', icon: '🌿', color: '#27ae60' },
  { id: '4', name: '第四章：规划与未来', icon: '🔮', color: '#8e44ad' }
];

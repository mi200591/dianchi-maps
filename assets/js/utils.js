/**
 * 滇池交互式地图集 — 工具函数
 * 所有地图页面共享的辅助函数
 */

/**
 * 创建标准弹窗HTML内容
 * @param {Object} props - 要素属性对象
 * @returns {string} HTML字符串
 */
function createPopupContent(props) {
  let html = '<div class="popup-content">';
  html += `<h3 class="popup-title">${props.name || '未命名'}</h3>`;

  if (props.period || props.year) {
    html += `<p><strong>时期：</strong>${props.period || props.year}${props.period ? '' : '年'}</p>`;
  }
  if (props.area_km2 !== undefined && props.area_km2 !== null) {
    html += `<p><strong>面积：</strong>${props.area_km2.toFixed(1)} km²</p>`;
  }
  if (props.area_mu !== undefined && props.area_mu !== null) {
    html += `<p><strong>面积：</strong>${props.area_mu.toFixed(0)} 亩</p>`;
  }
  if (props.description) {
    html += `<p class="popup-desc">${props.description}</p>`;
  }
  if (props.village) {
    html += `<p><strong>涉及村庄：</strong>${props.village}</p>`;
  }
  if (props.status) {
    html += `<p><strong>状态：</strong>${props.status}</p>`;
  }
  if (props.investment) {
    html += `<p><strong>投资：</strong>${props.investment} 万元</p>`;
  }
  if (props.species_count) {
    html += `<p><strong>记录物种：</strong>${props.species_count} 种</p>`;
  }

  html += '<div class="popup-footer"><small>数据来源：云南省生态环境厅 / 昆明市滇池管理局</small></div>';
  html += '</div>';
  return html;
}

/**
 * 格式化面积显示
 * @param {number} km2 - 平方公里
 * @returns {string}
 */
function formatArea(km2) {
  if (km2 >= 100) {
    return km2.toFixed(0) + ' km²';
  }
  return km2.toFixed(1) + ' km²';
}

/**
 * 格式化亩数显示
 * @param {number} mu - 亩
 * @returns {string}
 */
function formatMu(mu) {
  if (mu >= 10000) {
    return (mu / 10000).toFixed(2) + ' 万亩';
  }
  return mu.toFixed(0) + ' 亩';
}

/**
 * 根据值生成渐变色（用于热力图等）
 * @param {number} value - 0~1之间的值
 * @returns {string} CSS颜色
 */
function valueToColor(value) {
  // 绿(0) → 黄(0.5) → 红(1)
  const r = Math.min(255, Math.floor(value * 2 * 255));
  const g = Math.min(255, Math.floor((1 - Math.abs(value - 0.5) * 2) * 255));
  const b = Math.max(0, Math.floor((1 - value) * 255));
  return `rgb(${r},${g},${b})`;
}

/**
 * 生成地图图例HTML
 * @param {Array} items - [{color: '#xxx', label: 'xxx'}, ...]
 * @param {string} title - 图例标题
 * @returns {string} HTML字符串
 */
function createLegend(items, title) {
  let html = `<div class="info-legend"><h4>${title || '图例'}</h4>`;
  items.forEach(item => {
    const style = item.dashed ? `border: 2px dashed ${item.color}; background: transparent;` : `background: ${item.color};`;
    html += `<div class="legend-item"><i style="${style}"></i> ${item.label}</div>`;
  });
  html += '</div>';
  return html;
}

/**
 * 创建自定义divIcon
 * @param {string} color - 颜色
 * @param {string} shape - 'circle' | 'square' | 'triangle'
 * @param {number} size - 大小(px)
 * @returns {L.DivIcon}
 */
function createCustomIcon(color, shape, size) {
  size = size || 12;
  let borderRadius, clipPath;

  switch (shape) {
    case 'square':
      borderRadius = '2px';
      break;
    case 'triangle':
      // 使用CSS三角形
      return L.divIcon({
        className: 'custom-marker',
        html: `<div style="width:0;height:0;border-left:${size/2}px solid transparent;border-right:${size/2}px solid transparent;border-bottom:${size}px solid ${color};"></div>`,
        iconSize: [size, size],
        iconAnchor: [size/2, size],
        popupAnchor: [0, -size]
      });
    default: // circle
      borderRadius = '50%';
  }

  return L.divIcon({
    className: 'custom-marker',
    html: `<div style="width:${size}px;height:${size}px;background:${color};border-radius:${borderRadius};border:2px solid white;box-shadow:0 1px 4px rgba(0,0,0,0.3);"></div>`,
    iconSize: [size, size],
    iconAnchor: [size/2, size/2],
    popupAnchor: [0, -size/2]
  });
}

/**
 * 当前地图ID与MAP_NAV索引的映射
 * @param {string} currentMapId - 如 '01'
 * @returns {object} {prev, next, current}
 */
function getNavInfo(currentMapId) {
  const index = MAP_NAV.findIndex(m => m.id === currentMapId);
  const prev = index > 0 ? MAP_NAV[index - 1] : null;
  const next = index < MAP_NAV.length - 1 ? MAP_NAV[index + 1] : null;
  return { prev, next, current: MAP_NAV[index] };
}

/**
 * 生成顶部导航栏HTML
 * @param {string} currentMapId - 如 '01'
 * @returns {string} HTML字符串
 */
function generateNavBar(currentMapId) {
  const nav = getNavInfo(currentMapId);
  const curDir = nav.current.dir;

  // 生成正确的相对路径（跨章节目录时调整路径）
  function getPath(target) {
    if (!target) return '#';
    if (target.dir === curDir) {
      return target.file; // 同目录直接用文件名
    }
    return '../' + target.dir + '/' + target.file; // 跨目录加上../dir/
  }

  let html = '<header class="top-nav">';
  html += '<a href="../index.html" class="home-btn" title="返回目录">🏠 返回目录</a>';

  if (nav.prev) {
    html += `<a href="${getPath(nav.prev)}" class="nav-btn" title="${nav.prev.name}">◀ 上一张</a>`;
  } else {
    html += '<span class="nav-btn disabled">◀ 上一张</span>';
  }

  html += `<span class="page-title">第${nav.current.ch}章：${nav.current.name}</span>`;

  if (nav.next) {
    html += `<a href="${getPath(nav.next)}" class="nav-btn" title="${nav.next.name}">下一张 ▶</a>`;
  } else {
    html += '<span class="nav-btn disabled">下一张 ▶</span>';
  }

  html += '</header>';
  return html;
}

/**
 * 初始化标准Leaflet地图
 * @param {string} containerId - 地图容器ID
 * @param {Object} options - 额外选项
 * @returns {L.Map}
 */
function initStandardMap(containerId, options) {
  options = options || {};
  const map = L.map(containerId, {
    center: options.center || MAP_CONFIG.center,
    zoom: options.zoom || MAP_CONFIG.zoom,
    minZoom: options.minZoom || MAP_CONFIG.minZoom,
    maxZoom: options.maxZoom || MAP_CONFIG.maxZoom,
    zoomControl: true,
    attributionControl: true
  });

  // 添加底图
  const osmLayer = L.tileLayer(MAP_CONFIG.tileLayers.osm.url, {
    attribution: MAP_CONFIG.tileLayers.osm.attribution,
    maxZoom: 18
  }).addTo(map);

  const satelliteLayer = L.tileLayer(MAP_CONFIG.tileLayers.satellite.url, {
    attribution: MAP_CONFIG.tileLayers.satellite.attribution,
    maxZoom: 18
  });

  // 底图切换控件
  L.control.layers({
    '街道地图': osmLayer,
    '卫星影像': satelliteLayer
  }, null, { position: 'topright' }).addTo(map);

  // 比例尺
  L.control.scale({ position: 'bottomright', metric: true, imperial: false }).addTo(map);

  return map;
}

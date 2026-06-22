# 部署到 Gitee 操作指南

## 第2步：推送代码

在 PowerShell 中执行以下命令（将 `你的用户名` 替换为你实际的 Gitee 用户名）：

```powershell
cd "C:\Users\李梦秋\dianchi-maps"
git remote add origin https://gitee.com/你的用户名/dianchi-maps.git
git push -u origin master
```

> 💡 提示：如果提示输入密码，Gitee 现在要求使用**个人访问令牌**而非密码。
> 获取方式：Gitee → 设置 → 私人令牌 → 生成新令牌，勾选 `projects` 权限。

## 第3步：开启 Gitee Pages 服务

1. 进入仓库页面 → 顶部菜单 **"服务"** → **"Gitee Pages"**
2. 部署分支选择 `master`，部署目录保持默认（根目录）
3. 点击 **"启动"**
4. 等待几秒，系统会生成访问网址，例如：
   ```
   https://你的用户名.gitee.io/dianchi-maps
   ```

> ⚠️ Gitee Pages 要求实名认证后才能使用（免费）。在 Gitee 设置 → 安全设置 → 实名认证中完成。

## 第4步：检查部署结果

在浏览器中打开以下地址验证：

| 页面 | URL |
|------|-----|
| 🏠 导航主页 | `https://你的用户名.gitee.io/dianchi-maps/` |
| ① 古代滇池范围复原 | `https://你的用户名.gitee.io/dianchi-maps/ch1-history/map01-ancient-lake.html` |
| ② 明清围湖造田 | `https://你的用户名.gitee.io/dianchi-maps/ch1-history/map02-ming-qing.html` |
| ... | ... |
| ⑫ 公众参与互动地图 | `https://你的用户名.gitee.io/dianchi-maps/ch4-planning/map12-public-participation.html` |

## 第5步：嵌入 GeoScene Online 地图故事

1. 登录 [GeoScene Online](https://www.geosceneonline.cn)
2. 进入地图故事（Story Maps）编辑器
3. 添加内容块，选择 **"嵌入"（Embed）** 组件
4. 粘贴单张地图的完整 URL（如上面的地址）
5. 设置嵌入高度为 `650px`，宽度为 `100%`
6. 为每张地图重复此操作

---

### 备用：如果 Gitee Pages 不可用，改用 GitHub Pages

```powershell
# 在 GitHub 创建仓库 dianchi-maps 后：
cd "C:\Users\李梦秋\dianchi-maps"
git remote add github https://github.com/你的用户名/dianchi-maps.git
git push -u github master
# 然后在仓库 Settings → Pages → Source 选 main 分支 → Save
# 网址：https://你的用户名.github.io/dianchi-maps/
```

---

### 后续更新

当你修改了地图文件后：

```powershell
cd "C:\Users\李梦秋\dianchi-maps"
git add .
git commit -m "更新说明"
git push
# Gitee Pages 会自动重新部署（约1-2分钟）
```

# Chomp

React Native + Expo + TypeScript。整合 Shan 的账号与偏好、Tongrong 的导航与 Split、Yuhan 的推荐与群组流程，统一运行于 Expo。整合分支：`integration/chomp-flows`。

## 启动

需要 Node.js 22.13+（建议 Node 24 LTS）及 pnpm 11。首次安装：

```bash
npm install -g pnpm@11.25.0
pnpm install
pnpm start
```

Expo 启动后按 `w` 打开浏览器。也可以运行 `pnpm web`。手机使用与 Expo SDK 57 兼容的 Expo Go 扫描终端二维码；如果 Expo Go 版本不匹配，使用对应 SDK 或 development build。

```bash
pnpm typecheck
pnpm test
pnpm export:web
```

macOS 如遇 Metro `EMFILE`，安装 Watchman：`brew install watchman`。仅预览也可以 `CI=1 pnpm web`，这种方式修改代码后需要重启服务。

## 没有 Supabase 项目时

开发版本底部的 **Open local preview** 可直接打开账号、Decide、Split 和 Profile 页面。预览使用明确标记的 Sarah Jordan 样例，不创建账号、不验证密码、不发送邮件。偏好仅保存到当前设备的 AsyncStorage，退出预览不会清除样例修改。正式构建不提供预览入口。

正常 Sign in / Sign up 按钮需要真实 Supabase 配置。不能把本地预览当成注册或数据库联调成功。

## 六个页面与原型

| 页面 | Figma node | 实现 |
|---|---|---|
| Sign | 202:17860 | 欢迎页 → Sign in |
| Sign in | 202:17973 | 邮箱密码登录、忘记密码、社交登录入口 |
| Sign up | 202:18017 | 用户名、邮箱、密码确认、条款勾选、邮箱验证状态 |
| Set Preference | 226:18411 | 新账号首次偏好设置，保存 → Decide 首页 |
| Profile | 202:17624 | 动态资料、偏好摘要、编辑资料、设置、退出登录 |
| Profile 1 | 338:28682 | 编辑偏好、预算校验、保存返回、放弃修改提示 |

设计来源：[Version 3](https://www.figma.com/design/dFW4Nr54OfzHFRKWPkJwWV/Prototype?node-id=171-15254)。原始 Figma 图标保存在 `assets/figma`，`manifest.json` 记录节点对应素材，所有字体由本地包加载。

适配说明：原型的 Username 登录改为 Supabase 原生邮箱登录；用户名保存为个人资料。真实新账号不会预选示例过敏原。系统状态栏和底部安全区域在手机由系统提供，Web 预览有模拟状态栏。长页面滚动，底部导航固定，避免原型中的导航覆盖内容。社交按钮接入 Google/Facebook/Twitter OAuth，但每个提供方都需要在 Supabase 后台单独配置。

## Supabase 配置

1. 在 Supabase 创建项目。
2. 将 `supabase/migrations/202610090001_accounts_and_preferences.sql` 在新项目的 SQL Editor 执行一次，或通过 Supabase CLI 执行迁移。
3. 复制 `.env.example` 为 `.env`，填入项目的 Project URL 和 **publishable / anon 公共密钥**。不要填 service_role 密钥。
4. 在 Authentication → URL Configuration 添加应用实际使用的回调地址：Web 开发环境为 `http://localhost:8081/auth/callback`，原生构建为 `chomp://auth/callback`。Expo Go 回调由 `Linking.createURL('auth/callback')` 生成；正式 OAuth 建议使用 development build 的稳定 scheme。
5. 保留邮箱确认流程并配置所需 OAuth 提供方，然后重启 Expo。

邮箱验证开启时，注册后会提示查收邮件；确认后再登录，未保存过偏好的账号进入 Set Preference。密码重置邮件返回应用后显示新密码表单。正常登录后恢复持久会话；资料读取失败会显示重试界面，不会将失败误判为新用户并覆盖数据。

数据库表：`profiles` 和 `dining_preferences`。两张表启用 RLS，仅允许登录用户访问自己的行。密码只交给 Supabase Auth，不保存到应用数据库。首次成功保存偏好记录代表完成引导。

尚无 Supabase 项目，因此真实注册、邮箱、OAuth、跨设备数据库读写及 RLS 隔离需配置后联调。建议用两个测试账号验证不能读取/修改对方行。条款、支持联系方式、通知推送和组内共享的实际服务需团队在发布前补齐；页面明确标注未接入的服务。

## 整合结构

- `App.tsx` 是唯一 Expo 应用入口；`src/navigation/AppNavigator.tsx` 管理账号门禁、原生 Stack 和 Decide / Split / Profile 底部导航。
- `AccountProvider` 管理 Supabase 会话及个人默认偏好。`DiningProvider` 管理单次用餐偏好、房间、投票、收藏与当前会话的用餐历史。
- `PreferencesScreen` 共用首次引导、Profile 编辑及单次用餐表单。单次用餐仅更新 DiningProvider，不写回个人资料。
- Yuhan 的筛选和投票模型保留在 `src/features/group/model.ts`。`preferencesAdapter.ts` 转换两份偏好数据结构，保留未知过敏原，避免悄悄丢弃限制。
- 推荐和群组页面已适配 React Native，使用原有餐厅图片。原始 DOM 视图保留于 `design/yuhan-web` 供设计对照，不再作为另一套 Vite 入口。
- Tongrong 的 Split 页面使用原始 SVG 和整数分金额计算。SVG 由统一 Metro transformer 加载，Shan 的 Asset 组件也已兼容。

## 本地演示流程与限制

1. 开发底栏 → Open local preview → Decide。
2. Start Solo Pick → 确认本次偏好 → 推荐 → 餐厅详情 → Decide 或 Split。
3. Create / Join a Group → 创建房间或输入样例码 `EAT-404` → 本次偏好 → 群组共识 → 推荐 → 投票。
4. 在投票页点击 **Simulate sample members’ votes** 演示其他成员投票，全部投票后显示结果。随机投票和修改投票均可使用。
5. Split → Open Camera → Scan sample receipt → 修改账单、检查每位分账金额 → Done & Back to Split。自己的照片暂需手动录入。

餐厅是静态样例，没有实时位置、电话、订位或饮食安全验证。无匹配时保留限制并显示空结果，不静默放宽过敏原。食材明细尚未接入，所以 disliked foods 会保留和展示，但不能据此验证菜品。可以用无过敏限制的虚构单次偏好演示完整推荐流程；真实过敏限制不要为了得到结果而删除。

群组码、邀请列表、投票、历史、收藏、账单暂为当前会话的本地演示，刷新即重置；个人预览资料和默认偏好保存在 AsyncStorage。尚未接入跨用户房间、实时订阅、OCR 或支付。真实账号资料功能保留 Supabase 接入，需按上文配置项目后联调。原生三端 bundle 可构建，尚未进行真机相机和登录测试。

## 已执行验证

- TypeScript 检查通过；16 项测试覆盖账号/预算校验、偏好转换、限制筛选、群组共识、投票替换、结果、随机选择及分账金额。
- Expo Web、iOS、Android bundle 导出成功（不是安装包/真机测试）。
- 浏览器验证单次偏好与 Profile 隔离、空结果、推荐列表、邀请码校验、群组共识、投票到结果，以及样例扫描、四人精确分账、保存返回。
- 三条来源分支的提交历史保留在整合分支内。

参考：[Expo 项目配置](https://docs.expo.dev/get-started/create-a-project/)、[Supabase React Native Auth](https://supabase.com/docs/guides/auth/quickstarts/react-native)。

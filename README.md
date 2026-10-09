# Chomp

React Native + Expo + TypeScript。Shan 负责的六个界面根据 Figma **Hi-Fi Version 3** 实现，代码在 `feature-shan-preferences` 分支。

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

开发版本底部的 **Open local preview** 可直接打开六个页面。预览使用明确标记的 Sarah Jordan 样例，不创建账号、不验证密码、不发送邮件。偏好仅保存到当前设备的 AsyncStorage，退出预览不会清除样例修改。正式构建不提供预览入口。

正常 Sign in / Sign up 按钮需要真实 Supabase 配置。不能把本地预览当成注册或数据库联调成功。

## 六个页面与原型

| 页面 | Figma node | 实现 |
|---|---|---|
| Sign | 202:17860 | 欢迎页 → Sign in |
| Sign in | 202:17973 | 邮箱密码登录、忘记密码、社交登录入口 |
| Sign up | 202:18017 | 用户名、邮箱、密码确认、条款勾选、邮箱验证状态 |
| Set Preference | 226:18411 | 新账号首次偏好设置，保存 → Decide 衔接点 |
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

## 与组员合并

- `App.tsx` 集中管理 `Screen` 类型的页面切换，Decide / Split 目前仅是明确标记的衔接页。接入组员页面时替换对应分支；不要保留两套应用入口。
- `AccountProvider` 提供 session、profile、preferences、savePreferences、saveProfile、signOut。
- `PreferencesScreen` 的 `edit` 参数共用首次设置和资料编辑表单。
- `src/lib/repository.ts` 是数据访问边界；`src/types/models.ts` 定义偏好结构，组员的推荐功能可以直接使用。
- 默认偏好和单次用餐偏好应分开；Decide 临时调整不应直接覆盖这里保存的资料。

## 已执行验证

- TypeScript 检查；4 个测试覆盖标签去重、预算边界、注册校验、新用户不继承样例过敏原。
- Expo Web、iOS、Android bundle 导出成功（不是原生安装包/真机测试）。
- 浏览器验证六页显示、空登录校验、自定义菜系、错误预算拦截、首次保存到 Decide、Profile 摘要更新、再次编辑保存。

参考：[Expo 项目配置](https://docs.expo.dev/get-started/create-a-project/)、[Supabase React Native Auth](https://supabase.com/docs/guides/auth/quickstarts/react-native)。

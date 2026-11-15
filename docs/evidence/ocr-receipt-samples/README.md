# 真实餐厅小票补充验收

来源：用户上传原图、手机 Safari 识别结果截图及明确反馈。会话记录日期为 2026-11-01；原票消费日期不等于测试日期。截图部署为 `https://chomp-pteozflsy-chomp4.vercel.app`，对应 Git SHA 未核对。未修改代码、未重新运行 OCR。

| 样本 | 原票与预期 | 实际结果 | 验收 |
| --- | --- | --- | --- |
| Beachwood Cafe | Classic Waffle $15.95、Bacon $7、Hot Teas $3.95，小计 $26.90；税 $2.56；Order Total $29.46 应作为汇总字段 | Order Total $29.46 被当作第四项商品，小计变为 $56.36，加税后 $58.92；页面显示 Printed total differs / review required | 未通过；汇总行误分类导致重复计费 |
| COSITAS RICAS | 原票总额 $30.45，Guests: 1 | 截图总额 $30.45、人均 $30.45；用户明确反馈此样本通过 | 本次样本通过；截图仅显示末尾餐品，未独立逐项复核完整名称/数量及日期，也未证明保存后持久化 |

证据：[Beachwood 原票](beachwood-original.jpg)、[错误结果](beachwood-result.png)、[COSITAS 原票](cositas-original.jpg)、[识别结果](cositas-result.png)。

本轮是两个样本一成一败，不能据此推算总体准确率，也不关闭此前 Costco/Walmart 等失败记录。OCR 整体准确率仍未通过。Beachwood 的金额差异提示有效，但不能抵消识别错误；保存前须人工移除错误汇总项并核对金额。本轮未验证该人工修正步骤。

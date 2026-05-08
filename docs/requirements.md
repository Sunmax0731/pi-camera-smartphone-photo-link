# 要件定義

- Repo: `pi-camera-smartphone-photo-link`
- Domain: IoT
- Rank: 59 / P3 / Score 52
- Idea No: 12
- アイデア名: Piカメラ・スマホ写真連携
- 公開先: GitHub Release / 自宅LAN
- Version: 0.1.0-alpha.1

## 背景
Piカメラ映像確認、スマホ写真転送、撮影ログ保存をまとめる。

## 課題
スマホ、PC、Pi間で写真や映像を渡す導線が毎回違う。

## closed alpha要件
- LAN simulator, mock device, CLI, and web dashboardとして実機や本番外部サービスなしで代表フローを確認できる。
- `samples/representative-suite.json`で4代表シナリオを自動検証する。
- MVPだけで止めず、UI/UX、責務分割、運用、配布準備まで整備する。
- 手動テスト未実施を明記し、QCDS最高評価はS-に制限する。

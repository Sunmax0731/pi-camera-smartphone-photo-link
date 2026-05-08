# テスト計画

- Repo: `pi-camera-smartphone-photo-link`
- Domain: IoT
- Rank: 59 / P3 / Score 52
- Idea No: 12
- アイデア名: Piカメラ・スマホ写真連携
- 公開先: GitHub Release / 自宅LAN
- Version: 0.1.0-alpha.1

## 自動テスト
- Command: `npm test`
- Working directory: `D:\AI\IoT\pi-camera-smartphone-photo-link`
- Expected: `dist/validation-result.json`、`dist/web-smoke-result.json`、`dist/pi-camera-smartphone-photo-link-docs.zip` が生成される。

## 代表シナリオ
| ID | 期待 |
| --- | --- |
| happy-path | pass |
| missing-required | fail |
| warning | warning |
| mixed-batch | fail |

## 手動テスト
Codex側では未実施。手順はmanual-testとstrict addendumに記載。

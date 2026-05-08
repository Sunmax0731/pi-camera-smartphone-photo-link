# 責務分割

- Repo: `pi-camera-smartphone-photo-link`
- Domain: IoT
- Rank: 59 / P3 / Score 52
- Idea No: 12
- アイデア名: Piカメラ・スマホ写真連携
- 公開先: GitHub Release / 自宅LAN
- Version: 0.1.0-alpha.1

| 領域 | 責務 |
| --- | --- |
| `src/core` | ドメイン判定 |
| `src/validators` | 入力検証 |
| `src/report` | 結果整形 |
| `src/review-model` | QCDS評価 |
| `src/cli` | CLI入口 |
| `app` | UI |
| `src/simulator` | mock telemetry |
| `src/device-adapter` | 境界adapter |
| `src/host-adapter` | 境界adapter |

coreはDOM、GitHub、実機に依存させない。adapterは将来の実機、Android、LAN連携を差し替える境界とする。

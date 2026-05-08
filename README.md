# pi-camera-smartphone-photo-link

Piカメラ・スマホ写真連携 の closed alpha prototype。Piカメラ映像確認、スマホ写真転送、撮影ログ保存をまとめる。

## Status

- Version: 0.1.0-alpha.1
- Rank: 59 / P3 / Score 52
- Domain: IoT
- Public target: GitHub Release / 自宅LAN
- Manual testing: not run by Codex

## Included

- LAN simulator, mock device, CLI, and web dashboard
- core / validators / report / review-model / CLI / UI の責務分割
- happy-path、missing-required、warning、mixed-batch の代表suite
- QCDS、security/privacy、release evidence、docs ZIP

## Commands

```powershell
npm test
npm run serve -- --port 4173
```

Open `http://localhost:4173/app/` for the closed alpha UI.

export const productProfile = {
  "repo": "pi-camera-smartphone-photo-link",
  "title": "Piカメラ・スマホ写真連携",
  "domain": "IoT",
  "version": "0.1.0-alpha.1",
  "rank": 59,
  "tier": "P3",
  "score": 52,
  "publicTarget": "GitHub Release / 自宅LAN",
  "overview": "Piカメラ映像確認、スマホ写真転送、撮影ログ保存をまとめる。",
  "problem": "スマホ、PC、Pi間で写真や映像を渡す導線が毎回違う。",
  "differentiation": "共有先をPiに集約し、端末ごとに最短操作を用意する。",
  "modules": [
    "src/core",
    "src/validators",
    "src/report",
    "src/review-model",
    "src/cli",
    "app",
    "src/simulator",
    "src/device-adapter",
    "src/host-adapter"
  ],
  "manualTestStatus": "not-run",
  "qcdsGrades": {
    "Quality": "S-",
    "Cost": "A+",
    "Delivery": "A+",
    "Satisfaction": "S-"
  },
  "securityBoundaries": [
    "実機なしで検証できるようsample telemetry、mock device、dry-run CLI、Web dashboardに閉じる。",
    "家庭LAN公開時は認証、端末allowlist、危険操作の二段階確認、ログ、復旧手順を必須にする。",
    "カメラ、ファイル、MQTT、自動化、バックアップ、OCR、音声/RSS保存は読み取り、匿名サンプル、dry-runを既定にする。"
  ]
};

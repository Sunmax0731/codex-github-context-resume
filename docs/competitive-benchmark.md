# 競合・公式基準ベンチマーク

## 比較方針

Codex/GitHub文脈再開支援 は、競合の全機能を再実装するのではなく、Gitの操作支援ではなく、Codex再開時に必要な文脈と証跡の揃い具合を示す。

| 参照先 | URL | 競合・公式標準の強み | 採用する評価基準 | 差別化 |
| --- | --- | --- | --- | --- |
| VS Code Extension API | https://code.visualstudio.com/api | コマンド、Webview、ワークスペース情報を拡張機能として統合できる。 | エディタ内で作業文脈と結果を確認できること。 | Gitの操作支援ではなく、Codex再開時に必要な文脈と証跡の揃い具合を示す。 |
| GitHub Actions | https://docs.github.com/en/actions/using-workflows/about-workflows | 自動検証の実行条件、ログ、失敗履歴をワークフローとして残せる。 | リリース、差分、検証ログ、ブランチ状態を追跡できること。 | Gitの操作支援ではなく、Codex再開時に必要な文脈と証跡の揃い具合を示す。 |
| GitKraken | https://www.gitkraken.com/features/pr-and-code-review | PR、ブランチ、コードレビューをGUIで可視化できる。 | リリース、差分、検証ログ、ブランチ状態を追跡できること。 | Gitの操作支援ではなく、Codex再開時に必要な文脈と証跡の揃い具合を示す。 |

## 改善へ反映した点

- QCDS評価に競合比較と公式標準の確認を追加した。
- 実装だけでなく、README、導入手順、ユーザーガイド、手動テスト、リリース前資料を評価対象にした。
- 文字化けをQCDSのQuality/Satisfactionリスクとして検出する。

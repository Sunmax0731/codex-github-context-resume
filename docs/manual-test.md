# 手動テスト

## 準備

- Visual Studio Code を使用する。
- リポジトリパス: `D:\AI\VSCodeExtension\codex-github-context-resume`
- ローカルサーバーは不要。

## 手順

1. PowerShellで `cd D:\AI\VSCodeExtension\codex-github-context-resume` を実行する。
2. `npm test` が成功することを確認する。
3. `code D:\AI\VSCodeExtension\codex-github-context-resume` で VS Code を開く。
4. `Run Extension` 構成で Extension Development Host を起動する。
5. Command Palette から `起動・復帰・Codex/GitHub文脈管理: レビューを開く` を実行する。
6. Webviewに sample result が表示されることを確認する。

## 期待結果

- Extension Development Host が起動できる。
- コマンド実行でレビューWebviewが開く。
- 必須項目チェックの結果が日本語で読める。

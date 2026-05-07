const vscode = require('vscode');
const { analyzeItems, buildReviewModel, renderHtmlReport } = require('./src/core.cjs');

function activate(context) {
  const disposable = vscode.commands.registerCommand('codex-github-context-resume.openReview', () => {
    const report = analyzeItems({
  "items": [
    {
      "id": "codex-github-context-resume-1",
      "title": "Codex/GitHub文脈再開支援 サンプル1",
      "status": "ready",
      "workspace": "D:\\AI\\VSCodeExtension\\codex-github-context-resume",
      "issue": "#1",
      "branch": "main",
      "resumeNote": "次回は検証ログから再開する"
    },
    {
      "id": "codex-github-context-resume-missing-required",
      "title": "必須項目不足サンプル",
      "status": "ready",
      "issue": "#1",
      "branch": "main",
      "resumeNote": "次回は検証ログから再開する"
    }
  ]
});
    const model = buildReviewModel(report);
    const panel = vscode.window.createWebviewPanel('codex-github-context-resume', 'Codex/GitHub文脈再開支援', vscode.ViewColumn.One, { enableScripts: false });
    panel.webview.html = renderHtmlReport(report);
    vscode.window.setStatusBarMessage('Codex/GitHub文脈再開支援: ' + model.statusLabel, 5000);
  });
  context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = { activate, deactivate };
